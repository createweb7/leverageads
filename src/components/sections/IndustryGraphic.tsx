export function IndustryGraphic({
  slug,
  gradientFrom,
  gradientTo,
  accent,
}: {
  slug: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
}) {
  const gradientId = `industry-grad-${slug}`;

  return (
    <svg
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 470"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={gradientFrom} />
          <stop offset="1" stopColor={gradientTo} />
        </linearGradient>
      </defs>
      <rect width="400" height="470" fill={`url(#${gradientId})`} />
      <IndustryMotif slug={slug} accent={accent} />
    </svg>
  );
}

function IndustryMotif({ slug, accent }: { slug: string; accent: string }) {
  switch (slug) {
    case "jewellery":
      return (
        <g transform="translate(0, -65)">
          <circle cx="290" cy="150" r="90" fill="none" stroke={accent} strokeWidth="1.2" opacity=".55" />
          <circle cx="290" cy="150" r="60" fill="none" stroke={accent} strokeWidth="1" opacity=".4" />
          <path d="M270 130l20-24 20 24-20 44z" fill={accent} opacity=".9" />
          <circle cx="120" cy="330" r="130" fill={accent} opacity=".08" />
        </g>
      );
    case "healthcare":
      return (
        <g transform="translate(0, -65)">
          <path
            d="M0 260 L60 260 L90 200 L130 320 L165 240 L200 260 L400 260"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            opacity=".7"
          />
          <rect x="250" y="90" width="110" height="110" rx="26" fill="rgba(255,255,255,.07)" />
          <path d="M305 115v60M275 145h60" stroke={accent} strokeWidth="7" strokeLinecap="round" />
        </g>
      );
    case "hospitality":
      return (
        <g transform="translate(0, -65)">
          <circle cx="200" cy="180" r="95" fill="none" stroke={accent} strokeWidth="1.2" opacity=".5" />
          <path d="M150 220 q50 -90 100 0" fill="none" stroke={accent} strokeWidth="2.5" opacity=".85" />
          <rect x="140" y="220" width="120" height="6" rx="3" fill={accent} opacity=".85" />
          <circle cx="200" cy="128" r="7" fill={accent} />
          <circle cx="90" cy="380" r="110" fill={accent} opacity=".06" />
        </g>
      );
    case "education":
      return (
        <g transform="translate(0, -65)">
          <path
            d="M200 110l110 48-110 48-110-48z"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            opacity=".85"
          />
          <path
            d="M140 185v52c0 18 27 32 60 32s60-14 60-32v-52"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            opacity=".6"
          />
          <path d="M310 158v70" stroke={accent} strokeWidth="2" opacity=".6" />
          <circle cx="310" cy="238" r="6" fill={accent} opacity=".8" />
          <circle cx="110" cy="390" r="120" fill={accent} opacity=".05" />
        </g>
      );
    case "retail":
      return (
        <g transform="translate(0, -65)">
          <path
            d="M140 150h130l-14 100a16 16 0 0 1-16 14h-70a16 16 0 0 1-16-14z"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            opacity=".85"
          />
          <path
            d="M165 150v-14a40 40 0 0 1 80 0v14"
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            opacity=".85"
          />
          <circle cx="300" cy="350" r="100" fill={accent} opacity=".06" />
        </g>
      );
    case "corporate":
      return (
        <g transform="translate(0, -65)">
          <rect x="120" y="140" width="70" height="180" rx="6" fill="none" stroke={accent} strokeWidth="2" opacity=".7" />
          <rect x="210" y="90" width="70" height="230" rx="6" fill="none" stroke={accent} strokeWidth="2" opacity=".85" />
          <path
            d="M138 170h34M138 200h34M138 230h34M228 120h34M228 150h34M228 180h34M228 210h34"
            stroke={accent}
            strokeWidth="2"
            opacity=".4"
          />
          <circle cx="320" cy="400" r="110" fill="#E8362A" opacity=".07" />
        </g>
      );
    default:
      return (
        <g transform="translate(0, -65)">
          <circle cx="200" cy="180" r="95" fill="none" stroke={accent} strokeWidth="1.2" opacity=".5" />
          <circle cx="200" cy="180" r="60" fill="none" stroke={accent} strokeWidth="1" opacity=".35" />
          <circle cx="110" cy="380" r="120" fill={accent} opacity=".06" />
        </g>
      );
  }
}
