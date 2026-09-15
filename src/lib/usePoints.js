import { useEffect, useState } from 'react'
import { supabase } from './supabase.js'

// Cycles through the three brand accent colors for map pins.
const PIN_COLORS = ['#D85A30', '#D4537E', '#EF9F27']

export function usePoints() {
  const [points, setPoints] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    supabase
      .from('points')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!isMounted) return
        if (error) {
          console.error('Failed to load points', error)
        } else {
          setPoints(
            (data ?? []).map((point, index) => ({
              ...point,
              color: PIN_COLORS[index % PIN_COLORS.length],
            })),
          )
        }
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { points, loading }
}
