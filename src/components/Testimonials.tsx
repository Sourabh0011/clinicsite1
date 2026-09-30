import { testimonials } from "@/lib/data";
import { Quote } from "./ui/icons";
import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";

const tilts = ["-rotate-[5deg]", "rotate-[6deg] translate-y-6", "-rotate-[4deg] translate-y-3", "rotate-[5deg]", "-rotate-[6deg] translate-y-5"];

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden section-y">
      <Reveal className="wrap mx-auto max-w-[640px] text-center">
        <SectionTag center>Testimonial</SectionTag>
        <h2 className="text-[32px] leading-[1.2] sm:text-4xl lg:text-[56px]">What Our Patients Say</h2>
      </Reveal>

      <Marquee slow className="mt-12 py-10" gapClass="gap-6 pr-6">
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className={`w-[270px] shrink-0 rounded-2xl border-b-2 border-teal bg-cream p-6 shadow-[0_2px_0_0_#044340] transition-transform duration-500 hover:rotate-0 sm:w-[330px] ${
              tilts[i % tilts.length]
            }`}
          >
            <Quote className="ml-auto size-8 text-teal/40" />
            <h3 className="mt-1 text-2xl leading-tight">{t.title}</h3>
            <p className="mt-4 leading-relaxed">{t.text}</p>
            <p className="mt-6 text-center font-display text-2xl font-medium text-[#222]">{t.name}</p>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
