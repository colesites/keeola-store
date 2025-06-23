"use client";

import { ClerkLoaded, SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  const { user } = useUser();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-sm text-black">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/keeola-logo.png"
          alt="keeola logo"
          width={100}
          height={100}
        />

        {/* Icons */}
        <div className="flex items-center space-x-6">
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
                className="cursor-pointer bg-amber-950 hover:bg-amber-900 h-9 px-4 py-2 has-[>svg]:px-3 flex items-center justify-center text-white rounded-md"
              />
            )}
          </ClerkLoaded>
        </div>
      </nav>
    </header>
  );
}
