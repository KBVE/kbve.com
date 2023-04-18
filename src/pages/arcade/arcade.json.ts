import { getCollection } from "astro:content";
export async function get() {
	const arcade = await getCollection("arcade");
	return {
		body: JSON.stringify(arcade),
	};
}
