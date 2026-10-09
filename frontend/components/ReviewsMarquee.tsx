"use client";

import { useLayoutEffect, useRef } from "react";
import { Star } from "lucide-react";
import type { Review } from "../data/reviews";
import gsap from "gsap";

export default function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(track, {
        xPercent: -50,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const items = [...reviews, ...reviews];

  return (
    <div
      className="marquee-mask overflow-hidden"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max gap-3 sm:gap-5">
        {items.map((r, i) => (
          <div
            key={i}
            aria-hidden={i >= reviews.length}
            className="flex w-[min(78vw,340px)] flex-none flex-col justify-between gap-6 border border-[#333] bg-card p-[18px] text-[0.85rem] text-[#e8e8e4] sm:w-[clamp(260px,28vw,380px)]"
          >
            <span className="inline-flex gap-[3px]" aria-hidden="true">
              {Array.from({ length: 5 }, (_, s) => (
                <Star
                  key={s}
                  size={14}
                  fill={s < r.rating ? "#f0b429" : "none"}
                  stroke={s < r.rating ? "#f0b429" : "currentColor"}
                  opacity={s < r.rating ? 1 : 0.35}
                />
              ))}
            </span>
            <p>{r.text}</p>
            <div>
              <small className="text-[0.7rem] uppercase tracking-[0.06em] opacity-75">
                {r.name}
              </small>
              <span className="mt-[2px] block text-[0.75rem] opacity-75">{r.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
