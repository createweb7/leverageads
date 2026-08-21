import type { Metadata } from "next";
import { PostForm } from "../PostForm";
import { createPost } from "../actions";

export const metadata: Metadata = { title: "New Post" };

export default function NewPostPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">New Post</h1>
      <div className="mt-6">
        <PostForm action={createPost} submitLabel="Create Post" />
      </div>
    </div>
  );
}
