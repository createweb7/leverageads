import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Anon-key client for public content reads (client logos, portfolio,
 * published blog posts). No cookies involved — these queries don't depend
 * on a signed-in session, and this client is safe to call from
 * generateStaticParams/build-time contexts where next/headers' cookies()
 * isn't available.
 */
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
