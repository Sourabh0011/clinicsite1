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

  // Lock page scroll and close on Escape while the mobile drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white/70 py-3 shadow-[0_8px_30px_-12px_rgba(4,67,64,0.2)] backdrop-blur-xl" : "py-4 sm:py-5"
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

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Cart"
            className="relative hidden size-[52px] place-items-center rounded-full border border-white/70 bg-white/40 text-teal backdrop-blur-md lg:grid"
          >
            <Cart className="size-5" />
            <span className="absolute right-3 top-3 size-2 rounded-full bg-red-500" />
          </button>
          {/* Compact pill on tablets, full size on desktop; phones use the drawer's button */}
          {/* Wrapped because Button always sets inline-flex, which would override `hidden` */}
          <div className="hidden sm:block lg:hidden">
            <Button href="#appointment" size="sm">
              Contact Us
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button href="#appointment">Contact Us</Button>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-full bg-teal text-white sm:size-11 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile drawer — rendered outside <header>: the header's backdrop-filter would
          otherwise become the containing block for these fixed elements once scrolled. */}
      <div
        aria-hidden
        className={`fixed inset-0 z-50 bg-teal/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        aria-label="Mobile menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(340px,86vw)] flex-col overflow-y-auto bg-cream p-5 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-6 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid size-10 place-items-center rounded-full border border-line text-teal"
          >
            <Close className="size-5" />
          </button>
        </div>
        <ul className="mt-8">
          {[...navLinks, ...pageLinks].map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3 font-display text-xl text-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <Button href="#appointment" size="sm">
            Book Appointment
          </Button>
        </div>
      </aside>
    </>
  );
}
