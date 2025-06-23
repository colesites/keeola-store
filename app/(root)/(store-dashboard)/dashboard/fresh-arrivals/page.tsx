import React from "react";
import { brandNewClothes } from "@/data/brand-new-clothes";
import ClothesCard from "@/components/ClothesCard";
import Card from "@/components/Card";

const page = () => {
  return (
    <section className="px-8 pt-32 pb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brandNewClothes.map((item) => (
          <div key={item.id}>
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
