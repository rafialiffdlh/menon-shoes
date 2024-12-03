import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="bg-gray-100 rounded-lg p-8 flex justify-between items-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-600">Deal of the Week</p>
        <h1 className="text-3xl font-bold text-gray-800">
          Curved Collection for Your Bedroom
          <br />
          Get 25% Off
        </h1>
        <p className="text-sm text-gray-600">
          Subscribe our Newsletter and get all latest information and offers
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-lg">
          Shop Now
        </button>
      </div>
      <div>
        <Image
          src="/image/menon.png"
          width={500}
          height={500}
          alt="Decorative items"
          className=""
        />
      </div>
    </div>
  );
}
