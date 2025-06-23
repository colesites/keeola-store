import Card from "@/components/Card";
import React from "react";
import { crochets } from "@/data/crochet";

const page = () => {
  return (
    <section className="px-8 pt-32 pb-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {crochets.map((item) => (
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
    </section>
  );
};

export default page;
