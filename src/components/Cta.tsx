import Image from "next/image";
import { cta } from "@/lib/data";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";
import { SoftGradient } from "./ui/SoftGradient";

const floating = [
  "left-[12%] top-[10%] rotate-0",
  "left-[4%] top-[50%] rotate-0",
  "right-[4%] top-[33%] rotate-0",
];

export function Cta() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl px-6 py-20 text-center">
            <SoftGradient variant="wide" />
            {cta.images.map((src, i) => (
              <div
                key={src}
                className={`absolute hidden aspect-[180/130] w-[14%] overflow-hidden rounded-xl shadow-lg lg:block ${floating[i]}`}
                style={{ animation: `${i % 2 ? "float-b" : "float-a"} ${9 + i * 2}s ease-in-out infinite` }}
              >
                <Image src={src} alt="" fill sizes="200px" className="object-cover" />
              </div>
            ))}
            <div className="relative mx-auto max-w-[420px]">
              <SectionTag center>Appointment</SectionTag>
              <h2 className="text-4xl leading-[1.2] lg:text-5xl">Start Your Health Journey Today</h2>
              <p className="mt-5">Book online for trusted check-ups, prescriptions and convenient medical care.</p>
              <Button href="#appointment" className="mt-8">
                Book Your Appointment
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
