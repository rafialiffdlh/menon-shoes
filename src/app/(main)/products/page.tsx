"use client";
import { useState } from "react";
import { productsData } from "@/app/api/product/product";
import Navbar from "@/pages/navbar";
import Footer from "@/pages/footer";
import FilterSidebar from "@/pages/filterSidebar";
import Image from "next/image";

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 1000000]);
  const brands = Array.from(new Set(productsData.product.map((p) => p.brand)));
  const filteredProducts = productsData.product.filter((product) => {
    const price = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
    return (
      (!selectedBrand || product.brand === selectedBrand) &&
      price >= selectedPriceRange[0] &&
      price <= selectedPriceRange[1]
    );
  });

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-auto">
          <FilterSidebar
            brands={brands}
            selectedBrands={[selectedBrand ?? ""]}
            onBrandChange={(brand) => setSelectedBrand(brand)}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={(range) => setSelectedPriceRange(range)}
          />
        </div>
        <main className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="card card-compact bg-white shadow-lg"
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
                  <p className="text-xs">{product.price}</p>
                  <button className="btn btn-outline btn-xs flex items-center gap-1">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
