"use client";

import { useTransition } from "react";
import { LogOut } from "lucide-react";
import { logout } from "./actions";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => logout())}
      className="flex items-center gap-2 text-sm font-semibold text-brand-gray transition-colors hover:text-brand-red disabled:opacity-50"
    >
      <LogOut size={15} />
      Log out
    </button>
  );
}
