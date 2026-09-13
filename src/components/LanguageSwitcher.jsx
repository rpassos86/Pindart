import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <label style={{ fontSize: 12 }}>
      {t('profile.language')}:{' '}
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </label>
  )
}
