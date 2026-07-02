"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const FAQS = [
  { q: "Who can join BTechTutor First Year Batch?", a: "Any first year B.Tech / engineering student in Kerala, across all KTU-affiliated branches, can join. We tailor sessions to your specific syllabus and semester." },
  { q: "How are doubts cleared?", a: "Doubts are cleared through live doubt sessions, WhatsApp support, and one-to-one mentor calls depending on the plan you choose." },
  { q: "Which learning plan is best for me?", a: "If you want maximum personal attention, choose Elite Live. For a balance of structure and flexibility, choose Hybrid. If you prefer self-paced learning, go with Smart Recorded." },
  { q: "When will the classes start?", a: "The First Year 2026 Batch starts as soon as enrollment closes — join early to get access to onboarding sessions and foundational material in advance." },
  { q: "Will I get recordings of the classes?", a: "Yes. All live classes are recorded and made available on your dashboard so you can revise anytime." },
  { q: "Is the content in Malayalam or English?", a: "Classes are taught in a comfortable mix of English and Malayalam to ensure every concept is clearly understood." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useReveal({ targets: "[data-faq]", stagger: 0.08, y: 20 });

  return (
    <section id="faq" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="ember-spot h-[20rem] w-[20rem] right-[-2rem] top-10 opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="display-title text-center text-5xl sm:text-6xl lg:text-7xl">FAQ</h2>
        <p className="mt-3 text-center text-sm text-sand">Everything you want to know before you join.</p>

        <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                data-faq
                className={`sticker p-5 transition-colors ${isOpen ? "bg-mustard" : "bg-white sticker-lift"}`}
              >
                <button
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold uppercase tracking-tight text-dark">{faq.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-dark text-dark">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-dark/75">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
