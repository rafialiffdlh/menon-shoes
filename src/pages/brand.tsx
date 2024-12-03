import React from "react";
import { brandsData } from "@/app/api/brands/brands";
import Image from "next/image";
export default function Brand() {
  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-semibold">
        Brand <span className="text-green-600"></span>
      </h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        {brandsData.allBrand.map((brand, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src={brand.image}
                alt={brand.title}
                width={230}
                height={230}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold">{brand.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
