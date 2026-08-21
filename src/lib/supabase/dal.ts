import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "./server";

/**
 * Verifies the caller has an authenticated Supabase session. proxy.ts does an
 * optimistic cookie check on every /admin/* request, but Server Actions are
 * not covered by proxy matchers (they're POSTs to the page route) — so every
 * admin mutation must call this too, not just rely on proxy.ts.
 */
export const verifySession = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return user;
});

/** Same check, but returns null instead of redirecting — for Server Actions,
 * which should fail gracefully with an error rather than throwing a redirect. */
export const getVerifiedUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});
