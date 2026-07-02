"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";

const PRIMARY_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#plans" },
  { label: "Subjects", href: "#features" },
  { label: "How It Works", href: "#journey" },
];

const MORE_LINKS = [
  { label: "Faculty", href: "#parents", desc: "Meet your mentors" },
  { label: "Success Stories", href: "#testimonials", desc: "Real student results" },
  { label: "About Us", href: "#parents", desc: "Who we are" },
  { label: "FAQ", href: "#faq", desc: "Common questions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    registerGsap();
    gsap.fromTo(
      "[data-nav-reveal]",
      { y: -28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMoreOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  return (
    <header
      data-nav-reveal
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-6 rounded-full pl-5 pr-3 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-2 border-dark shadow-[4px_4px_0px_0px_#0F0F0F]"
              : "bg-white/70 backdrop-blur-md border border-dark/10"
          }`}
        >
          <Link href="#home" className="flex items-center shrink-0" aria-label="BTechTutor home">
            <span className="relative block h-11 w-36 overflow-hidden">
              <Image src="/images/logo2.jpg" alt="BTechTutor" fill priority sizes="192px" className="object-cover object-center scale-[1.55]" />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-dark/65 hover:text-dark hover:bg-dark/5 transition-colors">
                {link.label}
              </a>
            ))}

            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  moreOpen ? "text-dark bg-dark/5" : "text-dark/65 hover:text-dark hover:bg-dark/5"
                }`}
              >
                More
                <ChevronDown size={15} className={`transition-transform duration-300 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border-2 border-dark bg-white p-2 shadow-[6px_6px_0px_0px_#0F0F0F]">
                  {MORE_LINKS.map((link) => (
                    <a key={link.label} href={link.href} onClick={() => setMoreOpen(false)} className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-mustard/10 transition-colors">
                      <span className="text-sm font-semibold text-dark">{link.label}</span>
                      <span className="text-xs text-sand">{link.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="#plans" className="rounded-xl border-2 border-dark bg-mustard px-6 py-2.5 text-sm font-bold text-dark shadow-[3px_3px_0px_0px_#0F0F0F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#0F0F0F]">
              Join Now
            </a>
            <a href="https://wa.me/919895006772?text=Hi%20BTechTutor%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20One-on-One%20mentoring%20program%20for%20First%20Year%20B.Tech%20students." target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark text-dark hover:bg-mustard hover:border-dark transition-colors" aria-label="Chat on WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>

          <button className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border-2 border-dark text-dark shrink-0" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-2xl border-2 border-dark bg-white p-5 shadow-[6px_6px_0px_0px_#0F0F0F]">
            <nav className="flex flex-col gap-1">
              {PRIMARY_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-dark/75 hover:bg-mustard/10 hover:text-dark transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="my-2 h-px bg-dark/10" />
              <span className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-sand">More</span>
              {MORE_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-dark/75 hover:bg-mustard/10 hover:text-dark transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#plans" onClick={() => setOpen(false)} className="mt-3 block rounded-xl border-2 border-dark bg-mustard px-5 py-3 text-center text-sm font-bold text-dark shadow-[3px_3px_0px_0px_#0F0F0F]">
              Join Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
