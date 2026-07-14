import Link from "next/link";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx("flex flex-wrap items-center gap-1.5 text-sm text-brand-gray", className)}
    >
      <Link href="/" className="transition-colors hover:text-brand-red">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight size={14} />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-brand-red">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-brand-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
