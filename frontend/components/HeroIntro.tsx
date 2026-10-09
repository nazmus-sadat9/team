"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";

export default function HeroIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 22, autoAlpha: 0, duration: 0.8 })
        .from(
          ".hero-line-inner",
          { yPercent: 110, autoAlpha: 0, duration: 1, stagger: 0.12 },
          "-=0.5"
        )
        .from(".hero-lede", { y: 22, autoAlpha: 0, duration: 0.9 }, "-=0.6")
        .from(".hero-actions", { y: 22, autoAlpha: 0, duration: 0.9 }, "-=0.7")
        .from(
          ".scroll-hint-dot",
          { y: "-40%", autoAlpha: 0, duration: 0.6 },
          "-=0.4"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
