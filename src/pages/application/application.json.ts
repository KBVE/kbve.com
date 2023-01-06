import { getCollection } from "astro:content";
export async function get() {
	const blog = await getCollection("application");
	return {
		body: JSON.stringify(blog),
	};
}
