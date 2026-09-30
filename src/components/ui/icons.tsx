type IconProps = React.SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden {...props}>
      <path
        d="M16 28.5S3.5 21 3.5 11.8C3.5 7.5 6.8 4.5 10.5 4.5c2.4 0 4.3 1.2 5.5 3 1.2-1.8 3.1-3 5.5-3 3.7 0 7 3 7 7.3C28.5 21 16 28.5 16 28.5Z"
        fill="currentColor"
      />
      <path d="M16 11.5v8M12 15.5h8" stroke="#9ce069" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)} strokeWidth={2.4}>
      <path d="m10 7 5 5-5 5" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Cart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="17" cy="20" r="1.2" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </svg>
  );
}

export function BadgeCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 2.8 14.3 4.5l2.9-.2.9 2.7 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-.9 2.7-2.9-.2L12 21.2l-2.3-1.7-2.9.2-.9-2.7-2.4-1.7.9-2.8-.9-2.8 2.4-1.7.9-2.7 2.9.2L12 2.8Z" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg viewBox="0 0 40 32" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M0 32V19.2C0 8.6 5 2.2 15 0l1.8 4.2C11 6 8.3 9.6 8 15h8v17H0Zm23 0V19.2C23 8.6 28 2.2 38 0l1.8 4.2C34 6 31.3 9.6 31 15h8v17H23Z"
      />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)} strokeWidth={2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function XLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"
      />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z"
      />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M6.9 20H3.6V9.3h3.3V20ZM5.2 7.8a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM20.4 20h-3.3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3.3V9.3h3.2v1.5c.4-.8 1.5-1.7 3.1-1.7 3.3 0 4 2.2 4 5V20Z"
      />
    </svg>
  );
}

/** Four-petal flower used as a divider dot in the marquees. */
export function Flower(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 2c2.2 0 4 1.8 4 4 2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2 .3.6.5 1.3.5 2 0 2.2-1.8 4-4 4 0 2.2-1.8 4-4 4s-4-1.8-4-4c-2.2 0-4-1.8-4-4 0-.7.2-1.4.5-2A4 4 0 0 1 4 10c0-2.2 1.8-4 4-4 0-2.2 1.8-4 4-4Z"
      />
    </svg>
  );
}

export function Hourglass(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <path fill="currentColor" d="M4 4h40c0 11-8 18-20 20C12 22 4 15 4 4Zm0 40h40c0-11-8-18-20-20C12 26 4 33 4 44Z" />
    </svg>
  );
}

export function Clover(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M4 4h14c0 5 2 8 6 8s6-3 6-8h14v14c-5 0-8 2-8 6s3 6 8 6v14H30c0-5-2-8-6-8s-6 3-6 8H4V30c5 0 8-2 8-6s-3-6-8-6V4Z"
      />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <path fill="currentColor" d="M24 2c1.5 12 10 20.5 22 22-12 1.5-20.5 10-22 22-1.5-12-10-20.5-22-22 12-1.5 20.5-10 22-22Z" />
    </svg>
  );
}
