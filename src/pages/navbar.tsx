import React from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#CBF1F5] text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/image/menon.png"
            alt="Logo"
            width={230}
            height={220}
            className=""
          />
        </div>

        <div className="flex flex-1 mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2 rounded-lg bg-[#A6E3E9] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-bg-[#08D9D6]"
            />
            <MagnifyingGlassIcon className="absolute top-2 right-3 h-5 w-5 text-white" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          <UserIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>

      <div className="bg-[#A6E3E9]">
        <div className="container mx-auto flex justify-center space-x-6 py-2 text-sm">
          <Link href="/" className="hover:text-[#08D9D6]">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#08D9D6]">
            About
          </Link>
          <Link href="/fruit" className="hover:text-[#08D9D6]">
            Products
          </Link>
          <Link href="/vegetable" className="hover:text-[#08D9D6]">
            Categories
          </Link>
          <Link href="/beverages" className="hover:text-[#08D9D6]">
            Stores
          </Link>
          <Link href="/about-us" className="hover:text-[#08D9D6]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
