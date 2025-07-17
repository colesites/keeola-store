import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  FacebookIcon,
  Instagram,
  Twitter,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-amber-950">
      <div className="flex flex-col gap-y-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-md font-medium tracking-wider">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dashboard/categories/crochets"
                  className="text-sm transition-colors text-amber-950 hover:text-amber-900"
                >
                  Crochets
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/categories/fresharrivals"
                  className="text-sm transition-colors text-amber-950 hover:text-amber-900"
                >
                  Fresh arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/categories/prelovedstyles"
                  className="text-sm transition-colors text-amber-950 hover:text-amber-900"
                >
                  Preloved styles
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-medium tracking-wider">Info</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-amber-950 hover:text-amber-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-amber-950 hover:text-amber-900 transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-sm text-amber-950 hover:text-amber-900 transition-colors"
                >
                  Shipping policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-medium tracking-wider">Our mission</h3>
            <p className="text-sm text-amber-950 leading-relaxed">
              Our mission is to provide you with the best possible shopping
              experience.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium tracking-wider mb-4">
            Subscribe to our emails
          </h3>
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <div className="relative space-y-3">
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-transparent h-14 w-80 rounded-none border-amber-950 text-amber-950 placeholder:text-amber-950 focus:border-amber-950"
                />
                <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-950" />
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5 text-amber-950" />
                  </Link>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-amber-950" />
                  </Link>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <YoutubeIcon className="w-5 h-5 text-amber-950" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@keeolaofficial"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <FaTiktok className="w-5 h-5 text-amber-950" />
                  </Link>
                  <Link
                    href="https://x.com/keeolaofficial"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <FaXTwitter className="w-5 h-5 text-amber-950" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-amber-950">
              &copy; {new Date().getFullYear()} Keeola Store. All rights
              reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <Image src='/icons/visa.png' alt="mastercard" width={40} height={20} />
              <Image src='/icons/mastercard.png' alt="mastercard" width={40} height={20} />
              <Image src='/icons/amex.png' alt="mastercard" width={40} height={20} />
              <Image src='/icons/paypal.png' alt="mastercard" width={40} height={20} />
              <Image src='/icons/dinersclub.png' alt="mastercard" width={40} height={20} />
              <Image src='/icons/discover.png' alt="mastercard" width={40} height={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
