"use client";

import { Video, FileText, ClipboardCheck, LifeBuoy, UserRound, LineChart, Smartphone, BookCheck } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const FEATURES = [
  { icon: Video, label: "HD Video Lessons", accent: true },
  { icon: FileText, label: "PDF Notes & Materials", accent: false },
  { icon: ClipboardCheck, label: "Tests & Quizzes", accent: true },
  { icon: LifeBuoy, label: "Doubt Support", accent: false },
  { icon: UserRound, label: "Personal Mentoring", accent: false },
  { icon: LineChart, label: "Progress Tracking", accent: true },
  { icon: Smartphone, label: "Mobile Learning", accent: false },
  { icon: BookCheck, label: "Exam Revision", accent: true },
];

export default function FeatureGrid() {
  const ref = useReveal({ targets: "[data-feature]", stagger: 0.08, y: 24 });

  return (
    <section id="features" className="relative overflow-hidden bg-ink-soft py-16 sm:py-20">
      <div className="ember-spot h-[22rem] w-[22rem] right-[-2rem] top-10 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Subjects &amp; Support</p>
        <h2 className="display-title mt-3 text-center text-3xl sm:text-4xl lg:text-5xl">
          Everything You Need to Succeed
        </h2>

        <div ref={ref} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map(({ icon: Icon, label, accent }) => (
            <div
              key={label}
              data-feature
              className={`sticker sticker-lift flex flex-col items-center gap-3 px-3 py-6 text-center transition-all ${
                accent ? "bg-mustard" : "bg-white"
              }`}
            >
              <span className={`sticker-badge h-12 w-12 ${accent ? "bg-white" : "bg-mustard"}`}>
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="text-sm font-bold leading-tight text-dark">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
