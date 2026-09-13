import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export default function PointDetail() {
  const { t } = useTranslation()
  const { id } = useParams()

  // Replace with a Supabase query for the point and its check-ins, filtered by `id`.
  return (
    <div>
      <p>Point #{id}</p>
      <button>{t('point.checkInButton')}</button>
      <h2>{t('point.whoseBeenHere')}</h2>
      <ul>{/* Map over check-ins fetched from Supabase */}</ul>
    </div>
  )
}
