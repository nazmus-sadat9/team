"use client";

import { useState } from "react";
import { ArrowIcon } from "./icons";
import { btnSolid } from "./ui";

const EMAIL = "hyperion@gmail.com";

export default function CopyEmailButton() {
  const [label, setLabel] = useState(EMAIL);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement("textarea");
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(t);
    }
    setLabel(`Copied ${EMAIL}`);
    setTimeout(() => setLabel(EMAIL), 1800);
  }

  return (
    <button className={`${btnSolid} mt-8`} type="button" onClick={handleCopy}>
      {label} <ArrowIcon />
    </button>
  );
}
