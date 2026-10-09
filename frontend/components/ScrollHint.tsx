"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollHint() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dotRef.current,
        { y: "-110%" },
        { y: "275%", duration: 2.2, ease: "power2.inOut", repeat: -1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute right-[clamp(20px,4vw,56px)] bottom-16 hidden flex-col items-center gap-[14px] text-[0.6rem] uppercase tracking-[0.12em] text-muted md:flex"
    >
      <span className="[writing-mode:vertical-rl]">Scroll to explore</span>
      <i className="relative block h-10 w-px overflow-hidden bg-line">
        <span ref={dotRef} className="scroll-hint-dot absolute left-0 top-0 h-[40%] w-full bg-accent" />
      </i>
    </div>
  );
}
