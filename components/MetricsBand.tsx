"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Users, PlayCircle, TrendingUp, Star } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";

const METRICS = [
  { icon: GraduationCap, value: 20, suffix: "+", label: "Years Teaching Experience" },
  { icon: Users, value: 10000, suffix: "+", display: "10K+", label: "Students Mentored" },
  { icon: PlayCircle, value: 500, suffix: "+", label: "Live Classes Every Month" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Students Improve Their Results" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Google Rating", rating: true },
];

export default function MetricsBand() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-metric]",
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      );

      const counters = sectionRef.current?.querySelectorAll("[data-count]");
      counters?.forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const isDecimal = el.getAttribute("data-decimal") === "true";
        const suffix = el.getAttribute("data-suffix") || "";
        const display = el.getAttribute("data-display");
        if (display) return;

        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          onUpdate() {
            el.textContent = (isDecimal ? proxy.val.toFixed(1) : Math.round(proxy.val)) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8">
      <div
        ref={sectionRef}
        className="sticker mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-dark/10 overflow-hidden bg-white"
      >
        {METRICS.map(({ icon: Icon, value, suffix, display, label, rating }) => (
          <div key={label} data-metric className="flex items-center gap-3 px-5 py-6 transition-colors hover:bg-mustard/8 group">
            <span className="sticker-badge-mustard h-10 w-10 shrink-0 transition-transform group-hover:scale-110">
              <Icon size={20} strokeWidth={2} />
            </span>
            <div className="leading-tight">
              <span
                className="block font-display text-2xl font-bold tracking-tight text-dark"
                data-count={value}
                data-suffix={suffix}
                data-decimal={value % 1 !== 0 ? "true" : "false"}
                data-display={display || ""}
              >
                {display || value + suffix}
              </span>
              <span className="block text-xs text-sand mt-0.5">{label}</span>
              {rating && (
                <span className="mt-1 flex gap-0.5 text-mustard">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
