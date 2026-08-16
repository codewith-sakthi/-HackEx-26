import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

/** Live countdown to the hackathon start. Renders zeros during SSR to avoid hydration drift. */
export function Countdown({ target }: { target: string }) {
  const goal = new Date(target).getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(diff(goal));
    const id = setInterval(() => setTime(diff(goal)), 1000);
    return () => clearInterval(id);
  }, [goal]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="glass-panel rounded-2xl px-2 py-4 text-center sm:px-4 sm:py-5"
        >
          <div className="font-display text-2xl font-bold tabular-nums sm:text-4xl">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.6rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
