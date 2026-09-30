"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { booking, site } from "@/lib/data";
import { Button } from "./ui/Button";
import { BadgeCheck } from "./ui/icons";

/** Full-bleed appointment banner that grows from an inset card to full width as you scroll. */
export function BookBanner() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the section top hits the bottom of the viewport, 1 when it reaches ~20% from the top
      const p = (vh - rect.top) / (vh * 0.8);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // % of width trimmed on each side; kept subtle on phones where space is tight
  const [maxInset, setMaxInset] = useState(12);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setMaxInset(mq.matches ? 4 : 12);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  const inset = (1 - progress) * maxInset;

  return (
    <section id="appointment" ref={ref} className="py-16 lg:py-24">
      <div className="wrap">
        <div
          className="relative mx-auto overflow-hidden rounded-2xl"
          style={{ clipPath: `inset(${inset * 0.6}% ${inset}% round 16px)` }}
        >
          <Image
            src={booking.image}
            alt="Dentist treating a patient"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ transform: `scale(${1.15 - progress * 0.15})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal/10 via-teal/55 to-teal" />

          <div className="relative flex min-h-[440px] flex-col items-center justify-center px-5 py-14 sm:min-h-[480px] sm:px-6 sm:py-20 text-center lg:min-h-[560px]">
            <p className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
              <span className="size-2.5 rounded-full bg-lime" />
              Available at - {site.hours}
            </p>
            <h2 className="mt-6 text-[32px] leading-[1.2] !text-white sm:text-4xl lg:text-5xl">
              Book Your
              <br />
              <span className="text-lime">Appointment</span> Today!
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-white">
              {booking.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <BadgeCheck className="size-5 text-white" />
                  {perk}
                </li>
              ))}
            </ul>
            <Button href="#appointment" className="mt-8">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
