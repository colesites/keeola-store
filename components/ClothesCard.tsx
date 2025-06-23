"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Lock, Package, Star, Truck } from "lucide-react";
import Link from "next/link";

type ClothesCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  price: number | string;
  originalPrice?: number | string;
  showOptions?: boolean;
  link: string;
  viewOrBuy: string;
};

const ClothesCard = ({
  title,
  subtitle,
  imageUrl,
  price,
  originalPrice,
  showOptions = true,
  link,
  viewOrBuy
}: ClothesCardProps) => {
  const sizes = ["L", "S", "XS"];
  const colors = ["Floral", "Beige", "Black"];

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-row relative w-full justify-center">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="w-[600px] px-5 py-10">
        <div className="flex justify-between items-center mb-5">
          <h2>{subtitle}</h2>
          <Link href={link}>
            <Button variant="ecommerce">{viewOrBuy}</Button>
          </Link>
        </div>
        <hr className="border-black" />
        <div className="mt-10">
          <h2 className="md:text-lg lg:text-xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center gap-2">
            <h2 className="md:text-lg lg:text-4xl font-semibold">£{price}</h2>
            {originalPrice && (
              <h3 className="line-through">£{originalPrice}</h3>
            )}
          </div>

          {showOptions && (
            <>
              <div className="flex items-center mt-5 space-x-1 text-yellow-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="text-sm text-gray-600 ml-2">(12)</span>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-1">Size</h3>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-4 py-2 rounded ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-1">Color</h3>
                <div className="flex space-x-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`border px-4 py-2 rounded ${
                        selectedColor === color
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 mb-10 flex items-center space-x-4">
                <button
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                  onClick={decrement}
                >
                  −
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <hr className="border-black" />
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-black">
                <div className="flex items-center gap-2">
                  <Lock size={16} />
                  <span>Safe Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={16} />
                  <span>Delivery in 2–5 days</span>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 mt-6">
                <Button className="rounded-none bg-black hover:bg-black/80" size="lg">ADD TO CHART</Button>
                <Button className="rounded-none bg-transparent border border-black text-black hover:bg-transparent hover:border-amber-950 hover:text-amber-950" size="lg">BUY NOW</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothesCard;
