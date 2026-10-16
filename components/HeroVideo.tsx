"use client";

import { useEffect, useState } from "react";
import { hero } from "@/lib/content";

/** The card is landscape from lg up, so that is where the wide cut belongs. */
const WIDE = "(min-width: 1024px)";

/**
 * Decorative looping video under the hero content, hidden for anyone who
 * prefers reduced motion. The cut is chosen in the browser and swapped if the
 * window changes shape (an iPad turned on its side), since a <source media>
 * choice is made once and never revisited. Until it plays, the walnut card
 * shows through, with the poster matching whichever cut is chosen.
 */
export function HeroVideo() {
  const [cut, setCut] = useState<(typeof hero.video)["wide"] | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const pick = () => setCut(mq.matches ? hero.video.wide : hero.video.tall);
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, []);

  if (!cut) return null;
  return (
    <video
      key={cut.src}
      className="pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden"
      src={cut.src}
      poster={cut.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
