"use client";

import Link from "next/link";
import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deletePost, togglePostPublished } from "./actions";

export function PostRow({
  post,
}: {
  post: { id: string; slug: string; title: string; category: string; date: string; image: string; published: boolean };
}) {
  const [pending, startTransition] = useTransition();

  return (
    <tr className={pending ? "opacity-50" : undefined}>
      <td className="py-3 pl-5 pr-4">
        <Link href={`/admin/blog/${post.id}/edit`} className="text-sm font-semibold text-brand-ink hover:text-brand-red">
          {post.title}
        </Link>
      </td>
      <td className="py-3 pr-4 text-sm text-brand-gray">{post.category}</td>
      <td className="py-3 pr-4 text-sm text-brand-gray">{post.date}</td>
      <td className="py-3 pr-4">
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={post.published}
            disabled={pending}
            onChange={(e) =>
              startTransition(() => togglePostPublished(post.id, post.slug, e.target.checked))
            }
          />
          Published
        </label>
      </td>
      <td className="py-3 pr-5 text-right">
        <button
          type="button"
          disabled={pending}
          onClick={() => {
            if (confirm(`Delete "${post.title}"?`)) {
              startTransition(() => deletePost(post.id, post.slug, post.image));
            }
          }}
          className="rounded p-1.5 text-brand-gray hover:bg-red-50 hover:text-red-600"
          aria-label="Delete"
        >
          <Trash2 size={15} />
        </button>
      </td>
    </tr>
  );
}
