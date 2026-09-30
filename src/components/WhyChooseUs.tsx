import { reasons, site } from "@/lib/data";
import { Clover, Hourglass, Sparkle } from "./ui/icons";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";
import { SoftGradient } from "./ui/SoftGradient";

const icons = { hourglass: Hourglass, clover: Clover, sparkle: Sparkle };

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden section-y">
      <SoftGradient variant="center" />
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <SectionTag center>Why Choose Us</SectionTag>
          <h2 className="text-[32px] leading-[1.2] sm:text-4xl lg:text-5xl">Why Choose {site.name}?</h2>
          <p className="mt-5">
            From everyday check-ups to specialist care, we make looking after your family&apos;s health simple, personal and
            reliable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-6">
          {reasons.map((r, i) => {
            const Icon = icons[r.icon];
            return (
              <Reveal key={r.title} delay={i * 120} className={i === 1 ? "md:mt-12" : ""}>
                <article className="h-full rounded-2xl bg-cream p-6 transition sm:p-8-transform duration-500 hover:-translate-y-2">
                  <Icon className="size-14 text-lime" />
                  <h3 className="mt-6 text-2xl leading-tight sm:mt-8 sm:text-3xl">{r.title}</h3>
                  <p className="mt-4 text-base leading-snug sm:text-lg">{r.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
