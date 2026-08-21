"use client";

import { useActionState } from "react";
import { Input, Label, FormError } from "@/components/admin/Field";
import { Button } from "@/components/ui/Button";
import { login } from "../actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <FormError message={state?.error} />
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="username" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
      </div>
      <Button type="submit" disabled={pending} className="w-full justify-center">
        {pending ? "Signing in…" : "Sign In"}
      </Button>
    </form>
  );
}
