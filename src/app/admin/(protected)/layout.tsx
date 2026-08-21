import type { Metadata } from "next";
import { verifySession } from "@/lib/supabase/dal";
import { AdminSidebar } from "../AdminSidebar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await verifySession();

  return (
    <div className="min-h-screen bg-brand-paper lg:flex">
      <AdminSidebar email={user.email ?? ""} />
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
