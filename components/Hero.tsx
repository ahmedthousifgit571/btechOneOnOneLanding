"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, GraduationCap } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";

const CREDENTIALS = [
  "GATE AIR 90",
  "Engineering Services Qualified",
  "20+ Years Teaching Experience",
  "Thousands of Students Mentored",
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power3.out" } });

      tl.fromTo("[data-hero-badge]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo("[data-hero-line]", { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, "-=0.3")
        .fromTo("[data-hero-sub]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
        .fromTo("[data-hero-cta]", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.09 }, "-=0.3")
        .fromTo("[data-hero-image]", { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1, ease: "power2.out" }, "-=1.0")
        .fromTo("[data-hero-credential]", { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.07 }, "-=0.7");

      gsap.to("[data-hero-badge]", {
        y: -6, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
    }, rootRef);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      if (blobRef.current) gsap.to(blobRef.current, { x: x * 30, y: y * 20, duration: 1.2, ease: "power2.out" });
      if (blob2Ref.current) gsap.to(blob2Ref.current, { x: x * -18, y: y * -14, duration: 1.6, ease: "power2.out" });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative bg-ink editorial-grid pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      <div ref={blobRef} className="ember-spot h-[40rem] w-[40rem] right-[-8rem] top-[-10rem] animate-glow-drift" />
      <div ref={blob2Ref} className="ember-spot h-[24rem] w-[24rem] left-[-4rem] bottom-[-6rem] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <div className="pt-6 lg:pt-10">
            <div
              data-hero-badge
              className="inline-flex items-center gap-2 rounded-full border-2 border-dark bg-mustard px-4 py-1.5 text-xs sm:text-sm font-bold text-dark shadow-[3px_3px_0px_0px_#0F0F0F]"
            >
              <GraduationCap size={15} />
              For Every First Year B.Tech Student in{" "}
              <span className="underline underline-offset-2">Kerala</span>
            </div>

            <h1 className="display-title mt-6 text-4xl sm:text-5xl lg:text-[3.7rem] text-balance">
              <span data-hero-line className="block">Complete Academic</span>
              <span data-hero-line className="block">
                Support for Every{" "}
                <span className="bg-mustard px-1 -skew-x-2 inline-block">
                  <span className="skew-x-2 inline-block">First Year</span>
                </span>
              </span>
              <span data-hero-line className="block">B.Tech Student</span>
              <span data-hero-line className="block text-mustard">in Kerala</span>
            </h1>

            <p data-hero-sub className="mt-6 max-w-xl text-base sm:text-lg text-sand leading-relaxed normal-case">
              Live Classes, Hybrid Learning, Recorded Courses, Mentoring, PDF Notes, Weekly Tests &amp; Doubt Support to help you build a strong engineering foundation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                data-hero-cta
                href="#plans"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-dark bg-mustard px-6 py-3.5 text-sm sm:text-base font-bold text-dark shadow-[5px_5px_0px_0px_#0F0F0F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#0F0F0F]"
              >
                Join First Year 2026 Batch
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                data-hero-cta
                href="tel:+919895006772"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-dark bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-dark shadow-[5px_5px_0px_0px_#0F0F0F] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#0F0F0F]"
              >
                <Phone size={16} />
                Talk to a Mentor
              </a>
            </div>

            <a
              data-hero-cta
              href="https://wa.me/919895006772?text=Hi%20BTechTutor%2C%20I%20would%20like%20to%20get%20more%20details%20about%20your%20One-on-One%20mentoring%20program%20for%20First%20Year%20B.Tech%20students."
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-dark/50 hover:text-dark transition-colors"
            >
              <MessageCircle size={16} className="text-emerald-500" />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="relative">
            <div data-hero-image className="sticker relative aspect-[4/5] sm:aspect-[5/5] w-full overflow-hidden">
              <Image src="/images/PrinceSir.jpg" alt="Princy Antony, Founder of BTechTutor" fill priority className="object-cover object-top" sizes="(min-width: 1024px) 36rem, 90vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-dark/80 via-dark/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

              <div className="absolute top-6 right-6 text-right">
                <p className="font-script text-3xl sm:text-4xl text-mustard leading-none">Princy Antony</p>
                <p className="mt-2 text-sm font-semibold text-white">Founder, BTechTutor</p>
              </div>

              <ul className="absolute bottom-6 right-6 space-y-3 text-right">
                {CREDENTIALS.map((item) => (
                  <li key={item} data-hero-credential className="flex items-center justify-end gap-2.5 text-sm sm:text-base font-medium text-white">
                    {item}
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white bg-mustard">
                      <span className="h-2 w-2 rounded-full bg-dark" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
