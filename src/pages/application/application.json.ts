import { getCollection } from "astro:content";
export async function get() {
	const application = await getCollection("application");
	return {
		body: JSON.stringify(application),
	};
}
