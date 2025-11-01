import { z } from 'zod';

export interface Image { id: number; author: string; image_url: string; image_name?: string; title?: string; created_at: string; }
export interface Comment { id: number; image_id: number; name: string; text: string; created_at: string; }
export interface Musica { id: number; title: string; author?: string; file_url: string; created_at: string; }

export const ImageSchema = z.object({
	id: z.number(),
	author: z.string(),
	image_url: z.string().url(),
	image_name: z.string().optional(),
	title: z.string().optional(),
	created_at: z.string(),
});

export const CommentSchema = z.object({
	id: z.number(),
	image_id: z.number(),
	name: z.string(),
	text: z.string(),
	created_at: z.string(),
});

export const MusicaSchema = z.object({
	id: z.number(),
	title: z.string(),
	author: z.string().optional(),
	file_url: z.string().url(),
	created_at: z.string(),
});

export type ImageByAuthorMap = Record<string, Image[]>;
export const ImageByAuthorMapSchema = z.record(z.string(), z.array(ImageSchema));
