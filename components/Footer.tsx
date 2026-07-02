"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin, Mail, Youtube, Instagram, Facebook } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const QUICK_LINKS = [{ label: "Programs", href: "#plans" }, { label: "Faculty", href: "#parents" }, { label: "How It Works", href: "#journey" }];
const RESOURCE_LINKS = [{ label: "Subjects", href: "#features" }, { label: "Success Stories", href: "#testimonials" }, { label: "FAQ", href: "#faq" }];

export default function Footer() {
  const ref = useReveal({ targets: "[data-footer]", stagger: 0.1, y: 24 });

  return (
    <footer ref={ref} className="bg-dark overflow-hidden">
      {/* ── CTA sticker on black — mustard shadow pops on dark bg ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div
          data-footer
          className="sticker-mustard-shadow sticker-lift rounded-2xl border-2 border-dark bg-mustard p-8 sm:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-bold uppercase tracking-widest text-dark/55 mb-2">Don&apos;t wait</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-dark leading-[0.98]">
                Start Strong.<br />Stay Ahead.
              </h2>
              <p className="mt-3 text-sm text-dark/65 max-w-xs">
                Join the First Year 2026 Batch and get a head start before college begins.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dark bg-dark px-7 py-4 text-sm font-bold text-mustard shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
              >
                Join First Year 2026 Batch <ArrowRight size={16} />
              </a>
              <a
                href="tel:+919895006772"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dark bg-white px-7 py-4 text-sm font-bold text-dark shadow-[5px_5px_0px_0px_#0F0F0F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#0F0F0F]"
              >
                <Phone size={15} /> Talk to a Mentor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Nav links ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-white/10">
          <div>
            <span className="relative block h-16 w-56 overflow-hidden">
              <Image src="/images/logo2.jpg" alt="BTechTutor" fill sizes="224px" className="object-cover object-center scale-[1.55]" />
            </span>
            <p className="mt-4 text-sm text-white/45 max-w-xs leading-relaxed">
              Complete academic support for every first year B.Tech student in Kerala.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/20 text-white/50 hover:border-mustard hover:text-mustard hover:bg-mustard/10 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-mustard mb-5 border-l-2 border-mustard pl-3 uppercase tracking-wide">Quick Links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                    <span className="h-px w-4 bg-white/20 group-hover:bg-mustard group-hover:w-6 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-mustard mb-5 border-l-2 border-mustard pl-3 uppercase tracking-wide">Resources</p>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                    <span className="h-px w-4 bg-white/20 group-hover:bg-mustard group-hover:w-6 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-mustard mb-5 border-l-2 border-mustard pl-3 uppercase tracking-wide">Contact Us</p>
            <ul className="space-y-3.5 text-sm text-white/50">
              <li className="flex items-start gap-2.5"><Phone size={15} className="mt-0.5 shrink-0 text-mustard" />+91 98950 06772</li>
              <li className="flex items-start gap-2.5"><Mail size={15} className="mt-0.5 shrink-0 text-mustard" />help.btechtutorkerala@gmail.com</li>
              <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0 text-mustard" />All Kerala cities + Indian students in UAE / Gulf</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/30">
          <p>© 2024 BTechTutor. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
