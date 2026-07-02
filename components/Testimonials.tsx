"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const TESTIMONIALS = [
  { name: "Adarsh S", college: "CET Trivandrum", quote: "BTechTutor helped me clear my first semester with confidence and score high in concept-heavy subjects.", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Anagha Raj", college: "TKMCE Kollam", quote: "The weekly live sessions and doubt support are simply amazing. I never feel stuck for long.", avatar: "https://i.pravatar.cc/150?img=45" },
  { name: "Nikhil N", college: "Electrical Engg.", quote: "Concepts are explained in the simplest way. Highly recommended!", avatar: "https://i.pravatar.cc/150?img=33" },
  { name: "Sreya S", college: "Civil Engg.", quote: "Best platform for first year engineering students in Kerala.", avatar: "https://i.pravatar.cc/150?img=27" },
];

export default function Testimonials() {
  const ref = useReveal({ targets: "[data-testimonial]", stagger: 0.12, y: 32 });

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="ember-spot h-[24rem] w-[24rem] right-8 top-8 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Success Stories</p>
        <h2 className="display-title mt-3 text-center text-3xl sm:text-4xl lg:text-5xl">What Our Students Say</h2>

        <div ref={ref} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} data-testimonial className="sticker sticker-lift lg:col-span-1 bg-white p-6">
              <div className="flex gap-0.5 text-mustard mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
              </div>
              <blockquote className="text-sm text-dark/70 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-dark bg-mustard/20">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="36px" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-dark">{t.name}</p>
                  <p className="text-xs text-sand">{t.college}</p>
                </div>
              </figcaption>
            </figure>
          ))}

          <div data-testimonial className="sticker sticker-lift lg:col-span-1 flex flex-col items-center justify-center gap-2 bg-mustard p-6 text-center">
            <span className="font-display text-lg font-bold text-dark/60">Google</span>
            <span className="font-display text-4xl font-bold tracking-tight text-dark">4.9/5</span>
            <div className="flex gap-0.5 text-dark">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
            </div>
            <p className="text-xs text-dark/55">Based on 500+ Reviews</p>
            <a href="#" className="mt-2 inline-flex items-center gap-1 rounded-full border-2 border-dark bg-dark px-4 py-1.5 text-xs font-bold text-mustard hover:bg-dark/90 transition-colors">
              Read all reviews <ArrowRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
