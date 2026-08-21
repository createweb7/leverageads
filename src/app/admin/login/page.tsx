import type { Metadata } from "next";
import Image from "next/image";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-paper px-5">
      <div className="w-full max-w-sm rounded-2xl border border-brand-line bg-white p-8 shadow-brand-sm">
        <Image src="/brand/logo.png" alt="LeverageAds" width={220} height={64} className="h-10 w-auto" />
        <h1 className="mt-6 font-display text-xl font-bold text-brand-ink">Admin Login</h1>
        <p className="mt-1.5 text-sm text-brand-gray">Sign in to manage site content.</p>
        <LoginForm />
      </div>
    </div>
  );
}
