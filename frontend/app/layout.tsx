import type { Metadata } from "next";
import { Bricolage_Grotesque, Libre_Baskerville } from "next/font/google";
import "./globals.css";

// define the bricolage font
const bricolage = Bricolage_Grotesque({
  variable: "--font-mainfont",
  subsets: ["latin"],
});

// define the libreBaskerville font
const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperion",
  description: "A software team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
