import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

const fieldClass =
  "w-full rounded-lg border border-brand-line px-3.5 py-2.5 text-sm text-brand-ink transition-colors focus:border-brand-red focus:outline-none";

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-brand-ink">
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={clsx(fieldClass, props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={clsx(fieldClass, props.className)} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={clsx(fieldClass, "bg-white", props.className)} />;
}

const fileFieldClass =
  "block w-full cursor-pointer text-sm text-brand-gray file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-brand-paper file:px-3.5 file:py-2 file:text-sm file:font-semibold file:text-brand-ink hover:file:bg-brand-line";

export function FileInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="file" {...props} className={clsx(fileFieldClass, props.className)} />;
}

export function FormError({ message }: { message?: string | null }) {
  if (!message) return null;
  return (
    <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
      {message}
    </p>
  );
}
