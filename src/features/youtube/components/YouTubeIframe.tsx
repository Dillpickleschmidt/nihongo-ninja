"use client"
import { createResource } from "solid-js"

type YouTubeIframeProps = {
  videoId: string
  title: string
  startTime?: number
  seekTime?: number | null
}

export default function YouTubeIframe({
  videoId,
  title,
  startTime,
  seekTime,
}: YouTubeIframeProps) {
  let iframeRef!: HTMLIFrameElement

  createResource(() => {
    if (seekTime !== null && iframeRef) {
      iframeRef.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "seekTo",
          args: [seekTime, true],
        }),
        "*",
      )
    }
  })

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1${startTime ? `&start=${startTime}` : ""}`
  // console.log("src: ", src)

  const srcDoc = `
    <style>
      body {
        background-image: url(https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        display: grid;
        place-items: center;
        min-height: 97dvh;
        overflow: hidden;
        cursor: pointer;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
      }
      a:focus {
        outline: none;
      }
      a:focus svg, a:hover svg {
        transform: translate(-50%, -50%) scale(0.9);
      }
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease;
      }
    </style>
    <a href='${src}'>
      <svg viewBox='0 0 16 16' width='96' height='96' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
        <circle cx='50%' cy='50%' r='7.75' fill='none' stroke='#000' stroke-width='.5'/>
        <circle cx='50%' cy='50%' r='7.25' fill='none' stroke='#fff' stroke-width='.5'/>
        <circle cx='50%' cy='50%' r='7' fill='#0009'/>
        <polygon points='12, 8 6, 4.5 6, 11.5' fill='#fff' stroke-linejoin='round'/>
      </svg>
    </a>`

  return (
    <iframe
      ref={iframeRef}
      title={title}
      class="aspect-video w-full"
      src={src}
      allow="autoplay"
      allowfullscreen
      loading="lazy"
      srcdoc={srcDoc}
    />
  )
}
