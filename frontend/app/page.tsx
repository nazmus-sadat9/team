import { ArrowUpRight, ArrowDownRight, Plus, Sparkles } from "lucide-react";

const pad = "px-[clamp(1.5rem,9.7vw,7.5rem)]";

const services = [
  { no: "01", title: "Digital products", text: "Useful, expressive experiences built around what your audience actually needs." },
  { no: "02", title: "Brand systems", text: "Distinct identities that give ambitious teams a memorable point of view." },
  { no: "03", title: "Web design", text: "Fast, flexible websites with a little more feeling and a lot more clarity." },
  { no: "04", title: "Creative direction", text: "The sharp thinking that turns a good idea into something people remember." },
];

const projects = [
  { tag: "01 / E-commerce", title: "Objects with intention", style: "bg-linear-to-br from-[#1a1d0a] to-[#141608] text-[#6f8a1c]" },
  { tag: "02 / Identity", title: "A better kind of bold", style: "bg-linear-to-br from-[#1f1708] to-[#161109] text-[#b8741a]" },
  { tag: "03 / Digital", title: "Soft systems", style: "bg-linear-to-br from-[#0b1822] to-[#0a1218] text-[#2b78b8]" },
];

const skills = ["DESIGN", "STRATEGY", "CODE", "MOTION"];

const socials = ["Instagram", "LinkedIn", "Facebook", "E-mail"];

const Eyebrow = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.14em] uppercase text-gray mb-[22px]">
      <span className="w-6 h-px bg-acent/60"></span>
      <span>{text}</span>
    </div>
  );
};

