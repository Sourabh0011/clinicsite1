import Image from "next/image";
import { hero } from "@/lib/data";
import { Button } from "./ui/Button";
import { SoftGradient } from "./ui/SoftGradient";

type Card = (typeof hero.cards)[number];

function HeroCard({ card, featured = false }: { card: Card; featured?: boolean }) {
  return (
    <div
      className={`rounded-[20px] border border-white/70 bg-white/40 p-2 backdrop-blur-md ${
        featured ? "shadow-[0_30px_60px_-25px_rgba(4,67,64,0.45)]" : ""
      }`}
    >
      <div className="relative aspect-[389/367] overflow-hidden rounded-[14px]">
        <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 390px, 80vw" className="object-cover" priority={featured} />
      </div>
      <div className="mt-2 flex items-center gap-3 rounded-[14px] bg-teal px-4 py-4">
        {card.avatars.length > 0 ? (
          <div className="flex -space-x-3">
            {card.avatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-lime font-display text-lg text-teal">✓</span>
        )}
        <div>
          <p className="font-display text-2xl font-medium leading-tight text-white">{card.value}</p>
          <p className="text-sm text-white/80">{card.label}</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [left, center, right] = hero.cards;

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <SoftGradient bars />

      <div className="wrap relative text-center">
        <h1
          className="mx-auto max-w-[900px] text-[44px] leading-[1.1] tracking-[-0.02em] sm:text-6xl lg:text-[77px]"
          style={{ animation: "rise 1s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {hero.titleBefore}{" "}
          <span className="relative inline-block border-l-2 border-lime-dark bg-gradient-to-r from-lime to-white/0 px-1">
            {hero.titleHighlight}
          </span>{" "}
          {hero.titleAfter}
        </h1>
        <p
          className="mx-auto mt-6 max-w-[640px] text-lg leading-snug text-ink"
          style={{ animation: "rise 1s 0.15s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {hero.text}
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "rise 1s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <Button href="#appointment">Book Appointment</Button>
          <Button href="#services" variant="white">
            Explore Services
          </Button>
        </div>

        {/* Stacked cards: sides slide out from behind the featured card */}
        <div className="relative mx-auto mt-16 max-w-[720px] lg:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:hidden">
            <HeroCard card={center} featured />
          </div>
          <div className="relative hidden sm:block">
            <div
              className="absolute left-0 top-0 w-[54%]"
              style={{ animation: "spread-left 1.2s 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <HeroCard card={left} />
            </div>
            <div
              className="absolute right-0 top-0 w-[54%]"
              style={{ animation: "spread-right 1.2s 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <HeroCard card={right} />
            </div>
            <div
              className="relative z-10 mx-auto w-[56%]"
              style={{ animation: "rise 1.1s 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <HeroCard card={center} featured />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
