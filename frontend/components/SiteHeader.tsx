"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { StarIcon, ArrowIcon } from "./icons";
import { wrap, logo, navLink, btnOutline } from "./ui";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(13,13,13,0.72)] backdrop-blur-md backdrop-saturate-150">
      <div className={`${wrap} relative flex min-h-[74px] flex-wrap items-center justify-between gap-x-8 gap-y-4 py-3 max-md:flex-nowrap max-md:gap-3`}>
        <Link className={logo} href="/" onClick={() => setOpen(false)}>
          <StarIcon />
          Hyperion
        </Link>
        <button
          className="relative h-11 w-11 shrink-0 border border-line bg-transparent transition-colors hover:border-fg max-md:block hidden"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute right-[11px] left-[11px] h-[1.5px] bg-fg transition-all duration-300 ${open ? "top-[21px] rotate-45" : "top-[15px]"}`}
          />
          <span
            className={`absolute right-[11px] left-[11px] top-[21px] h-[1.5px] bg-fg transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`absolute right-[11px] left-[11px] h-[1.5px] bg-fg transition-all duration-300 ${open ? "top-[21px] -rotate-45" : "top-[27px]"}`}
          />
        </button>
        <nav
          id="main-nav"
          aria-label="Main"
          className={`flex flex-wrap items-center gap-x-8 gap-y-3 max-md:absolute max-md:right-4 max-md:left-4 max-md:top-[calc(100%+10px)] max-md:flex-col max-md:items-stretch max-md:gap-0.5 max-md:border max-md:border-[#333] max-md:bg-[#141414] max-md:p-2 max-md:shadow-[0_24px_64px_rgba(0,0,0,0.55)] max-md:transition-all max-md:duration-300 max-md:origin-top ${
            open
              ? "max-md:visible max-md:scale-100 max-md:opacity-100"
              : "max-md:invisible max-md:scale-[0.99] max-md:-translate-y-2.5 max-md:opacity-0"
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/reviews", label: "Client Review" },
            { href: "/team", label: "Our Team" },
            { href: "/about", label: "About Us" },
          ].map((l) => (
            <Link
              key={l.href}
              className={`${navLink} max-md:flex max-md:items-center max-md:justify-between max-md:px-4 max-md:py-3.5 max-md:text-base max-md:after:hidden max-md:hover:bg-accent/10 max-md:hover:text-accent max-md:hover:pl-5 ${pathname === l.href ? "max-md:bg-accent/10 max-md:text-accent" : ""}`}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            className={`${btnOutline} !py-2.5 max-md:mt-2 max-md:justify-center max-md:border-accent max-md:bg-accent max-md:font-medium max-md:text-accent-ink max-md:hover:bg-accent-hover max-md:hover:transform-none`}
            href={isContact ? "/" : "/contact"}
            onClick={() => setOpen(false)}
          >
            {isContact ? "Back Home" : "Let's Talk"} <ArrowIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}
