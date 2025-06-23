import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-amber-950">
      <div className="h-[20rem] flex flex-col items-center justify-center">
        <TextHoverEffect text="KEEOLA" />
        {/* Copyright */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Keeola Store. All rights reserved.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        {/* Socials */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-black" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/categories/crochets" className="hover:underline">
                Crochet
              </Link>
            </li>
            <li>
              <Link href="/dashboard/categories/fresharrivals" className="hover:underline">
                Fresh Arrivals
              </Link>
            </li>
            <li>
              <Link href="/dashboard/categories/prelovedstyles" className="hover:underline">
                Preloved Styles
              </Link>
            </li>
          </ul>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
