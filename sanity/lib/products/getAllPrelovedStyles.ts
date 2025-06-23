import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllPrelovedStyles = async () => {
  const ALL_PRELOVED_STYLES = defineQuery(
    `*[_type == "product" && category->name == "prelovedStyles"] | order(_createdAt desc)`
  );

  try {
    const prelovedStyles = await sanityFetch({
      query: ALL_PRELOVED_STYLES,
    });
    return prelovedStyles.data || [];
  } catch (error) {
    console.error("Error fetching all preloved styles:", error);
    return [];
  }
};
