// Map pin shaped like a spray can, matching the brand identity.
// `color` should be one of the palette accents: coral #D85A30, pink #D4537E, amber #EF9F27.
export default function SprayCanPin({ color = '#D85A30', size = 34 }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 30 40" aria-hidden="true">
      <path
        d="M15 40 C15 40 4 26 4 17 C4 9 9 3 15 3 C21 3 26 9 26 17 C26 26 15 40 15 40 Z"
        fill={color}
      />
      <rect x="10" y="7" width="10" height="13" rx="2" fill="#2C2C2A" opacity="0.55" />
      <rect x="12" y="4" width="6" height="3" rx="1" fill="#2C2C2A" />
    </svg>
  )
}
