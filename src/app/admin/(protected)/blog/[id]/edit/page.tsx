import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { PostForm } from "../../PostForm";
import { updatePost } from "../../actions";
import type { InsightPost } from "@/lib/data/insights";

export const metadata: Metadata = { title: "Edit Post" };

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, author, date, category, image, image_alt, body, published")
    .eq("id", id)
    .maybeSingle();

  if (!data) notFound();

  const post: InsightPost = {
    id: data.id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    author: data.author,
    date: data.date,
    category: data.category,
    image: data.image,
    imageAlt: data.image_alt,
    body: data.body,
    published: data.published,
  };

  const boundUpdate = updatePost.bind(null, post.id, post.image);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">Edit Post</h1>
      <div className="mt-6">
        <PostForm action={boundUpdate} post={post} submitLabel="Save Changes" />
      </div>
    </div>
  );
}
