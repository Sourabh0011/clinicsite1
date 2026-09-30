"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { ArrowDown } from "./ui/icons";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-20 lg:pb-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <SectionTag center>FAQ</SectionTag>
          <h2 className="text-4xl leading-[1.2] lg:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-5">
            Answers to the questions we hear most, so you can feel confident and informed before your appointment.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-[1070px] space-y-5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="rounded-2xl bg-cream px-6 lg:px-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-2xl font-medium text-teal lg:text-[32px]">{f.q}</span>
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-full border border-line bg-white text-teal transition-all duration-300 ${
                        isOpen ? "rotate-180 border-lime bg-lime" : ""
                      }`}
                    >
                      <ArrowDown className="size-5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-line/70 pb-7 pt-6 text-lg leading-snug">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
