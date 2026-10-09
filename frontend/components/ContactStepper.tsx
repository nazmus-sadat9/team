"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "./icons";
import { btnSolid, btnOutline } from "./ui";

const needs = [
  "A new website",
  "A web app",
  "Branding and identity",
  "A redesign",
  "Something else",
];

const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $8,000", "$8,000+"];

const inputCls =
  "w-full rounded-none border border-[#3a3a3a] bg-field p-3.5 text-fg placeholder:text-muted/80 focus:border-accent focus:outline-none";

export default function ContactStepper() {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [hint, setHint] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", description: "" });
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const brief = [
    "New project brief for Hyperion",
    "",
    `Need: ${need}`,
    `Budget: ${budget}`,
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    description,
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  function next(e: FormEvent) {
    e.preventDefault();
    if (step === 1) {
      if (!need) {
        setHint("Pick one option to continue.");
        return;
      }
      setHint("");
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!budget) {
        setHint("Pick a budget range to continue.");
        return;
      }
      setHint("");
      setStep(3);
      return;
    }
    const nextErrors = {
      name: name.trim() ? "" : "Enter your name.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ? ""
        : "Enter an email address we can reply to.",
      description: description.trim() ? "" : "Tell us a little about the idea.",
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.description) return;
    setDone(true);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
    } catch {
      const t = document.createElement("textarea");
      t.value = brief;
      document.body.appendChild(t);
      t.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function restart() {
    setStep(1);
    setNeed("");
    setBudget("");
    setName("");
    setEmail("");
    setCompany("");
    setDescription("");
    setErrors({ name: "", email: "", description: "" });
    setHint("");
    setDone(false);
  }

  if (done) {
    return (
      <div className="w-full max-w-[720px] border border-[#333] bg-panel p-[clamp(20px,4vw,44px)]">
        <div className="flex items-center gap-[14px] text-[0.7rem] uppercase tracking-[0.06em] text-muted">
          <span>Done</span>
          <div className="relative h-0.5 flex-1 bg-[#555]">
            <i className="absolute top-0 bottom-0 left-0 w-full bg-accent" />
          </div>
        </div>
        <h2 className="mt-8 text-[clamp(1.7rem,4vw,2.2rem)] leading-[1.2]">Your brief is ready.</h2>
        <p className="mt-[18px] max-w-[34rem] text-[#dcdcd8]">
          This page can&apos;t send it for you. Copy the brief below and email it to{" "}
          <strong>hyperion@gmail.com</strong>, and we&apos;ll pick it up from there.
        </p>
        <div className="mt-6 border border-[#3a3a3a] bg-field p-4 text-[0.85rem] whitespace-pre-wrap break-words text-[#d6d6d2]">
          {brief}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className={`${btnSolid} !px-4 !py-[11px] !text-[0.8rem]`} type="button" onClick={copyBrief}>
            {copied ? "Copied" : "Copy brief"}
          </button>
          <button className={`${btnOutline} !bg-[#0f0f0f] !px-4 !py-[11px] !text-[0.8rem]`} type="button" onClick={restart}>
            Start over
          </button>
        </div>
      </div>
    );
  }

  function Option({
    name: n,
    value,
    checked,
    onChange,
  }: {
    name: string;
    value: string;
    checked: boolean;
    onChange: () => void;
  }) {
    return (
      <label className="relative">
        <input
          type="radio"
          name={n}
          value={value}
          checked={checked}
          onChange={onChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`flex min-h-[68px] items-center border px-4 py-3 text-[0.95rem] transition-colors peer-focus-visible:outline-2 ${
            checked
              ? "border-accent bg-[#171a0d]"
              : "border-[#3a3a3a] bg-field hover:border-[#777]"
          }`}
        >
          {value}
        </span>
      </label>
    );
  }

  return (
    <form className="w-full max-w-[720px] border border-[#333] bg-panel p-[clamp(20px,4vw,44px)]" noValidate onSubmit={next}>
      <div className="flex items-center gap-[14px] text-[0.7rem] uppercase tracking-[0.06em] text-muted" aria-live="polite">
        <span>
          Step {step} / 3
        </span>
        <div className="relative h-0.5 flex-1 bg-[#555]">
          <i
            className="absolute top-0 bottom-0 left-0 bg-accent transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div>
          <h2 className="mt-8 text-[clamp(1.7rem,4vw,2.2rem)] leading-[1.2]">What do you need?</h2>
          <fieldset className="mt-10 grid grid-cols-2 gap-[14px] border-0 p-0 max-sm:grid-cols-1">
            <legend className="sr-only">What do you need?</legend>
            {needs.map((n) => (
              <Option key={n} name="need" value={n} checked={need === n} onChange={() => setNeed(n)} />
            ))}
          </fieldset>
          <p className="mt-[14px] min-h-[1.3em] text-[0.8rem] text-accent" role="alert">
            {step === 1 ? hint : ""}
          </p>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="mt-8 text-[clamp(1.7rem,4vw,2.2rem)] leading-[1.2]">What&apos;s your budget?</h2>
          <fieldset className="mt-10 grid grid-cols-2 gap-[14px] border-0 p-0 max-sm:grid-cols-1">
            <legend className="sr-only">What&apos;s your budget?</legend>
            {budgets.map((b) => (
              <Option key={b} name="budget" value={b} checked={budget === b} onChange={() => setBudget(b)} />
            ))}
          </fieldset>
          <p className="mt-[14px] min-h-[1.3em] text-[0.8rem] text-accent" role="alert">
            {step === 2 ? hint : ""}
          </p>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="mt-8 text-[clamp(1.7rem,4vw,2.2rem)] leading-[1.2]">How do we contact you?</h2>
          <div className="mt-9 grid grid-cols-2 gap-x-[14px] gap-y-5 max-sm:grid-cols-1">
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="f-name" className="text-[0.68rem] uppercase tracking-[0.04em]">Name*</label>
              <input
                id="f-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
              <span className="min-h-[1em] text-[0.75rem] text-[#ff9d7a]">{errors.name}</span>
            </div>
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="f-email" className="text-[0.68rem] uppercase tracking-[0.04em]">Email*</label>
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
              <span className="min-h-[1em] text-[0.75rem] text-[#ff9d7a]">{errors.email}</span>
            </div>
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="f-company" className="text-[0.68rem] uppercase tracking-[0.04em]">Company (optional)</label>
              <input
                id="f-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={inputCls}
              />
            </div>
            <div className="flex min-w-0 flex-col gap-2 col-span-2 max-sm:col-span-1">
              <label htmlFor="f-desc" className="text-[0.68rem] uppercase tracking-[0.04em]">Description*</label>
              <textarea
                id="f-desc"
                name="description"
                placeholder="Tell us about your project, goals, and timeline…"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${inputCls} min-h-[200px] resize-y`}
              />
              <span className="min-h-[1em] text-[0.75rem] text-[#ff9d7a]">{errors.description}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex justify-between gap-3 max-sm:flex-wrap">
        {step === 1 ? (
          <Link className={`${btnOutline} !bg-[#0f0f0f] !px-4 !py-[11px] !text-[0.8rem]`} href="/">
            <ArrowLeftIcon /> Back
          </Link>
        ) : (
          <button className={`${btnOutline} !bg-[#0f0f0f] !px-4 !py-[11px] !text-[0.8rem]`} type="button" onClick={back}>
            <ArrowLeftIcon /> Back
          </button>
        )}
        <button className={`${btnSolid} !px-4 !py-[11px] !text-[0.8rem]`} type="submit">
          <span>{step === 3 ? "Submit" : "Continue"}</span> <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
