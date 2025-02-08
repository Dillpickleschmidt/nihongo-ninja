const getAudioContext = () => {
  if (typeof window === "undefined") return null
  return window.AudioContext || (window as any).webkitAudioContext
}

const AudioContextClass = getAudioContext()

const TARGET_VOLUME = 0.3 // Adjusted target volume
const MIN_GAIN = 0.5 // Don't reduce volume below this
const MAX_GAIN = 4.0 // Don't amplify more than this

export class AudioNormalizer {
  private audioContext: AudioContext
  private gainNode: GainNode
  private cache = new Map<string, { buffer: AudioBuffer; peak: number }>()
  private static instance: AudioNormalizer
  private activeSource: AudioBufferSourceNode | null = null

  private constructor() {
    if (!AudioContextClass) {
      throw new Error("AudioContext not supported")
    }
    this.audioContext = new AudioContextClass()
    this.gainNode = this.audioContext.createGain()
    this.gainNode.connect(this.audioContext.destination)
    // console.log("🎵 AudioNormalizer initialized")
  }

  static getInstance(): AudioNormalizer | DummyAudioNormalizer {
    if (!AudioContextClass) {
      // console.log("⚠️ AudioContext not supported, using dummy normalizer")
      return new DummyAudioNormalizer()
    }
    if (!AudioNormalizer.instance) {
      AudioNormalizer.instance = new AudioNormalizer()
    }
    return AudioNormalizer.instance
  }

  async play(url: string): Promise<HTMLAudioElement> {
    try {
      // console.log("🎵 Starting audio playback for:", url)

      // Stop any currently playing audio
      if (this.activeSource) {
        // console.log("⏹️ Stopping previous audio")
        this.activeSource.stop()
        this.activeSource = null
      }

      const cached = this.cache.get(url)
      if (cached) {
        // console.log("📦 Using cached audio data")
        return this.playBuffer(cached.buffer, cached.peak, url)
      }

      // console.log("⏳ Fetching and processing audio...")
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
      const peak = this.detectPeak(audioBuffer)

      // console.log("📊 Audio analysis:", {
      //   duration: audioBuffer.duration.toFixed(2) + "s",
      //   channels: audioBuffer.numberOfChannels,
      //   peakAmplitude: peak.toFixed(3),
      //   normalizedGain: Math.max(
      //     MIN_GAIN,
      //     Math.min(MAX_GAIN, TARGET_VOLUME / peak),
      //   ).toFixed(3),
      // })

      this.cache.set(url, { buffer: audioBuffer, peak })
      return this.playBuffer(audioBuffer, peak, url)
    } catch (error) {
      console.error("❌ Audio normalization failed:", error)
      return new DummyAudioNormalizer().play(url)
    }
  }

  private detectPeak(audioBuffer: AudioBuffer): number {
    // console.log("🔍 Analyzing peak amplitude...")
    let peak = 0
    const skipSize = Math.ceil(audioBuffer.length / 1000)
    const samples = Math.floor(audioBuffer.length / skipSize)

    for (let c = 0; c < audioBuffer.numberOfChannels; c++) {
      const data = audioBuffer.getChannelData(c)
      for (let i = 0; i < data.length; i += skipSize) {
        peak = Math.max(peak, Math.abs(data[i]))
      }
    }

    // console.log(`📈 Peak detection complete:
    //   - Analyzed ${samples} samples per channel
    //   - Peak amplitude: ${peak.toFixed(3)}`)

    return peak || 1
  }

  private playBuffer(
    audioBuffer: AudioBuffer,
    peak: number,
    url: string,
  ): HTMLAudioElement {
    const source = this.audioContext.createBufferSource()
    source.buffer = audioBuffer

    const idealGain = TARGET_VOLUME / peak
    const normalizedGain = Math.max(MIN_GAIN, Math.min(MAX_GAIN, idealGain))
    this.gainNode.gain.value = normalizedGain

    // console.log("🔊 Playing audio with:", {
    //   originalPeak: peak.toFixed(3),
    //   idealGain: idealGain.toFixed(3),
    //   appliedGain: normalizedGain.toFixed(3),
    //   expectedVolume: (peak * normalizedGain).toFixed(3),
    //   targetVolume: TARGET_VOLUME,
    // })

    source.connect(this.gainNode)
    source.start(0)

    // Store the active source
    this.activeSource = source

    const audio = new Audio(url)
    audio.onpause = () => {
      // console.log("⏸️ Audio paused")
      if (this.activeSource === source) {
        source.stop()
        this.activeSource = null
      }
    }
    source.onended = () => {
      // console.log("✅ Audio playback completed")
      if (this.activeSource === source) {
        this.activeSource = null
      }
      audio.dispatchEvent(new Event("ended"))
    }

    return audio
  }

  clearCache(): void {
    // console.log("🧹 Clearing audio cache")
    this.cache.clear()
  }
}

class DummyAudioNormalizer {
  async play(url: string): Promise<HTMLAudioElement> {
    // console.log("⚠️ Using dummy audio player for:", url)
    const audio = new Audio(url)
    audio.play().catch(console.error)
    return audio
  }

  clearCache(): void {
    // console.log("⚠️ Dummy normalizer: cache clear (no-op)")
  }
}
