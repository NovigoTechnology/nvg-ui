import DOMPurify from 'dompurify';

/**
 * Sanitizes backend-provided HTML (e.g. search_link description fields)
 * before it is rendered with v-html, stripping scripts, event handlers
 * and other XSS vectors while preserving legitimate markup.
 */
export function sanitizeHtml(dirty) {
  return DOMPurify.sanitize(dirty ?? '');
}
