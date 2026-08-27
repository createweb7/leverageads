import "server-only";

const MIN_SCORE = 0.5;

/**
 * Verifies a reCAPTCHA v3 token with Google. Returns `{ success: true }`
 * (no-op pass) when RECAPTCHA_SECRET_KEY isn't configured yet, so the
 * enquiry form keeps working before reCAPTCHA is fully set up.
 */
export async function verifyRecaptcha(token: string | null | undefined) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { success: true };
  if (!token) return { success: false };

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success: boolean; score?: number };

    if (!data.success) return { success: false };
    if (typeof data.score === "number" && data.score < MIN_SCORE) return { success: false };
    return { success: true };
  } catch (err) {
    console.error("reCAPTCHA verification request failed:", err);
    // Fail open on our own network/API errors — don't block real users
    // because of a transient issue reaching Google.
    return { success: true };
  }
}
