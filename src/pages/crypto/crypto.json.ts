import { getCollection } from "astro:content";
export async function get() {
	const crypto = await getCollection("crypto");
	return {
		body: JSON.stringify(crypto),
	};
}
