import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getFemaleGender = async () => {
  const ALL_FEMALE_GENDER = defineQuery(
    `*[_type == "product" && category->name == "female"] | order(_createdAt desc)`
  );

  try {
    const female = await sanityFetch({
      query: ALL_FEMALE_GENDER,
    });
    return female.data || [];
  } catch (error) {
    console.error("Error fetching all female products:", error);
    return [];
  }
};
