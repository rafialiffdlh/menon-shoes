import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@radix-ui/react-slider";
import * as SliderPrimitive from "@radix-ui/react-slider";
interface FilterSidebarProps {
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;
  selectedPriceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FilterSidebar({
  brands = [],
  selectedBrands = [],
  onBrandChange,
  selectedPriceRange = [0, 100],
  onPriceRangeChange,
}: FilterSidebarProps) {
  return (
    <div className="p-4 w-full md:w-64 bg-white shadow-lg rounded-md">
      <h3 className="font-bold text-lg mb-4">Filter Options</h3>
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2">Brand</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => onBrandChange(brand)}
              />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2">Price Range</h4>
        <div className="flex flex-col space-y-2">
          <Slider
            className="relative flex items-center w-full h-4"
            value={selectedPriceRange}
            onValueChange={(value) =>
              onPriceRangeChange(value as [number, number])
            }
            min={33}
            max={10000000}
            step={1}
          >
            <SliderPrimitive.Track className="relative h-2 bg-gray-200 rounded-full grow">
              <SliderPrimitive.Range className="absolute h-full bg-black rounded-full" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              className="block w-4 h-4 bg-white border-2 border-black rounded-full shadow-md focus:outline-none"
              aria-label="Minimum Price"
            />
            <SliderPrimitive.Thumb
              className="block w-4 h-4 bg-white border-2 border-black rounded-full shadow-md focus:outline-none"
              aria-label="Maximum Price"
            />
          </Slider>
          <div className="flex justify-between text-xs">
            <span>Rp {selectedPriceRange[0].toLocaleString()}</span>
            <span>Rp {selectedPriceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
