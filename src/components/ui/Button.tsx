import Link from "next/link";
import { ChevronRight } from "./icons";

type Variant = "lime" | "white";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-teal",
  white: "bg-white text-teal",
};

/**
 * Pill button with a teal arrow disc. On hover the label rolls up and
 * the arrow nudges right.
 */
export function Button({
  href,
  children,
  variant = "lime",
  size = "md",
  className = "",
}: {
  href: string;
  children: string;
  variant?: Variant;
  size?: "sm" | "md";
  className?: string;
}) {
  const sizing =
    size === "sm"
      ? "py-2.5 pl-4 pr-2.5 text-sm gap-2.5"
      : "py-3 pl-4 pr-3 text-[15px] gap-2.5 sm:py-4 sm:pl-5 sm:pr-4 sm:text-base sm:gap-3";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center rounded-full font-medium transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(4,67,64,0.45)] ${sizing} ${variants[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden leading-6">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span
        className={`grid shrink-0 place-items-center rounded-full bg-teal text-white transition-transform duration-300 group-hover:translate-x-0.5 ${
          size === "sm" ? "size-5" : "size-6"
        }`}
      >
        <ChevronRight className="size-3.5" />
      </span>
    </Link>
  );
}
