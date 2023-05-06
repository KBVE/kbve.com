import { getCollection } from "astro:content";
export async function get() {
	const video = await getCollection("video");
	return {
		body: JSON.stringify(video),
	};
}
