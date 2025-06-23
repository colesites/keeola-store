"use client";

import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { PackageIcon, ShoppingCart } from "lucide-react";
import Form from "next/form.js";
import { Button } from "./ui/button";
import Link from "next/link";
import useBasketStore from "@/store/store";
import Image from "next/image";

const DashboardHeader = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="relative w-full h-auto flex flex-col gap-y-2 sm:flex-row justify-between items-center px-2 lg:px-20 py-4 border-b border-b-amber-700/50">
      <Link href="/dashboard">
        <Image
          src="/keeola-logo.png"
          alt="keeola logo"
          width={100}
          height={100}
        />
      </Link>

      <div>
        <Form action="/dashboard/search">
          <Input
            type="text"
            name="query"
            placeholder="Search"
            className="w-60"
          />
        </Form>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/dashboard/basket" className="relative">
          <Button className="bg-amber-950 hover:bg-amber-900">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
            <span>My Basket</span>
          </Button>
        </Link>

        <ClerkLoaded>
          {user && (
            <>
              <Link href="/dashboard/orders">
                <Button className="bg-amber-950 hover:bg-amber-900">
                  <PackageIcon />
                  <span>My Orders</span>
                </Button>
              </Link>

              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p>Welcome back</p>
                  <p>{user.fullName}!</p>
                </div>
              </div>
            </>
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default DashboardHeader;
