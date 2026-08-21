"use client";

import Image from "next/image";
import { useActionState, useState, useTransition } from "react";
import { ArrowUp, ArrowDown, Trash2, Pencil, X } from "lucide-react";
import { Input, FormError, FileInput } from "@/components/admin/Field";
import { Button } from "@/components/ui/Button";
import { deleteClientLogo, toggleClientLogoActive, moveClientLogo, updateClientLogo } from "./actions";
import type { ClientLogo } from "@/lib/data/clientLogos";

export function LogoRow({
  logo,
  isFirst,
  isLast,
}: {
  logo: ClientLogo;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [pending, startTransition] = useTransition();
  const [editing, setEditing] = useState(false);

  return (
    <>
      <tr className={pending ? "opacity-50" : undefined}>
        <td className="py-3 pl-5 pr-4">
          <Image
            src={logo.src}
            alt={logo.name}
            width={80}
            height={50}
            className="h-10 w-20 rounded-md border border-brand-line object-contain bg-white"
          />
        </td>
        <td className="py-3 pr-4 text-sm font-medium text-brand-ink">{logo.name}</td>
        <td className="py-3 pr-4">
          <div className="flex gap-1">
            <button
              type="button"
              disabled={isFirst || pending}
              onClick={() => startTransition(() => moveClientLogo(logo.id, "up"))}
              className="rounded p-1.5 text-brand-gray hover:bg-brand-paper disabled:opacity-30"
              aria-label="Move up"
            >
              <ArrowUp size={15} />
            </button>
            <button
              type="button"
              disabled={isLast || pending}
              onClick={() => startTransition(() => moveClientLogo(logo.id, "down"))}
              className="rounded p-1.5 text-brand-gray hover:bg-brand-paper disabled:opacity-30"
              aria-label="Move down"
            >
              <ArrowDown size={15} />
            </button>
          </div>
        </td>
        <td className="py-3 pr-4">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={logo.active}
              disabled={pending}
              onChange={(e) =>
                startTransition(() => toggleClientLogoActive(logo.id, e.target.checked))
              }
            />
            Active
          </label>
        </td>
        <td className="py-3 pr-5 text-right">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              disabled={pending}
              onClick={() => setEditing((v) => !v)}
              className="rounded p-1.5 text-brand-gray hover:bg-brand-paper hover:text-brand-ink"
              aria-label={editing ? "Cancel edit" : "Edit"}
            >
              {editing ? <X size={15} /> : <Pencil size={15} />}
            </button>
            <button
              type="button"
              disabled={pending}
              onClick={() => {
                if (confirm(`Delete "${logo.name}"?`)) {
                  startTransition(() => deleteClientLogo(logo.id, logo.src));
                }
              }}
              className="rounded p-1.5 text-brand-gray hover:bg-red-50 hover:text-red-600"
              aria-label="Delete"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </td>
      </tr>
      {editing && (
        <tr>
          <td colSpan={5} className="bg-brand-paper px-5 py-4">
            <EditLogoForm logo={logo} onDone={() => setEditing(false)} />
          </td>
        </tr>
      )}
    </>
  );
}

function EditLogoForm({ logo, onDone }: { logo: ClientLogo; onDone: () => void }) {
  const boundAction = updateClientLogo.bind(null, logo.id, logo.src);
  const [state, formAction, pending] = useActionState(boundAction, undefined);

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        onDone();
      }}
      className="flex flex-wrap items-end gap-4"
    >
      <FormError message={state?.error} />
      <div className="min-w-48">
        <Input name="name" defaultValue={logo.name} required placeholder="Client name" />
      </div>
      <div>
        <label className="block text-xs text-brand-gray-2 mb-1">Replace image (optional)</label>
        <FileInput name="image" accept="image/webp,image/png,image/jpeg" />
        <p className="mt-1 text-xs text-brand-gray-2">Recommended: 384 × 240px.</p>
      </div>
      <Button type="submit" disabled={pending} size="sm">
        {pending ? "Saving…" : "Save"}
      </Button>
    </form>
  );
}
