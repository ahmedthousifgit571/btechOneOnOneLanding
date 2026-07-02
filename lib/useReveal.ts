"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

type RevealOptions = {
  /** CSS selector (scoped to the container ref) for items to stagger in. */
  targets: string;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
  /** Animate one shared timeline instead of each target independently. */
  once?: boolean;
};

/**
 * Wires a ScrollTrigger-driven stagger reveal onto a container.
 * Lives in a hook so every section can opt in without repeating
 * the SSR-safety dance (registerGsap + cleanup + context revert).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const targets = container.querySelectorAll(options.targets);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: options.y ?? 40 });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.9,
        stagger: options.stagger ?? 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: options.start ?? "top 78%",
          once: options.once ?? true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [options.targets, options.stagger, options.y, options.duration, options.start, options.once]);

  return containerRef;
}
