import { createClient } from 'pexels';

async function searchPexels({ query }: { query: string }) {
  const pexelskey = await process.env.PEXELS_API_KEY_DEV;
  const client = pexelskey ? createClient(pexelskey) : null;

  return client?.photos.search({ query, per_page: 2 })
}

export default searchPexels;