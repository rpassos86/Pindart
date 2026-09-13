# Match Point Art (MPArt)

Find it. Visit it. Leave your mark.

An app for discovering street art around a city — murals, stencils, painted
light boxes — and connecting people through a simple check-in feed at each
point. Not limited to one city: the name and structure are built to expand
beyond Dublin later.

## Stack

- **Frontend**: React + Vite
- **Map**: Leaflet (via `react-leaflet`)
- **Backend**: Supabase (auth, Postgres database, storage for photos)
- **i18n**: `react-i18next` — English is the default, Portuguese is available
  as a toggle in the profile screen
- **Deploy**: Vercel

## Getting started

```bash
npm install
npm run dev
```

You'll need a free [Supabase](https://supabase.com) project. Create one, then
add a `.env.local` file (not committed) with:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Project structure

```
src/
├── components/     # SprayCanPin, LanguageSwitcher, and future shared UI
├── pages/          # Home, PointDetail, Search, Profile, Onboarding
├── locales/        # en.json (default), pt.json
├── lib/            # supabase.js client
└── App.jsx         # routes
```

## Status

Scaffolded with page stubs matching the validated screens (home/map,
individual point, search, profile, onboarding). Not yet built:

- Supabase tables for `points` and `check_ins`, and real queries in each page
- Custom Leaflet marker using `SprayCanPin` instead of the default pin
- Auth flow (sign up / log in)
- Onboarding step indicator and "skip" action
