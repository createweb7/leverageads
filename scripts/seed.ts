/**
 * One-off migration: copies the existing static content in src/data/*.ts
 * into the new Supabase tables. Run once after applying
 * supabase/migrations/0001_admin_content.sql:
 *
 *   npx tsx scripts/seed.ts
 *
 * Safe to re-run — it skips rows that already exist (by slug/name/src).
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { clientLogos } from "../src/data/clients";
import { portfolioItems } from "../src/data/portfolio";
import { insightPosts } from "../src/data/insights";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function seedClientLogos() {
  const { data: existing } = await supabase.from("client_logos").select("src");
  const existingSrcs = new Set((existing ?? []).map((r) => r.src));

  const rows = clientLogos
    .filter((c) => !existingSrcs.has(c.src))
    .map((c, i) => ({ src: c.src, name: c.name, sort_order: i }));

  if (rows.length === 0) {
    console.log("client_logos: nothing to seed");
    return;
  }

  const { error } = await supabase.from("client_logos").insert(rows);
  if (error) throw error;
  console.log(`client_logos: inserted ${rows.length}`);
}

async function seedPortfolioItems() {
  const { data: existing } = await supabase.from("portfolio_items").select("src");
  const existingSrcs = new Set((existing ?? []).map((r) => r.src));

  const counters: Record<string, number> = {};
  const rows = portfolioItems
    .filter((item) => !existingSrcs.has(item.src))
    .map((item) => {
      const order = (counters[item.categorySlug] ??= 0);
      counters[item.categorySlug] += 1;
      return {
        src: item.src,
        alt: item.alt,
        category_slug: item.categorySlug,
        width: item.width,
        height: item.height,
        sort_order: order,
      };
    });

  if (rows.length === 0) {
    console.log("portfolio_items: nothing to seed");
    return;
  }

  const { error } = await supabase.from("portfolio_items").insert(rows);
  if (error) throw error;
  console.log(`portfolio_items: inserted ${rows.length}`);
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function blocksToHtml(blocks: (typeof insightPosts)[number]["body"]) {
  return blocks
    .map((block) => {
      if (block.type === "heading") return `<h2>${escapeHtml(block.text)}</h2>`;
      if (block.type === "list") {
        return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
      }
      return `<p>${escapeHtml(block.text)}</p>`;
    })
    .join("");
}

async function seedBlogPosts() {
  const { data: existing } = await supabase.from("blog_posts").select("slug");
  const existingSlugs = new Set((existing ?? []).map((r) => r.slug));

  const rows = insightPosts
    .filter((post) => !existingSlugs.has(post.slug))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      date: post.date,
      category: post.category,
      image: post.image,
      image_alt: post.imageAlt,
      body: blocksToHtml(post.body),
      published: true,
    }));

  if (rows.length === 0) {
    console.log("blog_posts: nothing to seed");
    return;
  }

  const { error } = await supabase.from("blog_posts").insert(rows);
  if (error) throw error;
  console.log(`blog_posts: inserted ${rows.length}`);
}

async function main() {
  await seedClientLogos();
  await seedPortfolioItems();
  await seedBlogPosts();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
