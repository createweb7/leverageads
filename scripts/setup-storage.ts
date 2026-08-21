import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) throw listError;

  if (buckets.some((b) => b.name === "media")) {
    console.log("Bucket 'media' already exists.");
    return;
  }

  const { error } = await supabase.storage.createBucket("media", {
    public: true,
    fileSizeLimit: "8MB",
    allowedMimeTypes: ["image/webp", "image/jpeg", "image/png"],
  });

  if (error) throw error;
  console.log("Created public bucket 'media'.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
