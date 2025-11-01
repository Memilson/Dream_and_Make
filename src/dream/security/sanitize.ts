import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string) => DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
