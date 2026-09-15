import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'

export default function Profile() {
  const { t } = useTranslation()
  const { user, loading, signOut } = useAuth()

  if (loading) return <p>Loading...</p>
  if (!user) return <Navigate to="/login" replace />

  return (
    <div>
      <LanguageSwitcher />
      <p>{user.email}</p>
      <div>
        <span>{t('profile.pointsVisited')}: 0</span>
        <span>{t('profile.pointsAdded')}: 0</span>
      </div>
      <h2>{t('profile.recentCheckIns')}</h2>
      <ul>{/* Map over the user's check-ins fetched from Supabase */}</ul>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}
