"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, pageLinks, site } from "@/lib/data";
import { Button } from "./ui/Button";
import { Cart, ChevronDown, Close, LogoMark, Menu } from "./ui/icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="#top" className="flex items-center gap-1.5" aria-label={`${site.name} home`}>
      <LogoMark className={`size-7 ${light ? "text-lime" : "text-teal"}`} />
      <span className={`font-display text-2xl font-medium ${light ? "text-lime" : "text-teal"}`}>{site.name}</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/70 py-3 shadow-[0_8px_30px_-12px_rgba(4,67,64,0.2)] backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop pill navigation */}
        <nav className="hidden rounded-full border border-white/70 bg-white/40 p-1.5 backdrop-blur-md lg:block">
          <ul className="flex items-center">
            {navLinks.map((l, i) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors hover:text-teal ${
                    i === 0 ? "text-teal" : "text-ink"
                  }`}
                >
                  {i === 0 && <span className="size-1.5 rounded-[2px] bg-teal" />}
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="relative" onMouseEnter={() => setPagesOpen(true)} onMouseLeave={() => setPagesOpen(false)}>
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-ink transition-colors hover:text-teal"
              >
                Pages
                <ChevronDown className={`size-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 transition-all duration-300 ${
                  pagesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <ul className="rounded-2xl bg-white p-2 shadow-[0_20px_50px_-20px_rgba(4,67,64,0.35)]">
                  {pageLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block rounded-xl px-4 py-2.5 text-ink transition-colors hover:bg-cream hover:text-teal"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Cart"
            className="relative hidden size-[52px] place-items-center rounded-full border border-white/70 bg-white/40 text-teal backdrop-blur-md sm:grid"
          >
            <Cart className="size-5" />
            <span className="absolute right-3 top-3 size-2 rounded-full bg-red-500" />
          </button>
          <Button href="#appointment" className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid size-12 place-items-center rounded-full bg-teal text-white lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-teal/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(360px,88vw)] flex-col bg-cream p-6 transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-line text-teal"
          >
            <Close className="size-5" />
          </button>
        </div>
        <ul className="mt-10 space-y-1">
          {[...navLinks, ...pageLinks].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3.5 font-display text-2xl text-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button href="#appointment">Book Appointment</Button>
        </div>
      </aside>
    </header>
  );
}
