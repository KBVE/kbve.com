import { getCollection } from 'astro:content';

export async function get() {
  
  const blog = await getCollection('gaming');

  return {
    body: JSON.stringify( blog )
  };
}

/**
 * import { getCollection } from 'astro:content';

export async function get() {
  
  const blog = await getCollection('gaming');
  const mMap = blog.map(async (post) => {
    return ({
      render: (await post.render()),
      data: post.data,
    });
  }
  );

  return {
    body: JSON.stringify({ mMap })
  };
}
 */