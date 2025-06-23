import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllFreshArrivals = async () => {
  const ALL_FRESH_ARRIVALS = defineQuery(
    `*[_type == "product" && category->name == "freshArrivals"] | order(_createdAt desc)`
  );

  try {
    const freshArrivals = await sanityFetch({
      query: ALL_FRESH_ARRIVALS,
    });
    return freshArrivals.data || [];
  } catch (error) {
    console.error("Error fetching all fresh arrivals:", error);
    return [];
  }
};
