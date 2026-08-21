import type { Metadata } from "next";
import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/admin";
import { Button } from "@/components/ui/Button";
import { PostRow } from "./PostRow";

export const metadata: Metadata = { title: "Blog Posts" };

export default async function AdminBlogPage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, slug, title, category, date, image, published")
    .order("date", { ascending: false });

  const posts = data ?? [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-brand-ink">Blog Posts</h1>
        <Link href="/admin/blog/new">
          <Button size="sm">New Post</Button>
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-line bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-brand-line text-left text-xs font-semibold uppercase tracking-wide text-brand-gray-2">
              <th className="py-3 pl-5 pr-4">Title</th>
              <th className="py-3 pr-4">Category</th>
              <th className="py-3 pr-4">Date</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-5 text-right">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-line">
            {posts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
        {posts.length === 0 && (
          <p className="p-8 text-center text-sm text-brand-gray">No blog posts yet.</p>
        )}
      </div>
    </div>
  );
}
