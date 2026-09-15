import L from 'leaflet'

// Same silhouette as components/SprayCanPin.jsx, inlined as a Leaflet divIcon
// so it can be colored per point (coral #D85A30, pink #D4537E, amber #EF9F27, ...).
export function createSprayCanIcon(color = '#D85A30', size = 34) {
  const height = Math.round(size * 1.3)

  const html = `
    <svg width="${size}" height="${height}" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 40 C15 40 4 26 4 17 C4 9 9 3 15 3 C21 3 26 9 26 17 C26 26 15 40 15 40 Z" fill="${color}"/>
      <rect x="10" y="7" width="10" height="13" rx="2" fill="#2C2C2A" opacity="0.55"/>
      <rect x="12" y="4" width="6" height="3" rx="1" fill="#2C2C2A"/>
    </svg>
  `.trim()

  return L.divIcon({
    html,
    className: 'spray-can-pin', // keep empty in CSS — just clears Leaflet's default white square
    iconSize: [size, height],
    // Tip of the can (bottom point) lands exactly on the coordinate, like a map pin.
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height],
  })
}
