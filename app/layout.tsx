import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

// Cursive accent for the founder signature in the hero
const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "BTechTutor — Your Engineering Mentor",
  description:
    "Complete academic support for every First Year B.Tech student in Kerala. Live classes, hybrid learning, recorded courses, mentoring, PDF notes, weekly tests and doubt support.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${script.variable}`}
    >
      <body className="bg-ink font-body antialiased text-dark" suppressHydrationWarning>
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
