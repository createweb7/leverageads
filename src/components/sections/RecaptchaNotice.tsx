export function RecaptchaNotice() {
  return (
    <p className="text-xs text-brand-gray-2">
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-brand-red"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-brand-red"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
