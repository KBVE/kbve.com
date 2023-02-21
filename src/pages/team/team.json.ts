import { getCollection } from "astro:content";
export async function get() {
	const team = await getCollection("team");
	return {
		body: JSON.stringify(team),
	};
}
