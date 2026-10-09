import Link from "next/link";
import { StarIcon } from "./icons";
import { wrap, logo } from "./ui";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#555] bg-[#0a0a0a]">
      <div
        className={`${wrap} grid grid-cols-[1.3fr_1.2fr_1.4fr_auto] items-start gap-8 py-12 pb-[72px] text-[0.9rem] max-lg:grid-cols-2 max-sm:grid-cols-1`}
      >
        <div className="flex flex-col items-start">
          <Link className={logo} href="/">
            <StarIcon />
            Hyperion
          </Link>
          <p className="mt-3 max-w-[11rem] text-[0.72rem] text-muted">
            Independent digital studio for the next era.
          </p>
        </div>
        <div />
        <ul className="flex list-none flex-col gap-0.5 p-0 text-[#b4b4b0]">
          {[
            { href: "/", label: "Instagram" },
            { href: "/", label: "LinkedIn" },
            { href: "/", label: "Facebook" },
            { href: "/contact", label: "E-Mail" },
          ].map((l) => (
            <li key={l.label}>
              <Link className="transition-colors hover:text-accent" href={l.href}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-right max-lg:text-left">© 2026 Hyperion Studio</p>
      </div>
    </footer>
  );
}
