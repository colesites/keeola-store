import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-4">
      <div className="bg-white p-8 shadow-md w-full max-w-4xl rounded-lg">
        <h1 className="text-3xl text-amber-950 font-bold mb-6 text-center">{
          slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
          }{" "} Category</h1>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  )
}

export default page