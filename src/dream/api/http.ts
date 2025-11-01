import { z } from 'zod';

export class HttpError extends Error {
  status: number;
  data?: unknown;
  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

const API_BASE = import.meta.env.VITE_API_BASE || '';

export async function http<T>(path: string, init?: RequestInit, schema?: z.ZodType<T>): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      ...(init?.headers || {}),
    },
    credentials: 'include',
    ...init,
  });

  const isJson = res.headers.get('content-type')?.includes('application/json');
  const data = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    throw new HttpError(`HTTP ${res.status}`, res.status, data);
  }

  const parsed = schema ? schema.parse(data) : data;
  return parsed as T;
}

export const get = <T>(path: string, schema?: z.ZodType<T>) => http<T>(path, { method: 'GET' }, schema);
export const post = <T>(path: string, body: BodyInit | null, headers?: HeadersInit, schema?: z.ZodType<T>) =>
  http<T>(path, { method: 'POST', body, headers }, schema);
