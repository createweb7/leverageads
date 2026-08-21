-- Admin-managed content: client logos, portfolio images, blog posts.
-- Run this once in the Supabase SQL Editor (Project → SQL Editor → New query).

create extension if not exists "pgcrypto";

create table if not exists client_logos (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  name text not null,
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists portfolio_items (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  alt text not null,
  category_slug text not null,
  width int not null,
  height int not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  author text not null,
  date date not null,
  category text not null,
  image text not null,
  image_alt text not null,
  body jsonb not null,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table client_logos enable row level security;
alter table portfolio_items enable row level security;
alter table blog_posts enable row level security;

-- Public (anon) read access — the marketing site reads without auth.
create policy "public read client_logos" on client_logos
  for select using (true);

create policy "public read portfolio_items" on portfolio_items
  for select using (true);

create policy "public read published blog_posts" on blog_posts
  for select using (published = true);

-- No insert/update/delete policies are created for the anon/authenticated
-- roles, so those operations are only possible via the service_role key
-- (used server-side by admin Server Actions), which bypasses RLS entirely.

create index if not exists client_logos_sort_order_idx on client_logos (sort_order);
create index if not exists portfolio_items_category_idx on portfolio_items (category_slug, sort_order);
create index if not exists blog_posts_published_date_idx on blog_posts (published, date desc);
