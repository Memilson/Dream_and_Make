import { http, HttpResponse } from 'msw';

const images = [
  { id: 1, author: 'Ana', image_url: 'https://picsum.photos/id/1018/1000/600', image_name: 'Montanha', created_at: new Date().toISOString() },
  { id: 2, author: 'Bruno', image_url: 'https://picsum.photos/id/1025/1000/600', image_name: 'Cão', created_at: new Date().toISOString() },
  { id: 3, author: 'Clara', image_url: 'https://picsum.photos/id/1035/1000/600', image_name: 'Cidade', created_at: new Date().toISOString() },
];

const comments: Record<number, Array<{ id: number; image_id: number; name: string; text: string; created_at: string }>> = {
  1: [], 2: [], 3: []
};

export const handlers = [
  http.get('/images', ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.get('random') === '1') {
      const one = images[Math.floor(Math.random() * images.length)];
      return HttpResponse.json([one]);
    }
    if (url.searchParams.get('groupBy') === 'author') {
      const groups: Record<string, typeof images> = {} as any;
      for (const img of images) {
        (groups[img.author] ||= []).push(img);
      }
      return HttpResponse.json(groups);
    }
    return HttpResponse.json(images);
  }),

  http.get('/comments', ({ request }) => {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('image_id'));
    return HttpResponse.json(comments[id] || []);
  }),

  http.post('/comments', async ({ request }) => {
    const body = await request.json();
    const { image_id, name, text } = body as any;
    const list = (comments[image_id] ||= []);
    const item = { id: Date.now(), image_id, name, text, created_at: new Date().toISOString() };
    list.unshift(item);
    return HttpResponse.json(item, { status: 201 });
  }),

  http.get('/musica', () => {
    return HttpResponse.json({});
  }),
];
