"use client"

import { useState } from "react"
import ProductList from "../components/ProductList"
import FilterBar from "../components/FilterBar"
import products from "data/products"

export default function MarketPage() {
  const [filters, setFilters] = useState({
    brands: [] as string[],
    categories: [] as string[],
    minPrice: "",
    maxPrice: "",
    sortBy: "default",
  })

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
 // Lista unikalnych marek i kategorii do przekazania do FilterBar
  const brands = Array.from(new Set(products.map((p) => p.brand)))
  const categories = Array.from(new Set(products.map((p) => p.category)))

  return (
    <main className="px-4 py-6 md:px-10">
      {/* Burger */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Market</h1>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="px-4 py-2 bg-[#732C37] text-white rounded-md"
        >
          Show Filters
        </button>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-10 max-w-340 w-full">
          {/* Główna siatka layoutu */}
          <aside className="hidden md:block min-w-[260px] max-w-[260px] sticky top-6">
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              brands={brands}
              categories={categories}
            />
          </aside>

          {/* Producty */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            <ProductList filters={filters} products={products} />
          </section>
        </div>
      </div>

      {/* FilteBar */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg w-[90%] max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="absolute top-2 right-2 text-sm text-red-500 hover:text-red-700"
            >
              ✕ Close
            </button>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              brands={brands}
              categories={categories}
            />
          </div>
        </div>
      )}
    </main>
  )
}
