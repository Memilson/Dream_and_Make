export interface Image { id: number; author: string; image_url: string; image_name?: string; title?: string; created_at: string; }
export interface Comment { id: number; image_id: number; name: string; text: string; created_at: string; }
export interface Musica { id: number; title: string; author?: string; file_url: string; created_at: string; }
