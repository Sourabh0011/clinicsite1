import Image from "next/image";
import { team } from "@/lib/data";
import { XLogo } from "./ui/icons";
import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";
import { SoftGradient } from "./ui/SoftGradient";

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-20 lg:py-24">
      <SoftGradient variant="wide" />
      <Reveal className="wrap relative text-center">
        <SectionTag center>Meet Our Team</SectionTag>
        <h2 className="text-[32px] leading-[1.2] sm:text-4xl lg:text-5xl">Caring Experts You Can Trust</h2>
      </Reveal>

      <Marquee className="relative mt-12" gapClass="gap-6 pr-6">
        {team.map((m) => (
          <article key={m.name} className="group relative h-[340px] w-[260px] shrink-0 sm:h-[400px] sm:w-[300px] overflow-hidden rounded-2xl">
            <Image
              src={m.image}
              alt={m.name}
              fill
              sizes="300px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-xl bg-white/80 p-4 backdrop-blur-md">
              <div>
                <h3 className="text-xl leading-tight text-[#222]">{m.name}</h3>
                <p className="mt-1.5 text-sm">{m.role}</p>
              </div>
              <a
                href="#"
                aria-label={`${m.name} on X`}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-teal text-teal transition-colors hover:bg-teal hover:text-white"
              >
                <XLogo className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
