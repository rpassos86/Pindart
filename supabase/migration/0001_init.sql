-- Match Point Art — initial schema
-- Run this in the Supabase SQL editor (or save under supabase/migrations/).

create table if not exists points (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users (id) default auth.uid(),
  name text not null,
  art_type text,
  description text,
  lat double precision not null,
  lng double precision not null,
  photo_url text,
  created_at timestamptz not null default now()
);

create table if not exists check_ins (
  id uuid primary key default gen_random_uuid(),
  point_id uuid not null references points (id) on delete cascade,
  user_id uuid not null references auth.users (id) default auth.uid(),
  created_at timestamptz not null default now()
);

-- Row Level Security: anyone can read, only signed-in users can write their own rows.
alter table points enable row level security;
alter table check_ins enable row level security;

create policy "Points are viewable by everyone"
  on points for select using (true);

create policy "Signed-in users can add points"
  on points for insert with check (auth.uid() = created_by);

create policy "Check-ins are viewable by everyone"
  on check_ins for select using (true);

create policy "Signed-in users can check in"
  on check_ins for insert with check (auth.uid() = user_id);
