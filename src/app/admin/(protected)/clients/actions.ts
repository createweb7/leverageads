"use server";

import { revalidatePath } from "next/cache";
import { getVerifiedUser } from "@/lib/supabase/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { uploadImage, deleteImage, storagePathFromUrl, UploadError } from "@/lib/supabase/upload";

export type ActionState = { error?: string } | undefined;

async function requireUser() {
  const user = await getVerifiedUser();
  if (!user) throw new Error("Unauthorized");
}

export async function addClientLogo(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireUser();

  const name = String(formData.get("name") ?? "").trim();
  const file = formData.get("image") as File | null;

  if (!name) return { error: "Name is required." };
  if (!file || file.size === 0) return { error: "An image is required." };

  const supabase = createAdminClient();

  let uploaded;
  try {
    uploaded = await uploadImage(file, "clients");
  } catch (err) {
    return { error: err instanceof UploadError ? err.message : "Upload failed." };
  }

  const { data: maxRow } = await supabase
    .from("client_logos")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from("client_logos").insert({
    src: uploaded.url,
    name,
    sort_order: (maxRow?.sort_order ?? 0) + 1,
  });

  if (error) {
    await deleteImage(uploaded.path);
    return { error: "Could not save logo." };
  }

  revalidatePath("/admin/clients");
  revalidatePath("/");
}

export async function updateClientLogo(
  id: string,
  currentSrc: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireUser();

  const name = String(formData.get("name") ?? "").trim();
  const file = formData.get("image") as File | null;

  if (!name) return { error: "Name is required." };

  const supabase = createAdminClient();

  let imageUrl = currentSrc;
  let uploadedPath: string | null = null;

  if (file && file.size > 0) {
    try {
      const uploaded = await uploadImage(file, "clients");
      imageUrl = uploaded.url;
      uploadedPath = uploaded.path;
    } catch (err) {
      return { error: err instanceof UploadError ? err.message : "Upload failed." };
    }
  }

  const { error } = await supabase
    .from("client_logos")
    .update({ name, src: imageUrl })
    .eq("id", id);

  if (error) {
    if (uploadedPath) await deleteImage(uploadedPath);
    return { error: "Could not save changes." };
  }

  if (uploadedPath) {
    const oldPath = storagePathFromUrl(currentSrc);
    if (oldPath) await deleteImage(oldPath);
  }

  revalidatePath("/admin/clients");
  revalidatePath("/");
}

export async function deleteClientLogo(id: string, src: string) {
  await requireUser();
  const supabase = createAdminClient();

  await supabase.from("client_logos").delete().eq("id", id);

  const path = storagePathFromUrl(src);
  if (path) await deleteImage(path);

  revalidatePath("/admin/clients");
  revalidatePath("/");
}

export async function toggleClientLogoActive(id: string, active: boolean) {
  await requireUser();
  const supabase = createAdminClient();
  await supabase.from("client_logos").update({ active }).eq("id", id);
  revalidatePath("/admin/clients");
  revalidatePath("/");
}

export async function moveClientLogo(id: string, direction: "up" | "down") {
  await requireUser();
  const supabase = createAdminClient();

  const { data: rows } = await supabase
    .from("client_logos")
    .select("id, sort_order")
    .order("sort_order", { ascending: true });

  if (!rows) return;

  const index = rows.findIndex((r) => r.id === id);
  const swapIndex = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapIndex < 0 || swapIndex >= rows.length) return;

  const a = rows[index];
  const b = rows[swapIndex];

  await Promise.all([
    supabase.from("client_logos").update({ sort_order: b.sort_order }).eq("id", a.id),
    supabase.from("client_logos").update({ sort_order: a.sort_order }).eq("id", b.id),
  ]);

  revalidatePath("/admin/clients");
  revalidatePath("/");
}
