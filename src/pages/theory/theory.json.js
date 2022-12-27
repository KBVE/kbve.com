import { getCollection } from 'astro:content';
const posts = await getCollection('theory');
export const get = async () => {
  const json = JSON.stringify([...posts]);
  return {
    body: json
  }
}
