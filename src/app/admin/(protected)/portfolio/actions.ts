"use server";

import { revalidatePath } from "next/cache";
import { getVerifiedUser } from "@/lib/supabase/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { uploadImage, deleteImage, storagePathFromUrl, UploadError } from "@/lib/supabase/upload";
import { portfolioCategories } from "@/data/portfolio";

export type ActionState = { error?: string } | undefined;

async function requireUser() {
  const user = await getVerifiedUser();
  if (!user) throw new Error("Unauthorized");
}

function isValidCategory(slug: string) {
  return portfolioCategories.some((c) => c.slug === slug);
}

export async function addPortfolioItem(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireUser();

  const alt = String(formData.get("alt") ?? "").trim();
  const categorySlug = String(formData.get("categorySlug") ?? "");
  const file = formData.get("image") as File | null;

  if (!alt) return { error: "Description (alt text) is required." };
  if (!isValidCategory(categorySlug)) return { error: "Choose a valid category." };
  if (!file || file.size === 0) return { error: "An image is required." };

  const supabase = createAdminClient();

  let uploaded;
  try {
    uploaded = await uploadImage(file, `portfolio/${categorySlug}`);
  } catch (err) {
    return { error: err instanceof UploadError ? err.message : "Upload failed." };
  }

  const { data: maxRow } = await supabase
    .from("portfolio_items")
    .select("sort_order")
    .eq("category_slug", categorySlug)
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from("portfolio_items").insert({
    src: uploaded.url,
    alt,
    category_slug: categorySlug,
    width: uploaded.width,
    height: uploaded.height,
    sort_order: (maxRow?.sort_order ?? 0) + 1,
  });

  if (error) {
    await deleteImage(uploaded.path);
    return { error: "Could not save portfolio item." };
  }

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
}

export async function updatePortfolioItem(id: string, alt: string, categorySlug: string) {
  await requireUser();
  if (!alt.trim() || !isValidCategory(categorySlug)) return;

  const supabase = createAdminClient();
  await supabase
    .from("portfolio_items")
    .update({ alt: alt.trim(), category_slug: categorySlug })
    .eq("id", id);

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
}

export async function replacePortfolioItemImage(
  id: string,
  currentSrc: string,
  categorySlug: string,
  formData: FormData
) {
  await requireUser();

  const file = formData.get("image") as File | null;
  if (!file || file.size === 0) return;

  let uploaded;
  try {
    uploaded = await uploadImage(file, `portfolio/${categorySlug}`);
  } catch {
    return;
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("portfolio_items")
    .update({ src: uploaded.url, width: uploaded.width, height: uploaded.height })
    .eq("id", id);

  if (error) {
    await deleteImage(uploaded.path);
    return;
  }

  const oldPath = storagePathFromUrl(currentSrc);
  if (oldPath) await deleteImage(oldPath);

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
}

export async function deletePortfolioItem(id: string, src: string) {
  await requireUser();
  const supabase = createAdminClient();

  await supabase.from("portfolio_items").delete().eq("id", id);

  const path = storagePathFromUrl(src);
  if (path) await deleteImage(path);

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
}

export async function movePortfolioItem(
  id: string,
  categorySlug: string,
  direction: "up" | "down"
) {
  await requireUser();
  const supabase = createAdminClient();

  const { data: rows } = await supabase
    .from("portfolio_items")
    .select("id, sort_order")
    .eq("category_slug", categorySlug)
    .order("sort_order", { ascending: true });

  if (!rows) return;

  const index = rows.findIndex((r) => r.id === id);
  const swapIndex = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapIndex < 0 || swapIndex >= rows.length) return;

  const a = rows[index];
  const b = rows[swapIndex];

  await Promise.all([
    supabase.from("portfolio_items").update({ sort_order: b.sort_order }).eq("id", a.id),
    supabase.from("portfolio_items").update({ sort_order: a.sort_order }).eq("id", b.id),
  ]);

  revalidatePath("/admin/portfolio");
  revalidatePath("/portfolio");
}
