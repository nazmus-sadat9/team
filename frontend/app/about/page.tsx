import Link from "next/link";
import Reveal from "../../components/Reveal";
import { ArrowIcon } from "../../components/icons";
import { wrap, eyebrow, btnSolid, btnOutline } from "../../components/ui";

export const metadata = { title: "About Us — Hyperion Studio" };

const principles = [
  {
    n: "01",
    title: "Feeling first",
    text: "Specs fade, feeling sticks. We design for the gut reaction first and engineer everything behind it to hold up under a closer look.",
  },
  {
    n: "02",
    title: "Small by choice",
    text: "No account managers, no hand-offs. You work directly with the people designing and building your product, from first call to launch.",
  },
  {
    n: "03",
    title: "Built to last",
    text: "Trends expire. We build identities and systems with a long shelf life — clean code, clear strategy, and design that ages well.",
  },
  {
    n: "04",
    title: "Honest by default",
    text: "If an idea won't work, we'll tell you before you pay for it. Clear pricing, honest timelines, and pushback when it matters.",
  },
];

const facts = [
  { k: "Est. 2026", v: "Independent since day one" },
  { k: "Based in Bangladesh", v: "Working with brands worldwide" },
  { k: "One sharp team", v: "Strategy, design and code in-house" },
];

export default function AboutPage() {
  return (
    <>
      <div className={`${wrap} py-[clamp(48px,9vh,110px)] pb-[clamp(56px,9vw,96px)]`}>
        <Reveal>
          <p className={eyebrow}>About Hyperion</p>
          <h1 className="max-w-[16ch] text-[clamp(2.8rem,8vw,6rem)] leading-[1.02] tracking-[-0.02em]">
            A small studio with <em>outsized gravity.</em>
          </h1>
          <p className="mt-[clamp(24px,4vh,36px)] max-w-[30rem] text-[clamp(1rem,1.6vw,1.2rem)] text-[#e4e4e0]">
            Hyperion is an independent digital studio for the brands shaping what&apos;s next.
            We bring strategy, design and code together under one roof — so ideas go from
            thought to final pixel without losing their pull.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line bg-bg">
        <Reveal
          className={`${wrap} grid grid-cols-2 items-start gap-[clamp(24px,4vw,64px)] py-[clamp(48px,8vw,88px)] max-lg:grid-cols-1`}
        >
          <h2 className="text-[clamp(2.6rem,6vw,3.6rem)] leading-[1.1]">
            Our <em className="text-[1.1em]">story.</em>
          </h2>
          <div className="flex max-w-[32rem] flex-col gap-[22px] text-[#ecece8]">
            <p>
              We started Hyperion because agency work felt broken — bloated teams, diluted ideas,
              and websites that looked fine but felt like nothing. We wanted the opposite: a
              small, sharp team where every project gets senior attention.
            </p>
            <p>
              Today we partner with founders and teams around the world, from first sketch to
              deployed product. Brand, website, web app — whatever the idea needs, we bring it
              to real life.
            </p>
          </div>
        </Reveal>

        <div className={`${wrap} pb-[clamp(48px,7vw,80px)]`}>
          <Reveal className="mb-7 flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-muted">
            <span>what we stand by</span>
          </Reveal>
          <div className="grid grid-cols-2 border border-line max-lg:grid-cols-1">
            {principles.map((p, i) => (
              <Reveal
                as="article"
                key={p.n}
                delay={(i % 2) * 90}
                className={`flex min-w-0 flex-col gap-3 border-b border-line p-[clamp(24px,3vw,36px)] transition-colors hover:bg-accent/5 max-lg:border-r-0 ${i % 2 === 0 ? "border-r max-lg:border-r-0" : ""}`}
              >
                <span className="text-[0.72rem] tracking-[0.08em] text-accent">{p.n}</span>
                <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)]">{p.title}</h3>
                <p className="max-w-[26rem] text-[0.9rem] text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className={`${wrap} pb-[clamp(56px,8vw,96px)]`}>
          <Reveal className="grid grid-cols-3 gap-[clamp(12px,1.5vw,20px)] max-lg:grid-cols-1">
            {facts.map((f) => (
              <div key={f.k} className="flex flex-col gap-1 border-t border-accent pt-4">
                <strong className="text-[1.05rem] font-medium">{f.k}</strong>
                <span className="text-[0.85rem] text-muted">{f.v}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="border-t border-line py-[clamp(56px,8vw,96px)] pb-[clamp(64px,9vw,110px)]">
          <Reveal className={wrap}>
            <div className="mb-2 text-[0.72rem] uppercase tracking-[0.06em] text-[#cfcfcb]">
              The people behind it
            </div>
            <h2 className="text-[clamp(3rem,8vw,5rem)] leading-[1.1]">
              Meet the team behind <em className="block text-[1.1em]">the gravity.</em>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className={btnSolid} href="/team">
                Meet our team <ArrowIcon />
              </Link>
              <Link className={btnOutline} href="/contact">
                Start a project <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
