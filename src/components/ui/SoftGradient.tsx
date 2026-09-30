/**
 * The signature blurred mint / lime / butter gradient used behind the hero,
 * "why choose us", team and CTA sections. Pure CSS — no background image.
 */
export function SoftGradient({
  bars = false,
  variant = "hero",
}: {
  bars?: boolean;
  variant?: "hero" | "center" | "wide";
}) {
  const blobs = {
    hero: [
      "left-[-10%] top-[-5%] h-[70%] w-[55%] bg-[#8fd4a8]",
      "right-[-5%] top-[5%] h-[60%] w-[45%] bg-[#e9eaa6]",
      "left-[30%] top-[25%] h-[45%] w-[40%] bg-[#b9e3c6]",
      "right-[5%] top-[45%] h-[40%] w-[35%] bg-[#8fd4a8]",
    ],
    center: [
      "left-[-10%] bottom-[-20%] h-[70%] w-[45%] bg-[#eee7a8]",
      "left-[25%] top-[10%] h-[80%] w-[50%] bg-[#5da67a]",
      "right-[-10%] top-[10%] h-[80%] w-[45%] bg-[#8fd4a8]",
      "right-[5%] bottom-[-20%] h-[50%] w-[30%] bg-[#9ce069]",
    ],
    wide: [
      "left-[-5%] top-[-10%] h-[90%] w-[40%] bg-[#8fd4a8]",
      "left-[30%] top-[30%] h-[80%] w-[35%] bg-[#eee7a8]",
      "right-[-5%] top-[0%] h-[100%] w-[40%] bg-[#7ccfa7]",
    ],
  }[variant];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-sand">
      {blobs.map((cls, i) => (
        <div
          key={cls}
          className={`absolute rounded-full opacity-80 blur-[90px] ${cls}`}
          style={{ animation: `${i % 2 ? "float-b" : "float-a"} ${16 + i * 3}s ease-in-out infinite` }}
        />
      ))}
      {bars && (
        <div className="absolute inset-0 flex items-stretch justify-between px-[2%] opacity-60">
          {[38, 62, 20, 0, 0, 0, 0, 30, 55, 70].map((top, i) => (
            <div
              key={i}
              className="w-[7%] bg-gradient-to-b from-white/35 to-white/0 blur-[2px]"
              style={{ marginTop: `${top === 0 ? 100 : top / 2}%`, opacity: top === 0 ? 0 : 1 }}
            />
          ))}
        </div>
      )}
      {/* Fade to page colour at the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-sand/60" />
    </div>
  );
}
