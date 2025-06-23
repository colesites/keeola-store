"use client";

import React from "react";
import ClothesCard from "./ClothesCard";

const HomeClothes = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <ClothesCard
        title="Floral White Dress"
        subtitle="FRESH ARRIVALS"
        imageUrl="/fresh-arrivals/floral-white-dress.jpg"
        price={149}
        originalPrice={169}
        showOptions={true}
        link="/dashboard/categories/fresharrivals"
        viewOrBuy="SEE ALL"
      />
      <ClothesCard
        title="Blue Dress"
        subtitle="PRELOVED STYLES"
        imageUrl="/preloved-styles/blue-dress.jpg"
        price={89}
        originalPrice={99}
        showOptions={true}
        link="/preloved-styles"
        viewOrBuy="SEE ALL"
      />
    </div>
  );
};

export default HomeClothes;
