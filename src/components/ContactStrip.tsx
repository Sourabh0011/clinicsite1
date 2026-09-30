import { site } from "@/lib/data";
import { Flower, Mail, Phone } from "./ui/icons";
import { Marquee } from "./ui/Marquee";

export function ContactStrip() {
  const items = Array.from({ length: 4 }, (_, i) => (
    <div key={i} className="flex items-center gap-8">
      <a href={`tel:${site.phone}`} className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-medium text-white sm:text-2xl">
        <Phone className="size-5 text-white/80" /> Call Us: {site.phone}
      </a>
      <Flower className="size-6 text-lime" />
      <a href={`mailto:${site.email}`} className="flex items-center gap-3 whitespace-nowrap font-display text-lg font-medium text-white sm:text-2xl">
        <Mail className="size-5 text-white/80" /> Email: {site.email}
      </a>
      <Flower className="size-6 text-lime" />
    </div>
  ));

  return (
    <div className="bg-teal py-4 sm:py-7">
      <Marquee>{items}</Marquee>
    </div>
  );
}
