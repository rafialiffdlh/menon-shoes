import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FilterSidebarProps {
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;
  selectedPriceOrder: string;
  onPriceOrderChange: (order: string) => void;
}

export default function FilterSidebar({
  brands = [], // Default value
  selectedBrands = [],
  onBrandChange,
  selectedPriceOrder = "low-high", // Default value
  onPriceOrderChange,
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
        <h4 className="text-sm font-semibold mb-2">Sort by Price</h4>
        <Select value={selectedPriceOrder} onValueChange={onPriceOrderChange}>
          <SelectTrigger className="w-full text-sm">
            <span>
              {selectedPriceOrder === "low-high"
                ? "Low to High"
                : "High to Low"}
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-high">Low to High</SelectItem>
            <SelectItem value="high-low">High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
