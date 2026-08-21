"use client";

import { usePathname } from "next/navigation";

/**
 * Wraps the public-site chrome (Header/Footer/WhatsAppBar) so it's hidden on
 * /admin routes, which have their own nav shell. The wrapped components stay
 * Server Components — only this thin wrapper needs to be a Client Component
 * to read the pathname.
 */
export function HideOnAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <>{children}</>;
}
