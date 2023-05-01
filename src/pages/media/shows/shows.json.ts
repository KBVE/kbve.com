import { getCollection } from "astro:content";
export async function get() {
	const shows = await getCollection("shows");
	return {
		body: JSON.stringify(shows),
	};
}
