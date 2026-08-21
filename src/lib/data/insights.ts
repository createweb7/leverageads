import { createPublicClient } from "@/lib/supabase/public";

export type InsightPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  /** Sanitized HTML — rendered directly on the post page. */
  body: string;
  published: boolean;
};

const SELECT_COLUMNS =
  "id, slug, title, excerpt, author, date, category, image, image_alt, body, published";

function mapRow(row: {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  image_alt: string;
  body: string;
  published: boolean;
}): InsightPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    author: row.author,
    date: row.date,
    category: row.category,
    image: row.image,
    imageAlt: row.image_alt,
    body: row.body,
    published: row.published,
  };
}

export async function getPublishedInsightPosts(): Promise<InsightPost[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq("published", true)
    .order("date", { ascending: false });

  if (error) {
    console.error("Failed to load insight posts", error);
    return [];
  }

  return data.map(mapRow);
}

export async function getInsightBySlug(
  slug: string
): Promise<InsightPost | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return mapRow(data);
}
