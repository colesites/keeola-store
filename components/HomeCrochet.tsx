import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Card from "./Card";
import { crochetProducts } from "@/data/products";

const HomeCrochet = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <section>
        <p className="text-sm tracking-widest uppercase">Handmade Beauty</p>
        <h1 className="text-4xl font-serif font-bold mb-6">Crochets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {crochetProducts.map((item) => (
            <div key={item.id}>
              <Card
                image={item.image}
                title={item.title}
                category={item.category}
                discount={item.discount}
                price={item.price}
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/dashboard/categories/crochets">
            <Button variant="ecommerce">See All Products</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeCrochet;
