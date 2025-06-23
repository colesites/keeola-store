import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getMaleGender = async () => {
  const ALL_MALE_GENDER = defineQuery(
    `*[_type == "product" && category->name == "male"] | order(_createdAt desc)`
  );

  try {
    const male = await sanityFetch({
      query: ALL_MALE_GENDER,
    });
    return male.data || [];
  } catch (error) {
    console.error("Error fetching all male products:", error);
    return [];
  }
};
