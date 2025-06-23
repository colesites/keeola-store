"use client";

import { PortableText } from "next-sanity";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { useEffect, useState } from "react";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import AddToBasketButton from "./AddToBasketButton";

export default function ProductDetails({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${
          isOutOfStock ? "opacity-50" : ""
        }`}
      >
        {product.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name ?? "Product Image"}
            fill
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-amber-950 mb-4">
            {product.name}
          </h1>
          <div className="flex text-amber-950 gap-2">
            <p className="text-2xl font-bold">
              £ {product.discountedUkPrice?.toFixed(2)}
            </p>
            <p className="line-through">
              £ {product.ukPrice?.toFixed(2)}
            </p>
          </div>
          <div className="prose max-w-none mb-6">
            {Array.isArray(product.description) && (
              <PortableText value={product.description} />
            )}
          </div>
          <div className="mt-6">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
            <Button className="bg-amber-950 hover:bg-amber-900">
              Add to basket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
