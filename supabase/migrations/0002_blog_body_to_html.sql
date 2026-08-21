-- Switches blog_posts.body from a jsonb block array (paragraph/heading/list)
-- to a plain HTML string, so posts can use real rich text (H2/H3, bold,
-- italic, links, bullet/numbered lists) instead of only three fixed block
-- types with plain text. Converts existing rows in place.
-- Run this once in the Supabase SQL Editor.

create or replace function _escape_html(input text) returns text as $$
  select replace(replace(replace(coalesce(input, ''), '&', '&amp;'), '<', '&lt;'), '>', '&gt;');
$$ language sql immutable;

alter table blog_posts add column if not exists body_html text;

update blog_posts
set body_html = coalesce((
  select string_agg(
    case (elem->>'type')
      when 'heading' then '<h2>' || _escape_html(elem->>'text') || '</h2>'
      when 'list' then '<ul>' || (
        select string_agg('<li>' || _escape_html(item) || '</li>', '')
        from jsonb_array_elements_text(elem->'items') as item
      ) || '</ul>'
      else '<p>' || _escape_html(elem->>'text') || '</p>'
    end,
    ''
  )
  from jsonb_array_elements(body) as elem
), '')
where body_html is null;

alter table blog_posts alter column body_html set not null;
alter table blog_posts drop column body;
alter table blog_posts rename column body_html to body;

drop function _escape_html(text);
