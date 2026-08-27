"use server";

import { revalidatePath } from "next/cache";
import { getVerifiedUser } from "@/lib/supabase/dal";
import { createAdminClient } from "@/lib/supabase/admin";

const STATUSES = ["new", "contacted", "closed"] as const;
export type EnquiryStatus = (typeof STATUSES)[number];

async function requireUser() {
  const user = await getVerifiedUser();
  if (!user) throw new Error("Unauthorized");
}

export async function updateEnquiryStatus(id: string, status: EnquiryStatus) {
  await requireUser();
  if (!STATUSES.includes(status)) return;

  const supabase = createAdminClient();
  await supabase
    .from("enquiries")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin/enquiries");
}

export async function deleteEnquiry(id: string) {
  await requireUser();
  const supabase = createAdminClient();
  await supabase.from("enquiries").delete().eq("id", id);
  revalidatePath("/admin/enquiries");
}
