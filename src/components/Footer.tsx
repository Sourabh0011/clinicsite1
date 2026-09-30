import Link from "next/link";
import { footer, site } from "@/lib/data";
import { Logo } from "./Navbar";
import { Button } from "./ui/Button";
import { Facebook, Flower, Instagram, LinkedIn, XLogo } from "./ui/icons";
import { Marquee } from "./ui/Marquee";

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "X", Icon: XLogo },
  { label: "Instagram", Icon: Instagram },
  { label: "LinkedIn", Icon: LinkedIn },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="flex items-center gap-2 font-display text-2xl text-white">
      <span className="size-1.5 bg-lime" />
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="border-b border-white/15 py-5">
        <Marquee gapClass="gap-10 pr-10">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center gap-10">
              <Button href="#appointment">Book Appointment Now</Button>
              <Flower className="size-6 text-lime" />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="wrap grid gap-12 py-16 md:grid-cols-[1fr_1.4fr_1fr] md:gap-0">
        <div className="md:border-r md:border-white/15">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-6 space-y-3">
            {footer.quickLinks.map((l, i) => (
              <li key={l.label}>
                <Link href={l.href} className={`transition-colors hover:text-lime ${i === 0 ? "text-lime" : "text-white"}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-center md:px-10 md:text-center">
          <Logo light />
          <p className="mt-6 max-w-[440px] text-white/90">{site.description}</p>
          <ul className="mt-8 flex gap-4">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-lime text-lime transition-colors hover:bg-lime hover:text-teal"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:flex md:justify-end md:border-l md:border-white/15">
          <div>
            <FooterHeading>Utilities</FooterHeading>
            <ul className="mt-6 space-y-3">
              {footer.utilities.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Made with care for healthier families — <span className="text-lime">{site.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
