import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'

export default function Profile() {
  const { t } = useTranslation()

  return (
    <div>
      <LanguageSwitcher />
      <div>
        <span>{t('profile.pointsVisited')}: 0</span>
        <span>{t('profile.pointsAdded')}: 0</span>
      </div>
      <h2>{t('profile.recentCheckIns')}</h2>
      <ul>{/* Map over the user's check-ins fetched from Supabase */}</ul>
    </div>
  )
}
