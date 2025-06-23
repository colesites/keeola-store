"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useBasketStore from "@/store/store";
import { CheckIcon } from "lucide-react";

const page = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-12 shadow-lg w-full max-w-2xl mx-4 rounded-xl">
        <div className="flex justify-center mb-8">
          <div className="size-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center">
          Thank you for your order!
        </h1>

        <div className="border-t border-b border-amber-900 py-6 mb-6">
          <p className="text-amber-900 text-center text-lg mb-4">
            Your order has been confirmed and will be shipped shortly
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="text-amber-900 flex justify-center items-center space-x-5">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-green-600">
                  {orderNumber}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-amber-900 text-center">
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/dashboard/orders">View Order Details</Link>
            </Button>
            <Button
              asChild
              variant="outline"
            >
              <Link href="/dashboard">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
