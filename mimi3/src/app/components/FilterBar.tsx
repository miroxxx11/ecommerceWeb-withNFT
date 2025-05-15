"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import products from "data/products";
import { useTheme } from "../contexts/ThemeContext";

interface FilterBarProps {
  filters: {
    brands: string[];
    categories: string[];
    minPrice: string;
    maxPrice: string;
    sortBy: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      brands: string[];
      categories: string[];
      minPrice: string;
      maxPrice: string;
      sortBy: string;
    }>
  >;
  brands: string[];
  categories: string[];
}

const prices = products.map(product => product.price);
const minProductPrice = Math.min(...prices);
const maxProductPrice = Math.max(...prices);

export default function FilterBar({ filters, setFilters, brands, categories }: FilterBarProps) {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { theme } = useTheme();
  // Zaznaczanie lub odznaczanie marki/kategorii
  const toggleBrand = (brand: string) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand) ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand],
    }));
  };

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };
  //Price min/max
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      brands: [],
      categories: [],
      minPrice: "",
      maxPrice: "",
      sortBy: "default"
    });
  };

  const bgColor = theme === "light" ? "#FFF6D5" : "#CCC2C8";

  return (
    <aside className="w-64 p-4 shadow-md rounded-lg sticky top-0" style={{ backgroundColor: bgColor }}>
      <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>

      {/* Brands */}
      <div className="mb-4">
        <button
          className="flex items-center justify-between w-full text-sm font-medium mb-2 text-black"
          onClick={() => setIsBrandsOpen(!isBrandsOpen)}
        >
          <span className="block text-sm font-medium mb-2 text-black">Brands</span>
          {isBrandsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {isBrandsOpen && (
          <div className="space-y-1 max-h-40 overflow-y-auto rounded-md p-2 filter-scroll">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2 text-black">
                <input
                  type="checkbox"
                  checked={filters.brands?.includes(brand) || false}
                  onChange={() => toggleBrand(brand)}
                  className="w-4 h-4"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mb-4">
        <button
          className="flex items-center justify-between w-full text-sm font-medium mb-2 text-black"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        >
          <span className="block text-sm font-medium mb-2 text-black">Categories</span>
          {isCategoriesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {isCategoriesOpen && (
          <div className="space-y-1 max-h-40 overflow-y-auto rounded-md p-2 filter-scroll">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 text-black">
                <input
                  type="checkbox"
                  checked={filters.categories?.includes(category) || false}
                  onChange={() => toggleCategory(category)}
                  className="w-4 h-4"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Cena */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-black">Price</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handlePriceChange}
            placeholder={`${minProductPrice}`}
            className="w-1/2 p-2 border border-gray-300 rounded-md text-black"
          />
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            placeholder={`${maxProductPrice}`}
            className="w-1/2 p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-black">Sort by</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
          className="w-full p-2 rounded-md text-black focus:outline-none"
          style={{
            backgroundColor: theme === "light" ? "#FFF6D5" : "#CCC2C8",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        >
          <option value="default">Default</option>
          <option value="price-low">Price up</option>
          <option value="price-high">Price down</option>
        </select>
      </div>

      <button
        onClick={clearFilters}
        className="w-full text-black p-2 rounded-md hover:bg-gray-300 transition"
      >
        Reset filters
      </button>
    </aside>
  );
}
