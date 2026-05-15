create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  price numeric(12, 2) not null default 0,
  stock integer not null default 0,
  status text default 'Ativo',
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;

create policy "Allow public read on products"
  on public.products for select
  using (true);

create policy "Allow public insert on products"
  on public.products for insert
  with check (true);

create policy "Allow public delete on products"
  on public.products for delete
  using (true);
