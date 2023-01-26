import { getCollection } from "astro:content";
export async function get() {
	const journal = await getCollection("journal");
	return {
		body: JSON.stringify(journal),
	};
}
