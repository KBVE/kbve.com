import { GetStaticPaths } from "astro";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths = (async () => {
  const data = await getCollection("crypto");
  return data.map((entry) => ({
    params: {
      id: entry.slug,
    },
    props: {
      entry,
    },
  }));
}) satisfies GetStaticPaths;

export function get({ props }: APIContext) {
  return {
    body: JSON.stringify({ entry: props.entry }),
  };
}
