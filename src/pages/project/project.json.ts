import { getCollection } from "astro:content";
export async function get() {
	const project = await getCollection("project");
	return {
		body: JSON.stringify(project),
	};
}
