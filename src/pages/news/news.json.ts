import { getCollection } from "astro:content";
export async function get() {
	const news = await getCollection("news");
	return {
		body: JSON.stringify(news),
	};
}
