import Image from "next/image";
import React from "react";

const Card = ({
  image,
  title,
  category,
  discount,
  price,
}: {
  image: string;
  title: string;
  category: string;
  discount: string;
  price: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded shadow">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          priority
          quality={100}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <h3 className="text-sm">{category}</h3>
        </div>

        <div className="flex flex-col items-end">
          <h2 className="text-lg font-semibold">{discount}</h2>
          <h3 className="text-sm line-through">{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
