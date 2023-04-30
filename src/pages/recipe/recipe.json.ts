import { getCollection } from "astro:content";
export async function get() {
	const recipe = await getCollection("recipe");
	return {
		body: JSON.stringify(recipe),
	};
}
