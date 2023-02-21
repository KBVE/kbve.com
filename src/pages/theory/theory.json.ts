import { getCollection } from "astro:content";
export async function get() {
	const theory = await getCollection("theory");
	return {
		body: JSON.stringify(theory),
	};
}
