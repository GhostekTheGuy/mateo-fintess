create table consultations (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  created_at timestamptz default now()
);

-- Allow anonymous inserts (public form)
alter table consultations enable row level security;

create policy "Allow anonymous inserts"
  on consultations
  for insert
  to anon
  with check (true);
