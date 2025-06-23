"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
  product: Product;
  disabled: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removeItem(product._id)}
        disabled={itemCount === 0 || disabled}
        className={`size-8 flex items-center justify-center transition-colors duration-200 rounded-full ${
          itemCount === 0
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <Minus />
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        onClick={() => addItem(product)}
        disabled={disabled}
        className={`size-8 flex items-center justify-center transition-colors duration-200 rounded-full ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-amber-900 hover:bg-amber-950"
        }`}
      >
        <Plus className="text-white" />
      </button>
    </div>
  );
}

export default AddToBasketButton;
