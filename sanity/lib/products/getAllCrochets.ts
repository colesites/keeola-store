import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCrochets = async () => {
	const ALL_CROCHETS_QUERY = defineQuery(
		`*[_type == "product" && category->name == "crochets"] | order(_createdAt desc)`
	);

	try {
		const crochets = await sanityFetch({
			query: ALL_CROCHETS_QUERY,
		});
		return crochets.data || [];
	} catch (error) {
		console.error("Error fetching all crochets:", error);
		return [];
	}
};
