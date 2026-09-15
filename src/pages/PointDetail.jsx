import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useAuth } from '../lib/AuthContext.jsx'

export default function PointDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [point, setPoint] = useState(null)
  const [checkIns, setCheckIns] = useState([])

  useEffect(() => {
    supabase.from('points').select('*').eq('id', id).single().then(({ data }) => setPoint(data))
    loadCheckIns()
  }, [id])

  function loadCheckIns() {
    supabase
      .from('check_ins')
      .select('id, created_at, user_id')
      .eq('point_id', id)
      .order('created_at', { ascending: false })
      .then(({ data }) => setCheckIns(data ?? []))
  }

  async function handleCheckIn() {
    if (!user) {
      navigate('/login')
      return
    }
    const { error } = await supabase.from('check_ins').insert({ point_id: id })
    if (error) {
      console.error('Check-in failed', error)
      return
    }
    loadCheckIns()
  }

  if (!point) return <p>Loading...</p>

  return (
    <div>
      <h1>{point.name}</h1>
      <p>{point.description}</p>

      <button onClick={handleCheckIn}>{t('point.checkInButton')}</button>

      <h2>{t('point.whoseBeenHere')}</h2>
      <ul>
        {checkIns.map((checkIn) => (
          <li key={checkIn.id}>{new Date(checkIn.created_at).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  )
}
