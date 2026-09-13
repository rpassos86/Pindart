import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer } from 'react-leaflet'
import SprayCanPin from '../components/SprayCanPin.jsx'

// Placeholder data — replace with a Supabase query against the points table.
const samplePoints = [
  { id: 1, name: 'Camden St light box', lat: 53.336, lng: -6.264, color: '#D85A30' },
  { id: 2, name: 'Portobello mural', lat: 53.331, lng: -6.267, color: '#D4537E' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('app.name')}</h1>
      <p>{t('app.tagline')}</p>

      <div style={{ height: 320 }}>
        <MapContainer center={[53.335, -6.265]} zoom={14} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Swap the default Leaflet marker for SprayCanPin via a custom divIcon in a follow-up pass. */}
        </MapContainer>
      </div>

      <ul>
        {samplePoints.map((point) => (
          <li key={point.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <SprayCanPin color={point.color} size={20} />
            {point.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
