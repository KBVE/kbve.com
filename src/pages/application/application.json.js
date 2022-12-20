import { getCollection } from 'astro:content';
const posts = await getCollection('application');
export const get = async () => {
  const json = JSON.stringify(
    posts.map((p) => {
      return {
        id: p.data.id,
        title: p.data.title,
        description: p.data.description,
        slug: `https://kbve.com/application/${p.slug}/`,
        tag: p.data.tags,
        tags: p.data.tags,
        img: p.data.img,
        category: p.data.category,
      };
    })
  );
  return {
    body: json
  }
}
