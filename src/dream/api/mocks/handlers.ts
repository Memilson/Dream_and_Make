import { http, HttpResponse } from 'msw';

const seedImages = [
  { id: 1, author: 'Ana', image_url: 'https://picsum.photos/id/1018/1000/600', image_name: 'Montanha', created_at: new Date().toISOString() },
  { id: 2, author: 'Bruno', image_url: 'https://picsum.photos/id/1025/1000/600', image_name: 'Cão', created_at: new Date().toISOString() },
  { id: 3, author: 'Clara', image_url: 'https://picsum.photos/id/1035/1000/600', image_name: 'Cidade', created_at: new Date().toISOString() },
];

const authorPool = ['Ana','Bruno','Clara','Diego','Eva','Felipe','Gabi','Hiro','Isabel','João','Kai','Lia','Maya','Nico','Olivia','Paulo','Quinn','Rafa','Sora','Téo'];

function makeImage(id: number) {
  const picsumId = 100 + (id % 900);
  const author = authorPool[id % authorPool.length];
  const titles = ['Horizonte','Luz','Texturas','Mar','Cidade','Retrato','Campo','Noite','Aurora','Sombra'];
  const image_name = titles[id % titles.length];
  return {
    id,
    author,
    image_url: `https://picsum.photos/id/${picsumId}/${800 + (id % 3) * 80}/${600 + (id % 3) * 60}`,
    image_name,
    created_at: new Date().toISOString(),
  };
}

const comments: Record<number, Array<{ id: number; image_id: number; name: string; text: string; created_at: string }>> = {
  1: [], 2: [], 3: []
};

export const handlers = [
  http.get('/images', ({ request }) => {
    const url = new URL(request.url);
    if (url.searchParams.get('random') === '1') {
      const one = seedImages[Math.floor(Math.random() * seedImages.length)];
      return HttpResponse.json([one]);
    }

    // Lucky set: return N random images with distinct authors (up to pool size)
    const luck = url.searchParams.get('luck');
    if (luck) {
      const n = Math.max(1, Math.min(Number(luck) || 6, authorPool.length));
      const shuffled = [...authorPool].sort(() => Math.random() - 0.5).slice(0, n);
      const list = shuffled.map((name, idx) => makeImage(10000 + idx));
      // Replace generated authors to match chosen names
      list.forEach((it, i) => (it.author = shuffled[i]));
      return HttpResponse.json(list);
    }

    if (url.searchParams.get('groupBy') === 'author') {
      const groups: Record<string, typeof seedImages> = {} as any;
      for (const img of seedImages) {
        (groups[img.author] ||= []).push(img);
      }
      return HttpResponse.json(groups);
    }

    // Pagination for infinite scroll
    const page = Number(url.searchParams.get('page') || '0');
    const limit = Math.max(1, Math.min(Number(url.searchParams.get('limit') || '20'), 60));
    if (page > 0) {
      const startId = page * 1000;
      const items = Array.from({ length: limit }, (_, i) => makeImage(startId + i));
      return HttpResponse.json(items);
    }

    // Default: seed set
    return HttpResponse.json(seedImages);
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
