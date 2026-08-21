"use client";

import { useActionState, useState } from "react";
import { Input, Textarea, Label, FormError, FileInput } from "@/components/admin/Field";
import { Button } from "@/components/ui/Button";
import { RichTextEditor } from "./RichTextEditor";
import type { ActionState } from "./actions";
import type { InsightPost } from "@/lib/data/insights";

type PostFormAction = (state: ActionState, formData: FormData) => Promise<ActionState>;

export function PostForm({
  action,
  post,
  submitLabel,
}: {
  action: PostFormAction;
  post?: InsightPost;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  // Defends against rows whose `body` predates the HTML-body migration
  // (supabase/migrations/0002_blog_body_to_html.sql) — TipTap expects an
  // HTML string, not the old paragraph/heading/list block array.
  const initialBody = typeof post?.body === "string" ? post.body : "<p></p>";
  const [bodyHtml, setBodyHtml] = useState(initialBody);

  return (
    <form action={formAction} className="max-w-3xl space-y-5">
      <FormError message={state?.error} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="title">Title (renders as the page H1)</Label>
          <Input id="title" name="title" required defaultValue={post?.title} />
        </div>
        <div>
          <Label htmlFor="slug">Slug (optional — derived from title)</Label>
          <Input id="slug" name="slug" defaultValue={post?.slug} placeholder="auto-generated" />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea id="excerpt" name="excerpt" required rows={2} defaultValue={post?.excerpt} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" required defaultValue={post?.author} />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" required defaultValue={post?.date} />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" required defaultValue={post?.category} />
        </div>
      </div>

      <div>
        <Label htmlFor="image">
          Cover image {post ? "(leave empty to keep current)" : ""}
        </Label>
        <FileInput
          id="image"
          name="image"
          accept="image/webp,image/png,image/jpeg"
          required={!post}
        />
      </div>

      <div>
        <Label>Body</Label>
        <input type="hidden" name="body" value={bodyHtml} />
        <RichTextEditor content={bodyHtml} onChange={setBodyHtml} />
      </div>

      <label className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true} />
        Published
      </label>

      <Button type="submit" disabled={pending}>
        {pending ? "Saving…" : submitLabel}
      </Button>
    </form>
  );
}
