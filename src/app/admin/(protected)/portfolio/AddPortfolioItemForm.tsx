"use client";

import { useActionState, useRef } from "react";
import { Input, Select, Label, FormError, FileInput } from "@/components/admin/Field";
import { Button } from "@/components/ui/Button";
import { addPortfolioItem } from "./actions";
import type { PortfolioCategory } from "@/data/portfolio";

export function AddPortfolioItemForm({
  categories,
  defaultCategory,
}: {
  categories: PortfolioCategory[];
  defaultCategory?: string;
}) {
  const [state, formAction, pending] = useActionState(addPortfolioItem, undefined);
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
      <div className="min-w-56">
        <Label htmlFor="categorySlug">Category</Label>
        <Select id="categorySlug" name="categorySlug" required defaultValue={defaultCategory ?? ""}>
          <option value="" disabled>
            Choose a category
          </option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </Select>
      </div>
      <div className="min-w-56 flex-1">
        <Label htmlFor="alt">Description (alt text)</Label>
        <Input id="alt" name="alt" required placeholder="e.g. Bridal necklace set campaign" />
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        <FileInput id="image" name="image" accept="image/webp,image/png,image/jpeg" required />
      </div>
      <Button type="submit" disabled={pending} size="sm">
        {pending ? "Adding…" : "Add Item"}
      </Button>
      {state?.error && (
        <div className="w-full">
          <FormError message={state.error} />
        </div>
      )}
    </form>
  );
}
