import { useEffect, useState } from "react";

import hackexLogo from "@/assets/hackex-logo.png.asset.json";

/** Alternates between the HackEx'26 logo and the organising club name every few seconds. */
export function BrandMark({ size = "md" }: { size?: "md" | "lg" }) {
  const [showClub, setShowClub] = useState(false);

  // Use the local PNG file directly.
  const logoSrc = "/hackex-logo.png";

  useEffect(() => {
    const id = setInterval(() => setShowClub((v) => !v), 4000);
    return () => clearInterval(id);
  }, []);

  const text = size === "lg" ? "text-xl" : "text-lg";
  const img = size === "lg" ? "h-10" : "h-8";

  return (
    <span className="flex items-center">
      <span
        key={showClub ? "club" : "event"}
        className="animate-in fade-in slide-in-from-bottom-1 flex items-center duration-500"
      >
        {showClub ? (
          <span className={`font-display ${text} font-bold tracking-tight whitespace-nowrap`}>
            <span className="gradient-text">Techno Debuggers</span>
          </span>
        ) : (
          <img src={logoSrc} alt="HackEx'26 logo" width={200} height={72} className={`${img} w-auto`} />
        )}
      </span>
    </span>
  );
}
