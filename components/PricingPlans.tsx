"use client";

import { Star, Flame, Lightbulb, Check, Sparkles } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const PLANS = [
  {
    key: "elite",
    name: "ELITE LIVE",
    tag: "Personal Attention. Maximum Results.",
    icon: Star,
    cta: "Choose Elite Live",
    popular: false,
    features: [
      "One-to-One Live Classes",
      "Dedicated Faculty & Mentor",
      "Weekly Tests & Feedback",
      "Doubt Support on Priority",
      "PDF Notes & Study Materials",
      "Recorded Backup",
      "Parent Progress Updates",
    ],
  },
  {
    key: "hybrid",
    name: "HYBRID PROGRAM",
    tag: "Best Balance of Live + Recorded",
    icon: Flame,
    badge: "MOST POPULAR",
    popular: true,
    cta: "Choose Hybrid",
    features: [
      "Complete Recorded Classes",
      "Weekly Live Doubt Sessions",
      "Tests & Assignments",
      "WhatsApp Doubt Support",
      "PDF Notes & Study Materials",
      "Revision Classes",
      "Exam Preparation",
    ],
  },
  {
    key: "recorded",
    name: "SMART RECORDED",
    tag: "Learn Anytime, Anywhere.",
    icon: Lightbulb,
    cta: "Start Smart Recorded",
    popular: false,
    features: [
      "High Quality Recorded Videos",
      "PDF Notes",
      "PYQs & Practice Questions",
      "Lifetime Access",
      "Learn at Your Own Pace",
      "Affordable & Effective",
    ],
  },
];

const ROTATIONS = ["md:-rotate-2", "md:rotate-1", "md:-rotate-1"];

export default function PricingPlans() {
  const ref = useReveal({ targets: "[data-plan]", stagger: 0.15, y: 50 });

  return (
    <section id="plans" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="ember-spot h-[30rem] w-[30rem] left-1/2 top-24 -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Programs</p>
          <div className="relative mt-3 inline-block -rotate-1">
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl">Choose Your Learning Plan</h2>
            <Sparkles size={26} className="absolute -right-8 -top-5 text-mustard rotate-12" strokeWidth={2} />
            <div className="absolute -bottom-4 left-1/2 h-2 w-40 -translate-x-1/2 rounded-full bg-mustard/40 blur-sm" />
          </div>
        </div>

        <div ref={ref} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div key={plan.key} data-plan className="group relative">
                <div
                  className={`relative rounded-2xl border-2 border-dark p-6 sm:p-7 shadow-[6px_6px_0px_0px_#0F0F0F] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_#0F0F0F] ${
                    plan.popular ? "bg-mustard" : "bg-white"
                  } ${ROTATIONS[index]}`}
                >
                  {plan.badge && (
                    <div className="absolute -right-3 -top-4 z-10 rotate-12 rounded-full border-2 border-dark bg-dark px-3 py-1 text-xs font-bold text-mustard shadow-[2px_2px_0px_0px_#E8A804]">
                      {plan.badge}
                    </div>
                  )}

                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-dark ${plan.popular ? "bg-white" : "bg-mustard"}`}>
                    <Icon className="h-6 w-6 text-dark" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-dark">{plan.name}</h3>
                  <p className={`mt-1 text-sm ${plan.popular ? "text-dark/70" : "text-sand"}`}>{plan.tag}</p>

                  <div className="my-5 h-0.5 w-full bg-dark/15" />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-dark ${plan.popular ? "bg-white" : "bg-mustard"}`}>
                          <Check className="h-3 w-3 text-dark" strokeWidth={3.5} />
                        </span>
                        <span className="text-[15px] text-dark/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-7 w-full rounded-xl border-2 border-dark py-3 text-sm font-bold shadow-[4px_4px_0px_0px_#0F0F0F] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0F0F0F] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0F0F0F] ${
                      plan.popular
                        ? "bg-dark text-mustard hover:bg-dark/90"
                        : "bg-mustard text-dark hover:bg-mustard-light"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
