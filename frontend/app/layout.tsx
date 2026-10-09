import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Hyperion Studio",
  description:
    "Hyperion is a creative technology studio for the brands shaping what's next. Strategy, design and code all in one sharp team.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <div className="flex min-h-dvh flex-col bg-gradient-to-b from-bg-top to-bg to-[780px]">
          <SiteHeader />
          <main className="w-full flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
