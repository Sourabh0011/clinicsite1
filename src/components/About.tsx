import { about } from "@/lib/data";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { RollingCounter } from "./ui/RollingCounter";
import { SectionTag } from "./ui/SectionTag";

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="wrap">
        <Reveal>
          <SectionTag>About Us</SectionTag>
          <h2 className="max-w-[600px] text-4xl leading-[1.2] lg:text-5xl">{about.title}</h2>
        </Reveal>

        <Reveal delay={150} className="mt-8 lg:ml-[39%] lg:mt-6">
          <p className="max-w-[780px] text-lg leading-snug">{about.text}</p>
          <Button href="#team" className="mt-8">
            About Us
          </Button>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {about.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className={`border-line pr-6 ${i % 2 ? "border-l pl-6 lg:pl-[18%]" : ""} ${
                i === 2 ? "lg:border-l lg:pl-[18%]" : ""
              }`}
            >
              <p className="font-display text-5xl font-medium text-teal lg:text-[56px]">
                <RollingCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
