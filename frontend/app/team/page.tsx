import Reveal from "../../components/Reveal";
import { wrap } from "../../components/ui";

export const metadata = { title: "Our Team — Hyperion Studio" };

const members = [
  { name: "Team member", role: "Role" },
  { name: "Team member", role: "Role" },
  { name: "Team member", role: "Role" },
];

export default function TeamPage() {
  return (
    <div className={wrap}>
      <h1 className="pt-[clamp(40px,7vw,72px)] text-[clamp(3rem,8vw,4.6rem)] leading-[1.05] tracking-[-0.01em]">
        Our team
      </h1>
      <Reveal className="grid max-w-[960px] grid-cols-[repeat(auto-fill,minmax(min(220px,100%),1fr))] gap-[clamp(16px,2vw,24px)] py-14 pb-24">
        {members.map((m, i) => (
          <article
            key={i}
            className="flex flex-col gap-[14px] border border-[#262626] bg-[#0f0f0f] p-3 pb-[18px]"
          >
            <div className="aspect-[155/136] bg-[#545454]" role="img" aria-label="Photo placeholder" />
            <h3 className="text-base">{m.name}</h3>
            <p className="-mt-[10px] text-[0.8rem] text-muted">{m.role}</p>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
