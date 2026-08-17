import { useEffect, type RefObject } from "react";
import * as wanakana from "wanakana";

// Binds wanakana's romaji->kana IME to the input while enabled. The bound
// input must stay uncontrolled: wanakana rewrites .value directly, and a
// controlled value would fight it.
export function useWanakana(ref: RefObject<HTMLInputElement | null>, enabled: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    wanakana.bind(el);
    return () => {
      try {
        wanakana.unbind(el);
      } catch {
        // Already unbound.
      }
    };
  }, [ref, enabled]);
}
