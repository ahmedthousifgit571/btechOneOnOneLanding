"use client";

import { useEffect, useRef } from "react";
import { School, BookOpen, Target, LineChart, Briefcase, Trophy, Rocket } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";

const STEPS = [
  { icon: School, label: "College Admission" },
  { icon: BookOpen, label: "Strong Foundation" },
  { icon: Target, label: "First Semester Success" },
  { icon: LineChart, label: "High CGPA" },
  { icon: Briefcase, label: "Internships & Projects" },
  { icon: Trophy, label: "Placement / GATE" },
  { icon: Rocket, label: "Bright Future" },
];

export default function JourneyStepper() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(lineRef.current, {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%", end: "bottom 55%", scrub: 0.8 },
      });

      gsap.fromTo(
        "[data-step]",
        { opacity: 0, y: 28, scale: 0.80 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.10, ease: "back.out(1.8)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );

      gsap.to("[data-step-icon]", {
        y: -6, duration: 2, ease: "sine.inOut", yoyo: true, repeat: -1,
        stagger: { each: 0.3, from: "start" }, delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden bg-ink-soft py-20 sm:py-28">
      <div className="ember-spot h-[28rem] w-[28rem] left-1/2 top-4 -translate-x-1/2 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">How It Works</p>
        <h2 className="display-title mt-3 text-center text-3xl sm:text-4xl lg:text-5xl">
          Your Engineering Success Journey
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-dark/8 sm:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-7 hidden h-[2px] bg-mustard sm:block"
            style={{ boxShadow: "0 0 10px rgba(232,168,4,0.6)" }}
          />

          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 gap-x-4">
            {STEPS.map(({ icon: Icon, label }, i) => (
              <div key={label} data-step className="relative flex flex-col items-center gap-3 text-center">
                <div
                  data-step-icon
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark shadow-[3px_3px_0px_0px_#0F0F0F] transition-transform hover:-translate-y-1 ${
                    i % 2 === 0 ? "bg-white" : "bg-mustard"
                  }`}
                >
                  <Icon size={22} className="text-dark" strokeWidth={2} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-sand max-w-[8rem]">{label}</span>
                {i < STEPS.length - 1 && (
                  <span className="hidden lg:block absolute top-7 left-[calc(100%+0.5rem)] -translate-y-1/2 text-dark/30 font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
