//?       [Legal] - Automated JSON with all our legal documents.
//*       [IMPORT]
import { getCollection } from "astro:content";
//*       [Functions]
//?       [f()]->get() - Returns all the legal documents from the collections and renders them into JSON.
export async function get() {
	const legal = await getCollection("legal");
	return {
		body: JSON.stringify(legal),
	};
}
