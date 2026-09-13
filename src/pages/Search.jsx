import { useTranslation } from 'react-i18next'

export default function Search() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('search.title')}</h1>
      <input type="text" placeholder={t('search.placeholder')} />
      {/* Filter chips (neighbourhood, art type, newest) and results list go here. */}
    </div>
  )
}
