"use client";

import { Metadata } from "@/actions/createCheckoutSession";
import AddToBasketButton from "@/components/AddToBasketButton";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrl";
import useBasketStore from "@/store/store";
import { SignedIn, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function page() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-6 text-amber-950">Your Basket</h1>
        <p className="text-amber-800 text-lg">Your basket is empty.</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!SignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: groupedItems, metadata }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from API");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4 text-amber-950">Your Basket</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupedItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border border-amber-700/50 rounded flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0"
                onClick={() =>
                  router.push(
                    `/dashboard/product/${item.product.slug?.current}`
                  )
                }
              >
                <div className="size-20 sm:size-24 flex-shrink-0 mr-4">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product image"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg text-amber-950 sm:text-xl font-semibold truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-lg font-semibold text-amber-950">
                    Price: £
                    {(
                      (item.product.discountedUkPrice ?? 0) * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center ml-4 flex-shrink-0">
                  <AddToBasketButton
                    product={item.product}
                    disabled={item.quantity === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit p-6 bg-background border border-amber-700/50 rounded order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
          <h3 className="text-xl font-semibold text-amber-950">
            Order Summary
          </h3>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Items:</span>
              <span>
                {groupedItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Total:</span>
              <span>
                £{useBasketStore.getState().getTotalPrice("£").toFixed(2)}
              </span>
            </p>
          </div>

          {isSignedIn && (
            <Button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full mt-4 bg-amber-950 hover:bg-amber-900"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </Button>
          )}
        </div>

        <div className="h-64 lg:h-0"></div>
      </div>
    </div>
  );
}

export default page;
