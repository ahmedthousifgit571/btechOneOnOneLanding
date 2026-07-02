"use client";

import Image from "next/image";
import { ArrowRight, ClipboardList, ShieldCheck, Wallet, UserCheck } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const POINTS = [
  { icon: ClipboardList, label: "Regular Progress Updates" },
  { icon: UserCheck, label: "Mentor Support" },
  { icon: Wallet, label: "Affordable & Value for Money" },
  { icon: ShieldCheck, label: "Safe & Trusted Platform" },
];

export default function ParentsBanner() {
  const ref = useReveal({ targets: "[data-parent]", stagger: 0.12, y: 28 });

  return (
    <section id="parents" className="relative overflow-hidden bg-ink-soft py-20 sm:py-24">
      <div className="ember-spot h-[20rem] w-[20rem] left-[-4rem] bottom-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="sticker grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.8fr] gap-8 items-center bg-white p-8 sm:p-10">
          <div data-parent>
            <p className="eyebrow">For Parents</p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-dark">
              A Foundation You Can Trust
            </h3>
            <p className="mt-3 text-sm text-sand leading-relaxed max-w-sm">
              First year is the foundation of the entire engineering journey. We help your child build concepts, confidence and consistency.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {POINTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="sticker-badge-mustard h-9 w-9 shrink-0">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="text-xs font-medium text-dark/70 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-parent className="sticker relative aspect-[16/10] w-full overflow-hidden">
            <Image src="/images/trustIimage.png" alt="A mentor guiding a first-year B.Tech student through their studies" fill className="object-cover" sizes="(min-width: 1024px) 32rem, 90vw" />
          </div>

          <div data-parent className="sticker bg-mustard p-6 text-center lg:text-left">
            <p className="font-display font-bold text-dark text-lg leading-tight">Talk to Academic Counsellor</p>
            <p className="mt-1.5 text-xs text-dark/65 leading-relaxed">We&apos;re here to help you guide your child better.</p>
            <a
              href="tel:+919895006772"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-dark bg-dark px-5 py-2.5 text-xs sm:text-sm font-bold text-mustard shadow-[3px_3px_0px_0px_#E8A804] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#E8A804]"
            >
              Talk Now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
