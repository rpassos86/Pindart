import { createClient } from '@supabase/supabase-js'

// Create a project at https://supabase.com and paste your own values into a
// local .env file (never commit real keys):
//   VITE_SUPABASE_URL=your-project-url
//   VITE_SUPABASE_ANON_KEY=your-anon-key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
