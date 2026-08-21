import "server-only";
import sharp from "sharp";
import { createAdminClient } from "./admin";

const BUCKET = "media";
const ALLOWED_TYPES = new Set(["image/webp", "image/jpeg", "image/png"]);
const MAX_BYTES = 8 * 1024 * 1024;

export class UploadError extends Error {}

/**
 * Validates and uploads an admin-submitted image to Supabase Storage,
 * converting it to WEBP first (matching the rest of the site's images),
 * and returns its public URL and intrinsic dimensions (portfolio items need
 * accurate width/height for the masonry grid to avoid layout shift).
 */
export async function uploadImage(file: File, folder: string) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new UploadError("Only WEBP, JPEG or PNG images are allowed.");
  }
  if (file.size > MAX_BYTES) {
    throw new UploadError("Image must be smaller than 8MB.");
  }

  const original = Buffer.from(await file.arrayBuffer());
  const buffer = await sharp(original).webp({ quality: 85 }).toBuffer();
  const metadata = await sharp(buffer).metadata();
  if (!metadata.width || !metadata.height) {
    throw new UploadError("Could not read image dimensions.");
  }

  const path = `${folder}/${crypto.randomUUID()}.webp`;
  const supabase = createAdminClient();

  const { error } = await supabase.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/webp",
    upsert: false,
  });

  if (error) {
    throw new UploadError(`Upload failed: ${error.message}`);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(path);

  return {
    url: publicUrl,
    path,
    width: metadata.width,
    height: metadata.height,
  };
}

/** Best-effort cleanup — call when a DB write fails after a successful
 * upload, or when an admin deletes a row and its image should go with it. */
export async function deleteImage(path: string) {
  const supabase = createAdminClient();
  await supabase.storage.from(BUCKET).remove([path]);
}

/** Derives the storage path from a public URL, for deleting images whose
 * path wasn't stored separately (rows only store the public `src` URL). */
export function storagePathFromUrl(url: string): string | null {
  const marker = `/object/public/${BUCKET}/`;
  const index = url.indexOf(marker);
  if (index === -1) return null;
  return url.slice(index + marker.length);
}
