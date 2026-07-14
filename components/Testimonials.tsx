"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight, Play } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const VIDEO_TESTIMONIALS = [
  { id: "W1ejgx_rjiQ", url: "https://youtube.com/shorts/W1ejgx_rjiQ?si=0VymVeykk9rnn5Yx" },
  { id: "xSQAuE8rH_s", url: "https://youtube.com/shorts/xSQAuE8rH_s?si=Yyo8jI67zhxW_-IB" },
];

export default function Testimonials() {
  const ref = useReveal({ targets: "[data-testimonial]", stagger: 0.12, y: 32 });
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="ember-spot h-[24rem] w-[24rem] right-8 top-8 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Success Stories</p>
        <h2 className="display-title mt-3 text-center text-3xl sm:text-4xl lg:text-5xl">What Our Students Say</h2>

        <div ref={ref} className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {VIDEO_TESTIMONIALS.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testimonial
              className="sticker sticker-mustard-shadow sticker-lift group relative block aspect-[3/4] overflow-hidden bg-gradient-to-br from-mustard/40 via-dark to-dark"
            >
              {!failed[v.id] && (
                <Image
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt="Watch student video testimonial"
                  fill
                  unoptimized
                  className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                  sizes="240px"
                  onError={() => setFailed((s) => ({ ...s, [v.id]: true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/40" />
              <div className="absolute top-3 left-3 flex gap-0.5 text-mustard">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mustard text-dark shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                </span>
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                Watch Story
              </span>
            </a>
          ))}

          <div data-testimonial className="sticker sticker-lift flex flex-col items-center justify-center gap-2 bg-mustard p-6 text-center">
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
