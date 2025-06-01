import { ShoppingBag, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#C4A484] text-black">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Image src="/keeola-logo.png" alt="keeola logo" width={100} height={100} />
        {/* <div className="text-2xl font-bold tracking-widest">KEEOLA</div> */}

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium uppercase">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/crochet" className="hover:text-gray-300">
              Crochet
            </Link>
          </li>
          <li>
            <Link href="/fresh-arrivals" className="hover:text-gray-300">
              Fresh Arrivals
            </Link>
          </li>
          <li>
            <Link href="/preloved-styles" className="hover:text-gray-300">
              Preloved Styles
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
