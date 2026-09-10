import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 22, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-3.9 3.6-6.5 8-6.5s8 2.6 8 6.5" />
    </svg>
  );
}

export function SlotsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M8.5 4.5v15M15.5 4.5v15" />
      <circle cx="6" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FishingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 12c3.5-4.5 9-4.5 12.5 0C12 16.5 6.5 16.5 3 12Z" />
      <path d="M15.5 12 21 8.5v7L15.5 12Z" />
      <circle cx="7" cy="11" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MiniGamesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.2l-4.3 2.3.8-4.9L5 8.2l4.8-.7L12 3Z" />
    </svg>
  );
}

export function CardsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="6" width="10" height="14" rx="2" transform="rotate(-8 9 13)" />
      <rect x="10" y="4" width="10" height="14" rx="2" transform="rotate(8 15 11)" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c-3.6 0-6-2.3-6-5.6 0-2.5 1.6-4.4 3-6.1 1.1-1.4 2.2-2.8 2.5-4.8 2.3 1.6 6.5 5.7 6.5 10.9 0 3.3-2.4 5.6-6 5.6Z" />
      <path d="M12 21c-1.6 0-2.8-1.1-2.8-2.8 0-1.6 1.2-2.7 2.8-4.2 1.6 1.5 2.8 2.6 2.8 4.2 0 1.7-1.2 2.8-2.8 2.8Z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H4.5v1A3.5 3.5 0 0 0 8 9.5M16 5h3.5v1A3.5 3.5 0 0 1 16 9.5" />
      <path d="M12 13v4m-3.5 3h7m-5.5-3h4" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M2.8 19c.5-3 3-4.8 6.2-4.8s5.7 1.8 6.2 4.8" />
      <path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.6 14.6c2 .7 3.3 2.2 3.6 4.4" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 3h9A1.5 1.5 0 0 1 14.5 4.5V5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M15.5 6.5c-1 .1-2.2-.6-2.2-2.1 0-1.4 1.2-2.3 2.3-2.4.1 1.2-.9 2.4-.1 4.5Z" fill="currentColor" stroke="none" opacity="0" />
      <path d="M16.8 12.8c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.1 0 1.6-.7 3-.7s1.8.7 3 .7 2-1 2.8-2.1c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.8-1-2.8-3.8ZM14.6 5.6c.6-.8 1.1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AndroidIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 8.5a5.3 5.3 0 0 1 10 0" />
      <path d="M6 9.5h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z" />
      <path d="m8 5.5-1-1.7M16 5.5l1-1.7M9 20.5v-3M15 20.5v-3M4 10.5v4M20 10.5v4" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17.5" cy="5.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
      <path d="m8.3 10.8 7-4M8.3 13.2l7 4" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c-4.7 4.9-4.7 12.1 0 17 4.7-4.9 4.7-12.1 0-17Z" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4h-1A2.5 2.5 0 0 1 4 13.5v-7Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="14" r="5.5" />
      <path d="m9.5 9 -2.5-5.5h4L12 7l1-3.5h4L14.5 9M12 11.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8Z" />
    </svg>
  );
}