const page = () => {
  return (
    <main className="w-screen font-mainfont overflow-x-hidden bg-bg text-white leading-normal">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-10 h-10 flex items-center justify-between bg-bg/85 backdrop-blur-sm border-b border-line">
        <a href="#top" className="flex items-center gap-[10px] text-[10px] font-bold tracking-[0.2em] pl-[clamp(1.5rem,9.7vw,7.5rem)] max-[640px]:pl-6">
          <span className="w-[6px] h-[6px] bg-acent"></span>
          HYPERION
        </a>

        <div className="flex items-center gap-[22px] text-[11px] text-[#ccc] h-full">
          <a href="#work" className="max-[640px]:hidden">Work</a>
          <a href="#approach" className="max-[640px]:hidden">Approach</a>
          <a href="#team" className="max-[640px]:hidden">Team</a>
          <a href="#contact" className="max-[640px]:hidden">Contact</a>
          <a href="#contact" className="h-full flex items-center gap-[10px] px-[14px] border border-[#444] text-white font-medium">
            Let&apos;s talk
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className={`relative min-h-screen flex flex-col justify-center pt-20 border-b border-line ${pad}`}>
        <Eyebrow text="Independent digital studio · Est. 2026" />

        <h1 className="text-[clamp(2.75rem,8vw,5.75rem)] font-black tracking-[-0.04em] leading-[1.05] mb-[34px]">
          Ideas with <br />
          <span className="italic text-acent">gravity.</span> <br />
          Built to <span className="italic text-acent">move</span> <br />
          people.
        </h1>

        <p className="text-[13px] leading-loose text-gray max-w-[290px] mb-[70px]">
          Hyperion is a creative technology studio for brands shaping what&apos;s next. Strategy, design and code — all in one sharp team.
        </p>

        <div className="flex gap-11 text-[11px] font-bold pl-[18px] max-[700px]:gap-7 max-[700px]:pl-0">
          <a href="#contact" className="inline-flex items-center gap-2">
            Start a project
            <ArrowUpRight size={11} strokeWidth={2} />
          </a>
          <a href="#work" className="inline-flex items-center gap-2">
            See our work
            <ArrowDownRight size={11} strokeWidth={2} />
          </a>
        </div>

        <div className="absolute bottom-6 left-[clamp(1.5rem,9.7vw,7.5rem)] flex items-center gap-2 text-[9px] text-gray">
          scroll to explore
          <i className="block w-[3px] h-[10px] bg-acent animate-blink"></i>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className={`pt-24 pb-[70px] border-b border-line ${pad}`}>
        <div className="grid grid-cols-2 gap-10 items-start max-[700px]:grid-cols-1 max-[700px]:gap-6">
          <div>
            <Eyebrow text="01 / The point of view" />
            <h2 className="text-[clamp(2.125rem,5vw,2.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
              Make it <span className="italic text-acent">matter.</span>
            </h2>
          </div>

          <div className="pt-[34px]">
            <p className="text-[13px] leading-[1.8] text-gray max-w-[270px] mb-[22px]">
              We create brands and digital products that earn attention, create feeling and hold under a closer look.
            </p>
            <p className="text-[13px] leading-[1.8] text-gray max-w-[270px] mb-[22px]">
              From thought to final pixel, we bring the full picture into focus.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-bold text-acent">
              Get your site today
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-9 mt-[70px] max-[700px]:grid-cols-1 max-[700px]:gap-5">
          {services.map((item) => (
            <div
              key={item.no}
              className="bg-card border border-[#191919] rounded-[4px] p-6 transition-all duration-300 hover:border-[#333] hover:-translate-y-[3px]"
            >
              <div className="flex justify-between items-center text-[10px] text-gray mb-[26px]">
                <span>{item.no}</span>
                <Plus size={16} className="text-acent" />
              </div>
              <h3 className="text-[12px] font-bold mb-3">{item.title}</h3>
              <p className="text-[11px] leading-[1.8] text-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className={`pt-[78px] pb-[70px] border-b border-line ${pad}`}>
        <div className="flex justify-between items-start">
          <div>
            <Eyebrow text="02 / Selected work" />
            <h2 className="text-[clamp(2.125rem,5vw,2.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
              Made for the <span className="italic text-acent">curious.</span>
            </h2>
          </div>
          <a href="#work" className="inline-flex items-center gap-2 text-[12px] font-bold text-acent">
            View all projects
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-[70px] max-[700px]:grid-cols-1 max-[700px]:gap-5">
          {projects.map((item) => (
            <a
              key={item.title}
              href="#work"
              className={`h-[220px] rounded-[4px] flex items-center px-[70px] max-[700px]:px-9 transition-transform duration-300 hover:-translate-y-[3px] ${item.style}`}
            >
              <div>
                <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.1em] uppercase">
                  <Sparkles size={18} strokeWidth={1.6} />
                  {item.tag}
                </div>
                <h3 className="text-[14px] leading-[1.6] mt-[6px] text-white font-bold flex items-start justify-between gap-7">
                  {item.title}
                  <ArrowUpRight size={11} strokeWidth={2} className="mt-[5px] shrink-0" />
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className={`pt-[68px] pb-[70px] border-b border-line ${pad}`}>
        <div className="grid grid-cols-2 gap-10 items-start max-[700px]:grid-cols-1 max-[700px]:gap-6">
          <div>
            <Eyebrow text="03 / The team" />
            <h2 className="text-[clamp(2.125rem,5vw,2.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
              Small team. <br />
              <span className="italic text-acent">Big signal.</span>
            </h2>
          </div>

          <div className="pt-[34px]">
            <p className="text-[13px] leading-[1.8] text-gray max-w-[260px] mb-[26px]">
              Our incredible, passionate developers and designers will help you bring your idea to life.
            </p>
            <a href="#team" className="inline-flex items-center gap-2 text-[12px] font-bold text-acent">
              Meet the team
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-[70px] max-[700px]:grid-cols-2">
          {skills.map((item) => (
            <div
              key={item}
              className="h-[136px] border border-[#1a1a1a] rounded-[4px] bg-linear-to-b from-[#0f120a] to-[#0d0d0b] flex items-end p-6 text-[10px] font-bold tracking-[0.08em]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`py-[76px] border-b border-line ${pad}`}>
        <Eyebrow text="Have a good one?" />
        <h2 className="text-[clamp(2.125rem,5vw,2.5rem)] font-black tracking-[-0.04em] leading-[1.05] mt-[34px] mb-10">
          Let&apos;s make <br />
          <span className="italic text-acent">something matter.</span>
        </h2>
        <a
          href="mailto:hyperion@gmail.com"
          className="inline-flex items-center gap-5 text-2xl font-bold tracking-[-0.02em] hover:text-acent transition-colors"
        >
          hyperion@gmail.com
          <ArrowUpRight size={18} strokeWidth={2} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className={`border-t-2 border-line py-[70px] grid grid-cols-[1.4fr_1.2fr_1.2fr_1fr] gap-6 items-center text-[11px] text-gray max-[700px]:grid-cols-2 max-[700px]:gap-9 ${pad}`}>
        <div className="flex items-center gap-[10px] text-[10px] font-bold tracking-[0.2em] text-white">
          <span className="w-[6px] h-[6px] bg-acent"></span>
          HYPERION
        </div>

        <p className="max-w-[90px] leading-[1.7]">Independent digital studio for the next era.</p>

        <ul className="grid gap-2">
          {socials.map((item) => (
            <li key={item}>
              <a href={item === "E-mail" ? "mailto:hyperion@gmail.com" : "#"} className="hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div>
          © 2026 <br />
          Hyperion
        </div>
      </footer>
    </main>
  );
};

export default page;
