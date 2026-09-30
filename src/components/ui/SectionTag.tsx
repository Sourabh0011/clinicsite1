export function SectionTag({
  children,
  center = false,
  light = false,
}: {
  children: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-sm uppercase tracking-wide ${
        center ? "justify-center" : ""
      } ${light ? "text-white" : "text-teal"}`}
    >
      <span className={`size-1.5 ${light ? "bg-lime" : "bg-teal"}`} />
      {children}
    </p>
  );
}
