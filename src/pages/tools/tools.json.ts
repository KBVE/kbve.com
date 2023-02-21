import { getCollection } from "astro:content";
export async function get() {
	const tools = await getCollection("tools");
	return {
		body: JSON.stringify(tools),
	};
}
