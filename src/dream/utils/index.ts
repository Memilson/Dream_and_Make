export const fmtDate = (iso: string) => new Date(iso).toLocaleString();
export const rand = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const FALLBACK_BASE = 'https://dream.and.make';
const ALLOWED_HOSTS = new Set([
  'dream.and.make',
  'cdn.dreamandmake.com',
  'images.dreamandmake.com',
  'images.unsplash.com',
  'picsum.photos',
  'localhost',
  '127.0.0.1',
]);

export type TelemetryEvent = 'random_clicked' | 'carousel_next' | 'carousel_prev' | 'explore_load_more';

export const trackEvent = (name: TelemetryEvent, detail: Record<string, unknown> = {}) => {
  const payload = { name, detail, ts: Date.now() };
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('dream:telemetry', { detail: payload }));
  }
  const isProd = typeof process !== 'undefined' ? process.env.NODE_ENV === 'production' : false;
  if (typeof console !== 'undefined' && !isProd) {
    console.debug('[telemetry]', payload);
  }
};

export const getSafeImageUrl = (rawUrl: string | undefined | null, fallback = ''): string => {
  if (!rawUrl) {
    return fallback;
  }

  try {
    const base = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : FALLBACK_BASE;
    const url = new URL(rawUrl, base);
    const protocolAllowed = url.protocol === 'https:' || (url.protocol === 'http:' && ALLOWED_HOSTS.has(url.hostname));
    const hostAllowed = ALLOWED_HOSTS.has(url.hostname) || url.origin === base;
    if (protocolAllowed && hostAllowed) {
      return url.toString();
    }
  } catch (err) {
    const isProd = typeof process !== 'undefined' ? process.env.NODE_ENV === 'production' : false;
    if (!isProd && typeof console !== 'undefined') {
      console.warn('[image] invalid url blocked', rawUrl, err);
    }
  }

  return fallback;
};
