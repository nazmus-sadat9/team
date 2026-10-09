"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode, Ref } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
  id?: string;
  y?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  id,
  y = 30,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLElement | null>(null);
  const Tag = as as "div";

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement & HTMLElement>}
      id={id}
      className={`gsap-reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
