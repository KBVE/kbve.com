import { getEntryBySlug } from 'astro:content';
export async function get() {
	const status = await getEntryBySlug('tools', 'status');
	return {
		body: JSON.stringify(status.data),
	};
}
