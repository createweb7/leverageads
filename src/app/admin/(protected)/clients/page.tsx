import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import { AddLogoForm } from "./AddLogoForm";
import { LogoRow } from "./LogoRow";
import type { ClientLogo } from "@/lib/data/clientLogos";

export const metadata: Metadata = { title: "Client Logos" };

export default async function AdminClientsPage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("client_logos")
    .select("id, src, name, sort_order, active")
    .order("sort_order", { ascending: true });

  const logos = (data ?? []) as ClientLogo[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">Client Logos</h1>
      <p className="mt-1.5 text-sm text-brand-gray">
        Shown in the homepage marquee, in this order. Untick &ldquo;Active&rdquo; to hide a logo
        without deleting it.
      </p>

      <div className="mt-6">
        <AddLogoForm />
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-line bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-brand-line text-left text-xs font-semibold uppercase tracking-wide text-brand-gray-2">
              <th className="py-3 pl-5 pr-4">Logo</th>
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Order</th>
              <th className="py-3 pr-4">Status</th>
              <th className="py-3 pr-5 text-right">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-line">
            {logos.map((logo, i) => (
              <LogoRow
                key={logo.id}
                logo={logo}
                isFirst={i === 0}
                isLast={i === logos.length - 1}
              />
            ))}
          </tbody>
        </table>
        {logos.length === 0 && (
          <p className="p-8 text-center text-sm text-brand-gray">No client logos yet.</p>
        )}
      </div>
    </div>
  );
}
