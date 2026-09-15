import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import SprayCanPin from '../components/SprayCanPin.jsx'
import { createSprayCanIcon } from '../lib/sprayCanIcon.js'
import { usePoints } from '../lib/usePoints.js'

export default function Home() {
  const { t } = useTranslation()
  const { points, loading } = usePoints()

  return (
    <div>
      <h1>{t('app.name')}</h1>
      <p>{t('app.tagline')}</p>

      <div style={{ height: 320 }}>
        <MapContainer center={[53.335, -6.265]} zoom={14} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {points.map((point) => (
            <Marker
              key={point.id}
              position={[point.lat, point.lng]}
              icon={createSprayCanIcon(point.color)}
            >
              <Popup>
                <Link to={`/point/${point.id}`}>{point.name}</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {loading && <p>Loading...</p>}
      <ul>
        {points.map((point) => (
          <li key={point.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <SprayCanPin color={point.color} size={20} />
            {point.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
