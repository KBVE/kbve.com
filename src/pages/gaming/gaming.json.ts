import { getCollection } from "astro:content";
export async function get() {
	const gaming = await getCollection("gaming");
	return {
		body: JSON.stringify(gaming),
	};
}
