-- Enquiry form submissions (general contact form + WhatsApp automation
-- requirement form). Written only by the server (Server Actions / route
-- handlers using the service-role key) — there is no public insert policy,
-- so anonymous clients cannot write directly, and no public select policy
-- either, since this is private customer contact data.
-- Run this once in the Supabase SQL Editor.

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  form_type text not null default 'general', -- 'general' | 'whatsapp-automation'
  name text,
  business_name text,
  email text not null,
  phone text not null,
  message text,
  details jsonb not null default '{}'::jsonb,
  status text not null default 'new', -- 'new' | 'contacted' | 'closed'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table enquiries enable row level security;

create index if not exists enquiries_status_idx on enquiries (status, created_at desc);
