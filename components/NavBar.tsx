"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClerkLoaded, SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight, Menu, Search, ShoppingCart, User } from "lucide-react";
import Form from "next/form.js";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function NavBar() {
  const { user } = useUser();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false); // optional: close search after submit
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-sm text-black">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <Image
              src="/keeola-logo.png"
              alt="keeola logo"
              width={100}
              height={100}
            />
          </Link>
          <NavigationMenu className="text-amber-950 text-lg hover:text-amber-900">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-lg font-normal">
                  SHOP
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background/50 text-amber-950 hover:text-amber-900">
                  <NavigationMenuLink href="/dashboard/categories/kids">
                    Kids
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/dashboard/categories/male">
                    Men
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/dashboard/categories/female">
                    Women
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/dashboard/categories/crochets">
                    Crochets
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/dashboard/categories/fresharrivals">
                    Fresh Arrivals
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/dashboard/categories/prelovedstyles">
                    Preloved Styles
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/about"
            className="text-amber-950 text-lg hover:text-amber-900"
          >
            ABOUT
          </Link>
          <Link
            href="#faq"
            className="text-amber-950 text-lg hover:text-amber-900"
          >
            FAQ
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="pt-20 text-lg">
                <SheetTitle hidden>Menu</SheetTitle>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full flex justify-between items-center pb-4 border-b border-amber-950"
                >
                  <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger className="text-lg font-normal pb-0 cursor-pointer">Shop</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-y-4 mt-4 pl-2">
                      <Link href="/dashboard/categories/kids">Kids</Link>
                      <Link href="/dashboard/categories/male">Men</Link>
                      <Link href="/dashboard/categories/female">Women</Link>
                      <Link href="/dashboard/categories/crochets">
                        Crochets
                      </Link>
                      <Link href="/dashboard/categories/fresharrivals">
                        Fresh Arrivals
                      </Link>
                      <Link href="/dashboard/categories/prelovedstyles">
                        Preloved Styles
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/about" className="pb-4 border-b border-amber-950">
                  About
                </Link>
                <Link href="#faq">FAQ</Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="md:hidden">
          <Image
            src="/keeola-logo.png"
            alt="keeola logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <ClerkLoaded>
            {user ? (
              <Link href="/dashboard">
                <Button className="bg-amber-950 hover:bg-amber-900">
                  Go to dashboard
                </Button>
              </Link>
            ) : (
              <SignInButton
                mode="modal"
                className="text-amber-950 hover:text-amber-900 cursor-pointer"
              >
                <div>
                  <User />
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>

          {/* Search Icon + Input */}
          <div className="relative flex items-center space-x-2">
            <Search
              className="size-6 text-amber-950 hover:text-amber-900 cursor-pointer"
              onClick={() => setSearchOpen((prev) => !prev)}
            />
            {searchOpen && (
              <Form action="/dashboard/search" className="transition-all">
                <Input
                  type="text"
                  name="query"
                  placeholder="Search"
                  className="border border-amber-950 px-2 py-1 rounded-md text-sm focus:outline-none"
                />
              </Form>
            )}
          </div>

          <Link href="/dashboard/basket">
            <ShoppingCart className="size-6 text-amber-950 hover:text-amber-900 cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
