import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/data";
import { ArrowUpRight } from "./ui/icons";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";

export function Services() {
  return (
    <section id="services" className="pb-20 lg:pb-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <SectionTag center>Our Services</SectionTag>
          <h2 className="text-4xl leading-[1.2] lg:text-5xl">Complete Care for Your Everyday Health Needs</h2>
          <p className="mt-5">
            At {site.name}, we offer a wide range of healthcare services to support you and your family, whether in
            person or online.
          </p>
        </Reveal>

        <ul className="mt-10">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80}>
              <Link
                href="#appointment"
                className="group grid items-center gap-6 border-b border-line py-8 md:grid-cols-[1fr_300px_1fr_auto] md:gap-10 lg:grid-cols-[1.1fr_300px_1fr_auto]"
              >
                <div>
                  <p className="font-display text-sm text-teal">[{String(i + 1).padStart(2, "0")}]</p>
                  <h3 className="mt-6 max-w-[240px] text-3xl leading-tight transition-colors group-hover:text-lime-dark">
                    {s.title}
                  </h3>
                </div>
                <div className="relative aspect-[302/158] overflow-hidden rounded-xl">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="flex max-w-[360px] gap-3 md:justify-self-end">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink" />
                  {s.text}
                </p>
                <span className="grid size-16 place-items-center rounded-full border border-line text-teal transition-all duration-300 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime">
                  <ArrowUpRight className="size-6" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
