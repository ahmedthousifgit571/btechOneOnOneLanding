"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress w-full"
      aria-hidden="true"
    />
  );
}
