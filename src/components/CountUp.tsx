import { useEffect, useRef, useState } from "react";

/**
 * Animates the first number inside a display string (e.g. "32 Hours" or "₹1 Lakh+")
 * when the element scrolls into view. Non-numeric strings render unchanged.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/\d+/);
  const target = match ? Number(match[0]) : null;
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (target === null || target === 0) return;
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value.replace(/\d+/, String(Math.round(target * eased))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
