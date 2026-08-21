"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getVerifiedUser } from "@/lib/supabase/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { uploadImage, deleteImage, storagePathFromUrl, UploadError } from "@/lib/supabase/upload";
import { sanitizePostBody } from "@/lib/sanitize";

export type ActionState = { error?: string } | undefined;

async function requireUser() {
  const user = await getVerifiedUser();
  if (!user) throw new Error("Unauthorized");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function isBodyEmpty(html: string) {
  return html.replace(/<[^>]*>/g, "").trim().length === 0;
}

function revalidateInsights(slug?: string) {
  revalidatePath("/insights");
  if (slug) revalidatePath(`/insights/${slug}`, "page");
}

export async function createPost(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireUser();

  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const published = formData.get("published") === "on";
  const bodyRaw = String(formData.get("body") ?? "");
  const file = formData.get("image") as File | null;

  if (!title || !excerpt || !author || !date || !category) {
    return { error: "All fields are required." };
  }
  if (!file || file.size === 0) return { error: "A cover image is required." };
  if (isBodyEmpty(bodyRaw)) return { error: "Body cannot be empty." };

  const body = sanitizePostBody(bodyRaw);
  const slug = slugify(slugInput || title);
  const supabase = createAdminClient();

  let uploaded;
  try {
    uploaded = await uploadImage(file, "blog");
  } catch (err) {
    return { error: err instanceof UploadError ? err.message : "Upload failed." };
  }

  const { error } = await supabase.from("blog_posts").insert({
    slug,
    title,
    excerpt,
    author,
    date,
    category,
    image: uploaded.url,
    image_alt: title,
    body,
    published,
  });

  if (error) {
    await deleteImage(uploaded.path);
    if (error.code === "23505") return { error: "A post with this slug already exists." };
    return { error: "Could not save the post." };
  }

  revalidatePath("/admin/blog");
  revalidateInsights(slug);
  redirect("/admin/blog");
}

export async function updatePost(
  id: string,
  currentSrc: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireUser();

  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const published = formData.get("published") === "on";
  const bodyRaw = String(formData.get("body") ?? "");
  const file = formData.get("image") as File | null;

  if (!title || !excerpt || !author || !date || !category) {
    return { error: "All fields are required." };
  }
  if (isBodyEmpty(bodyRaw)) return { error: "Body cannot be empty." };

  const body = sanitizePostBody(bodyRaw);
  const slug = slugify(slugInput || title);
  const supabase = createAdminClient();

  let imageUrl = currentSrc;
  let uploadedPath: string | null = null;

  if (file && file.size > 0) {
    try {
      const uploaded = await uploadImage(file, "blog");
      imageUrl = uploaded.url;
      uploadedPath = uploaded.path;
    } catch (err) {
      return { error: err instanceof UploadError ? err.message : "Upload failed." };
    }
  }

  const { error } = await supabase
    .from("blog_posts")
    .update({
      slug,
      title,
      excerpt,
      author,
      date,
      category,
      image: imageUrl,
      image_alt: title,
      body,
      published,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    if (uploadedPath) await deleteImage(uploadedPath);
    if (error.code === "23505") return { error: "A post with this slug already exists." };
    return { error: "Could not save the post." };
  }

  if (uploadedPath) {
    const oldPath = storagePathFromUrl(currentSrc);
    if (oldPath) await deleteImage(oldPath);
  }

  revalidatePath("/admin/blog");
  revalidateInsights(slug);
  redirect("/admin/blog");
}

export async function deletePost(id: string, slug: string, image: string) {
  await requireUser();
  const supabase = createAdminClient();

  await supabase.from("blog_posts").delete().eq("id", id);

  const path = storagePathFromUrl(image);
  if (path) await deleteImage(path);

  revalidatePath("/admin/blog");
  revalidateInsights(slug);
}

export async function togglePostPublished(id: string, slug: string, published: boolean) {
  await requireUser();
  const supabase = createAdminClient();
  await supabase.from("blog_posts").update({ published }).eq("id", id);

  revalidatePath("/admin/blog");
  revalidateInsights(slug);
}
