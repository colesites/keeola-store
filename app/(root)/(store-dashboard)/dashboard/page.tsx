import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import React from "react";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Dashboard() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="p-4">
      <ProductsView products={products} categories={categories} />
    </div>
  );
}
