import React from "react";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
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
              className="w-full pl-4 pr-10 py-2 rounded-lg bg-green-600 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <MagnifyingGlassIcon className="absolute top-2 right-3 h-5 w-5 text-white" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          <UserIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>

      <div className="bg-green-800">
        <div className="container mx-auto flex justify-center space-x-6 py-2 text-sm">
          <link href="/" className="hover:text-yellow-400">
            Home
          </link>
          <link href="/shop" className="hover:text-yellow-400">
            Shop
          </link>
          <link href="/fruit" className="hover:text-yellow-400">
            Fruit
          </link>
          <link href="/vegetable" className="hover:text-yellow-400">
            Vegetable
          </link>
          <link href="/beverages" className="hover:text-yellow-400">
            Beverages
          </link>
          <link href="/about-us" className="hover:text-yellow-400">
            About Us
          </link>
        </div>
      </div>
    </nav>
  );
}
