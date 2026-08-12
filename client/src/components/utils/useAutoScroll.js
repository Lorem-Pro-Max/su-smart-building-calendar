import { useEffect, useRef } from "react";

const SCROLL_SPEED_PX_PER_SEC = 40;
const PAUSE_MS = 2000;

export function useAutoScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frameId;
    let lastFrameMs = performance.now();
    let pausedUntilMs = lastFrameMs + PAUSE_MS;

    const step = (nowMs) => {
      frameId = requestAnimationFrame(step);

      const elapsedMs = Math.min(nowMs - lastFrameMs, 100);
      lastFrameMs = nowMs;
      const maxScrollTop = el.scrollHeight - el.clientHeight;
      if (maxScrollTop <= 0 || nowMs < pausedUntilMs) return;

      if (el.scrollTop >= maxScrollTop - 1) {
        el.scrollTop = 0;
        pausedUntilMs = nowMs + PAUSE_MS;
        return;
      }

      el.scrollTop += (SCROLL_SPEED_PX_PER_SEC * elapsedMs) / 1000;

      if (el.scrollTop >= maxScrollTop - 1) {
        pausedUntilMs = nowMs + PAUSE_MS;
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return scrollRef;
}
