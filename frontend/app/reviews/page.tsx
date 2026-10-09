import Link from "next/link";
import { Star } from "lucide-react";
import Reveal from "../../components/Reveal";
import reviews from "../../data/reviews";
import { ArrowIcon } from "../../components/icons";
import { wrap, eyebrow, btnSolid } from "../../components/ui";

export const metadata = { title: "Client Reviews — Hyperion Studio" };

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-[3px]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          fill={i < rating ? "#f0b429" : "none"}
          stroke={i < rating ? "#f0b429" : "currentColor"}
          opacity={i < rating ? 1 : 0.35}
        />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <div className={`${wrap} pb-[clamp(64px,9vw,110px)]`}>
      <Reveal>
        <p className={`${eyebrow} mt-[clamp(40px,7vw,72px)]`}>Client reviews</p>
        <h1 className="pt-0 text-[clamp(3rem,8vw,4.6rem)] leading-[1.05] tracking-[-0.01em]">
          Loved by the teams <em>we build for.</em>
        </h1>
        <p className="mt-6 max-w-[32rem] text-[clamp(1rem,1.6vw,1.2rem)] text-[#e4e4e0]">
          Every review below is from a real engagement. Review submission is coming soon — new
          reviews appear here once approved by the studio.
        </p>
      </Reveal>
      <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-[clamp(12px,1.5vw,20px)]">
        {reviews.map((r, i) => (
          <Reveal
            as="article"
            key={r.name}
            delay={(i % 3) * 90}
            className="flex min-h-[220px] min-w-0 flex-col justify-between gap-6 border border-[#333] bg-card p-[18px] text-[0.85rem] text-[#e8e8e4]"
          >
            <Stars rating={r.rating} />
            <p>{r.text}</p>
            <div>
              <small className="text-[0.7rem] uppercase tracking-[0.06em] opacity-75">{r.name}</small>
              <span className="mt-[2px] block text-[0.75rem] opacity-75">{r.detail}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-[clamp(40px,6vw,72px)] flex flex-wrap items-center gap-5 border-t border-line pt-[clamp(28px,4vw,44px)]">
        <p className="text-[clamp(1.4rem,3vw,2rem)]">Want results like these?</p>
        <Link className={btnSolid} href="/contact">
          Start your project <ArrowIcon />
        </Link>
      </Reveal>
    </div>
  );
}
