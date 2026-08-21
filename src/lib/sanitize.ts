import "server-only";
import sanitizeHtml from "sanitize-html";

/**
 * Sanitizes admin-authored rich text before it's stored, so blog post body
 * HTML can safely be rendered on the public site via dangerouslySetInnerHTML.
 */
export function sanitizePostBody(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "s",
      "h2",
      "h3",
      "ul",
      "ol",
      "li",
      "a",
      "blockquote",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  });
}
