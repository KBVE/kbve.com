import { getCollection } from "astro:content";
export async function get() {
	const podcast = await getCollection("podcast");
	return {
		body: JSON.stringify(podcast),
	};
}
