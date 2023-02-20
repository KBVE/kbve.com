import { getCollection } from "astro:content";
export async function get() {
	const security = await getCollection("security");
	return {
		body: JSON.stringify(security),
	};
}
