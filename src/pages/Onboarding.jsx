import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Onboarding() {
  const { t } = useTranslation()
  const steps = ['step1', 'step2', 'step3']

  return (
    <div>
      {steps.map((step) => (
        <div key={step}>
          <h2>{t(`onboarding.${step}.title`)}</h2>
          <p>{t(`onboarding.${step}.body`)}</p>
        </div>
      ))}
      <Link to="/home">Continue</Link>
    </div>
  )
}
