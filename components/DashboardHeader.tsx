"use client";

import { ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Menu, PackageIcon, ShoppingCart } from "lucide-react";
import Form from "next/form.js";
import { Button } from "./ui/button";
import Link from "next/link";
import useBasketStore from "@/store/store";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const DashboardHeader = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="relative w-full h-auto flex gap-y-2 justify-between items-center px-2 lg:px-20 py-4 border-b border-b-amber-700/50">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="pt-20 text-lg">
              <SheetTitle hidden>Menu</SheetTitle>
              <Link href="/dashboard" className="mb-5">
                <Image
                  src="/keeola-logo.png"
                  alt="keeola logo"
                  width={100}
                  height={100}
                />
              </Link>

              <div className="flex items-center gap-2">
                <Link href="/dashboard/basket" className="relative w-full">
                  <Button className="bg-amber-950 hover:bg-amber-900 w-full">
                    <ShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                    <span>My Basket</span>
                  </Button>
                </Link>
              </div>

              <ClerkLoaded>
                {user && (
                  <Link href="/dashboard/orders" className="w-full">
                    <Button className="bg-amber-950 hover:bg-amber-900 w-full">
                      <PackageIcon />
                      <span>My Orders</span>
                    </Button>
                  </Link>
                )}
              </ClerkLoaded>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/dashboard" className="max-md:hidden">
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

      <div className="hidden md:flex items-center gap-2">
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

      <ClerkLoaded>
        {user && (
          <div className="flex md:hidden items-center space-x-2">
            <UserButton />
            <div className="hidden sm:block text-xs">
              <p>Welcome back</p>
              <p>{user.fullName}!</p>
            </div>
          </div>
        )}
      </ClerkLoaded>
    </header>
  );
};

export default DashboardHeader;
