import { getCollection } from "astro:content";
export async function get() {
	const media = await getCollection("media");
	return {
		body: JSON.stringify(media),
	};
}
