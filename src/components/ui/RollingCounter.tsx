"use client";

import { useInView } from "./Reveal";

/** Odometer-style number: each digit column rolls to its value on first view. */
export function RollingCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const digits = String(value).padStart(2, "0").split("").map(Number);

  return (
    <span ref={ref} className="inline-flex items-baseline" aria-label={`${value}${suffix}`}>
      {digits.map((d, i) => (
        <span key={i} aria-hidden className="relative inline-block h-[1.1em] overflow-hidden leading-[1.1]">
          <span
            className="flex flex-col transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              // Column holds 20 rows, so one row = 5% of its height
              transform: `translateY(${inView ? -(d + 10) * 5 : 0}%)`,
              transitionDelay: `${i * 120}ms`,
            }}
          >
            {/* 0-9 twice so every digit rolls a full turn before landing */}
            {Array.from({ length: 20 }, (_, n) => (
              <span key={n} className="h-[1.1em]">
                {n % 10}
              </span>
            ))}
          </span>
        </span>
      ))}
      <span aria-hidden className="ml-1">
        {suffix}
      </span>
    </span>
  );
}
