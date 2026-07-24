const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function DumbbellIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9v6M2 10.5v3M20 9v6M22 10.5v3M7 12h10" />
      <path d="M7 8v8M17 8v8" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.7 19a6.3 6.3 0 0 1 12.6 0" />
      <path d="M15.5 5.3a3.2 3.2 0 0 1 0 6.2M18 19a6 6 0 0 0-3.5-5.5" />
    </svg>
  )
}

export function HeartPulseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.2-4.5-9.7-9.2C.8 7.7 2.2 4.5 5.3 3.8c2-.4 3.7.6 4.7 2.2 1-1.6 2.7-2.6 4.7-2.2 3.1.7 4.5 3.9 3 7C19.2 15.5 12 20 12 20Z" />
      <path d="M4.5 11h3l1.5-2.5 2 5 1.5-2.5h3.5" />
    </svg>
  )
}

export function ShieldCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M8.8 12l2.2 2.2 4.2-4.4" />
    </svg>
  )
}

export function FlameIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c1 3-3 4-3 8a3 3 0 0 0 6 0c1 .8 1.5 2 1.5 3.2 0 3.7-3 6.8-6.5 6.8S3.5 17.4 3.5 13.7c0-4 3-6 3.5-9 1.2 1 2 2.3 2 3.8 1-1.2 2-3 3-6Z" />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function StretchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="4.2" r="1.8" />
      <path d="M12 7v6l-4 7M12 13l4 7M8 10l-4.5 2M16 10l4.5 2" />
    </svg>
  )
}

export function BikeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="17" r="3.2" />
      <circle cx="18" cy="17" r="3.2" />
      <path d="M6 17l4-9h5l3 5M10 8H8m4.5 0L15 12M18 17l-2.5-7" />
    </svg>
  )
}
