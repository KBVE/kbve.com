import { getCollection } from "astro:content";
export async function get() {
	const stock = await getCollection("stock");
	return {
		body: JSON.stringify(stock),
	};
}
