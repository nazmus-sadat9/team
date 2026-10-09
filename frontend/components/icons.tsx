import type { CSSProperties } from "react";
import { Sparkle, ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

const ico = "h-3.5 w-3.5 shrink-0 transition-transform duration-250";

export function StarIcon({ className, style }: IconProps) {
  return (
    <Sparkle
      className={className ?? "h-[18px] w-[18px] shrink-0 text-accent"}
      style={style}
      size={18}
      aria-hidden="true"
    />
  );
}

export function ArrowIcon({ className }: IconProps) {
  return <ArrowUpRight className={className ?? ico} size={14} aria-hidden="true" />;
}

export function ArrowRightIcon({ className }: IconProps) {
  return <ArrowRight className={className ?? ico} size={14} aria-hidden="true" />;
}

export function ArrowLeftIcon({ className }: IconProps) {
  return <ArrowLeft className={className ?? ico} size={14} aria-hidden="true" />;
}
