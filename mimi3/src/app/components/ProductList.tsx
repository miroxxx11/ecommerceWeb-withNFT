"use client";

import ProductCard from "../components/ProductCard";
import type { Product } from "types";

interface ProductListProps {
  filters: {
    brands: string[];
    categories: string[];
    minPrice: string;
    maxPrice: string;
    sortBy: string;
  };
  products: Product[];
}
// Filtrowanie
export default function ProductList({ filters, products }: ProductListProps) {

  const filteredProducts = products.filter((product) => {

    return (
      (filters.brands.length === 0 || filters.brands.includes(product.brand)) &&
      (filters.categories.length === 0 || filters.categories.includes(product.category)) &&
      (!filters.minPrice || product.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || product.price <= Number(filters.maxPrice))
    );
  });
  // Sortowanie
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === "price-low") return a.price - b.price;
    if (filters.sortBy === "price-high") return b.price - a.price;
    return 0;
  });
  return (
    <> {sortedProducts.length > 0 ? (
      sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => console.log(product.name)} />
      ))
    ) : (
      <p className="text-center text-gray-500 mt-12 italic">No products found</p>
    )}
    </>
  );
}
