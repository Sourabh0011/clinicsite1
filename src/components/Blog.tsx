import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";
import { Button } from "./ui/Button";
import { ArrowUpRight, Calendar } from "./ui/icons";
import { Reveal } from "./ui/Reveal";
import { SectionTag } from "./ui/SectionTag";

export function Blog() {
  return (
    <section id="blog" className="section-y">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>Blog</SectionTag>
            <h2 className="text-4xl leading-[1.2] lg:text-5xl">Health Tips &amp; Insights</h2>
          </div>
          <Button href="#blog">View More Blog</Button>
        </Reveal>

        <div className="mt-12 grid items-start gap-8 md:grid-cols-3 lg:gap-6">
          {posts.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 120}>
              <Link href="#blog" className="group block">
                <div className={`relative overflow-hidden rounded-xl ${p.aspect}`}>
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm">
                  <Calendar className="size-4" />
                  {p.date}
                </p>
                <h3 className="mt-3 max-w-[340px] text-3xl leading-tight transition-colors group-hover:text-lime-dark">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span>{p.read}</span>
                  <span className="flex items-center gap-1 text-[#222]">
                    Read More
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
