import Link from "next/link";
import { CodeXml, PenTool, Bookmark, Compass } from "lucide-react";
import CopyEmailButton from "../components/CopyEmailButton";
import Reveal from "../components/Reveal";
import HeroIntro from "../components/HeroIntro";
import ScrollHint from "../components/ScrollHint";
import ReviewsMarquee from "../components/ReviewsMarquee";
import reviews from "../data/reviews";
import { ArrowIcon } from "../components/icons";
import { wrap, eyebrow, btnSolid, btnOutline } from "../components/ui";

const services = [
  {
    n: "01",
    title: "Development",
    text: "Fast, flexible systems built for ambitious teams and the next chapter of your business.",
    icon: <CodeXml className="h-4 w-4 stroke-accent" aria-hidden="true" />,
  },
  {
    n: "02",
    title: "Web Design",
    text: "Digital experience with a point of view, crafted to make brands impossible to ignore.",
    icon: <PenTool className="h-4 w-4 stroke-accent" aria-hidden="true" />,
  },
  {
    n: "03",
    title: "Identity",
    text: "Strategic identities crafted to make brands memorable, meaningful, and unmistakably yours.",
    icon: <Bookmark className="h-4 w-4 stroke-accent" aria-hidden="true" />,
  },
  {
    n: "04",
    title: "Strategy",
    text: "Clear direction that turns ambitious ideas into focused, meaningful brands.",
    icon: <Compass className="h-4 w-4 stroke-accent" aria-hidden="true" />,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroIntro>
        <div
          className={`${wrap} relative isolate flex min-h-[calc(100svh-75px)] min-h-[calc(100dvh-75px)] flex-col justify-center overflow-clip py-[clamp(48px,9vh,110px)] pb-[clamp(64px,10vh,120px)]`}
        >
          <div className={`hero-eyebrow ${eyebrow}`}>Independent digital studio · Est. 2026</div>
          <h1 className="max-w-[14ch] text-[clamp(3.5rem,11vw,9rem)] leading-[0.98] tracking-[-0.02em]">
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">We bring</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">
                <em className="text-[1.12em] leading-[0.9]">ideas</em>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-inner block">
                to <em className="text-[1.12em] leading-[0.9]">real</em> life!
              </span>
            </span>
          </h1>
          <p className="hero-lede mt-[clamp(24px,4vh,36px)] max-w-[28rem] text-[clamp(1rem,1.6vw,1.2rem)] text-[#e4e4e0]">
            Hyperion is a creative technology studio for the brands shaping what&apos;s next.
            Strategy, design and code all in one sharp team.
          </p>
          <div className="hero-actions mt-[clamp(24px,4vh,36px)] flex flex-wrap gap-3">
            <Link className={btnSolid} href="/contact">
              Contact Us <ArrowIcon />
            </Link>
            <Link className={btnOutline} href="#work">
              Explore Our Work <ArrowIcon />
            </Link>
          </div>
          <ScrollHint />
        </div>
      </HeroIntro>

      <div className="border-t border-line bg-bg">
        <Reveal
          className={`${wrap} grid grid-cols-2 items-start gap-[clamp(24px,4vw,64px)] py-[clamp(48px,8vw,88px)] pb-[clamp(48px,7vw,80px)] max-lg:grid-cols-1`}
        >
          <h2 className="text-[clamp(2.6rem,6vw,3.6rem)] leading-[1.1]">
            Ideas with
            <br />
            <em className="text-[1.1em]">gravity.</em>
          </h2>
          <div className="ml-auto flex w-full max-w-[30rem] flex-col gap-[22px] text-[0.95rem] text-[#e4e4e0] max-lg:ml-0 max-lg:max-w-none">
            <p>
              We create brands and digital products that earn attention. Create feeling and hold
              under a closer look. Just ideas that matter. From thought to final pixel, we bring
              the full picture into focus.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Web", "Brand", "Identity", "Design"].map((t) => (
                <span
                  key={t}
                  className="border border-line px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              className="group inline-flex w-fit items-center gap-[14px] text-[0.75rem] uppercase tracking-[0.08em]"
              href="/contact"
            >
              Get your site today{" "}
              <b className="grid h-11 w-11 place-items-center rounded-full border border-fg transition-all duration-300 group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                <ArrowIcon className="h-4 w-4" />
              </b>
            </Link>
          </div>
        </Reveal>

        <div className={wrap}>
          <div className="grid grid-cols-4 border-t border-r border-l border-line max-lg:grid-cols-2 max-sm:grid-cols-1">
            {services.map((s, i) => (
              <Reveal
                as="article"
                key={s.n}
                delay={i * 90}
                className="group relative border-r border-line before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-500 hover:before:scale-x-100 last:border-r-0 max-lg:[&:nth-child(2)]:border-r-0 max-lg:[&:nth-child(-n+2)]:border-b max-sm:border-r-0 max-sm:[&:not(:last-child)]:border-b"
              >
                <div className="flex min-h-[210px] min-w-0 flex-col gap-1.5 p-5 px-6 pb-7 transition-transform duration-300 group-hover:-translate-y-1 max-sm:min-h-0">
                  <div className="flex items-center justify-between text-[0.72rem] text-muted">
                    <span>{s.n}</span>
                    {s.icon}
                  </div>
                  <h3 className="mt-7 text-2xl">{s.title}</h3>
                  <p className="max-w-[16rem] text-[0.8rem] text-muted">{s.text}</p>
                  <span className="mt-auto pt-[18px] text-muted transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-accent">
                    <ArrowIcon />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className={`${wrap} scroll-mt-[90px] py-[clamp(56px,8vw,96px)]`} id="work">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-muted">
            <span>selected work</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#e4e4e0] transition-colors hover:text-accent"
            >
              View All projects <ArrowIcon />
            </Link>
          </div>
          <div className="grid grid-cols-[1.1fr_1.4fr] grid-rows-2 gap-[clamp(12px,1.5vw,20px)] max-lg:grid-cols-1">
            {["Project placeholder", "Project placeholder", "Project placeholder"].map((t, i) => (
              <Link
                key={i}
                href="/contact"
                className={`group relative flex min-h-[200px] items-end justify-between gap-3 overflow-hidden bg-accent p-[18px_20px] text-[0.72rem] uppercase tracking-[0.08em] text-accent-ink transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(198,242,78,0.22)] ${i === 0 ? "row-span-2 min-h-[420px] max-lg:row-auto max-lg:min-h-[280px]" : ""}`}
              >
                {t}
                <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-br from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="border-t border-line py-[clamp(56px,8vw,96px)] pb-10">
          <Reveal className={`${wrap} grid grid-cols-2 items-center gap-8 max-lg:grid-cols-1`}>
            <h2 className="text-[clamp(2.6rem,6vw,3.6rem)] leading-[1.1] font-semibold">
              Small Team.<em className="block text-[1.1em] font-normal">Big signal.</em>
            </h2>
            <div>
              <p className="max-w-[26rem] text-[#e4e4e0]">
                Our incredible team of passionate developers and designers will help you bring your
                idea to life.
              </p>
              <Link
                className="mt-3 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.06em] text-[#cfcfcb] transition-colors hover:text-accent"
                href="/team"
              >
                Meet with our team <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className={`${wrap} scroll-mt-[90px] py-14 pb-20`} id="reviews">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 text-[0.72rem] uppercase tracking-[0.06em] text-muted">
            <span>Client reviews</span>
            <span className="flex flex-wrap gap-7">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-[#e4e4e0] normal-case transition-colors hover:text-accent"
              >
                Read all reviews <ArrowIcon />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#e4e4e0] normal-case transition-colors hover:text-accent"
              >
                Review our service <ArrowIcon />
              </Link>
            </span>
          </div>
          <ReviewsMarquee reviews={reviews} />
        </Reveal>

        <div className="border-t border-line py-[clamp(56px,8vw,96px)] pb-[clamp(64px,9vw,110px)]">
          <Reveal className={wrap}>
            <div className="mb-2 text-[0.72rem] uppercase tracking-[0.06em] text-[#cfcfcb]">
              Made your mind up yet?
            </div>
            <h2 className="text-[clamp(3rem,8vw,5rem)] leading-[1.1]">
              Let&apos;s make<em className="block text-[1.1em]">something matter.</em>
            </h2>
            <CopyEmailButton />
          </Reveal>
        </div>
      </div>
    </>
  );
}
