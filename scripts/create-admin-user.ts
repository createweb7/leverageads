/**
 * One-off: creates the single admin user in Supabase Auth via the
 * service-role key. Run once:
 *
 *   npx tsx scripts/create-admin-user.ts <email> [password]
 *
 * If password is omitted, a random one is generated and printed —
 * change it later from the Supabase Dashboard if you like.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { randomBytes } from "crypto";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const email = process.argv[2];
const password = process.argv[3] ?? randomBytes(12).toString("base64url");

if (!email) {
  console.error("Usage: npx tsx scripts/create-admin-user.ts <email> [password]");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error("Failed to create user:", error.message);
    process.exit(1);
  }

  console.log("Admin user created:");
  console.log(`  email:    ${data.user.email}`);
  console.log(`  password: ${password}`);
  console.log("\nLog in at /admin/login. Change the password from the Supabase Dashboard anytime.");
}

main();
