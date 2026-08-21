import { createPublicClient } from "@/lib/supabase/public";

export type ClientLogo = {
  id: string;
  src: string;
  name: string;
  sort_order: number;
  active: boolean;
};

export async function getClientLogos(): Promise<ClientLogo[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("client_logos")
    .select("id, src, name, sort_order, active")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to load client logos", error);
    return [];
  }

  return data;
}
