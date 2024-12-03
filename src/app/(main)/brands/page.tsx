import React from "react";
import { productsData } from "@/app/api/product/product";
import Navbar from "@/pages/navbar";
import Footer from "@/pages/footer";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Page() {
  const products = productsData.product;

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 w-full sm:w-auto shadow-xl"
          >
            <figure>
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={500}
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm">{product.brand}</h2>
              <h5 className="card-title text-base">{product.title}</h5>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{product.price}</p>
                <button className="btn btn-outline btn-sm flex items-center gap-1">
                  <AiOutlineShoppingCart className="text-base" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
