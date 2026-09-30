/** Infinite horizontal loop. Content is rendered twice so the -50% keyframe loops seamlessly. */
export function Marquee({
  children,
  slow = false,
  reverse = false,
  className = "",
  gapClass = "gap-8 pr-8",
}: {
  children: React.ReactNode;
  slow?: boolean;
  reverse?: boolean;
  className?: string;
  gapClass?: string;
}) {
  return (
    <div className={`marquee-pause flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className={`flex shrink-0 items-center ${gapClass}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${gapClass}`} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
