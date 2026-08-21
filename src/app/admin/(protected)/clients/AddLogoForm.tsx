"use client";

import { useActionState, useRef } from "react";
import { Input, Label, FormError, FileInput } from "@/components/admin/Field";
import { Button } from "@/components/ui/Button";
import { addClientLogo } from "./actions";

export function AddLogoForm() {
  const [state, formAction, pending] = useActionState(addClientLogo, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
      }}
      className="flex flex-wrap items-end gap-4 rounded-2xl border border-brand-line bg-white p-5"
    >
      <div className="min-w-48">
        <Label htmlFor="name">Client name</Label>
        <Input id="name" name="name" required placeholder="e.g. Lakshmi Silvers" />
      </div>
      <div>
        <Label htmlFor="image">Logo image</Label>
        <FileInput id="image" name="image" accept="image/webp,image/png,image/jpeg" required />
        <p className="mt-1 text-xs text-brand-gray-2">Recommended: 384 × 240px for a uniform size in the marquee.</p>
      </div>
      <Button type="submit" disabled={pending} size="sm">
        {pending ? "Adding…" : "Add Logo"}
      </Button>
      {state?.error && (
        <div className="w-full">
          <FormError message={state.error} />
        </div>
      )}
    </form>
  );
}
