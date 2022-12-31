import { getCollection } from 'astro:content';
const posts = await  getCollection('website', ({ id }) => {
    // Return all entries in `src/content/docs/en/`
    return id.startsWith('footer/');
  });
export const get = async () => {
  const json = JSON.stringify([...posts]);
  return {
    body: json
  }
}
