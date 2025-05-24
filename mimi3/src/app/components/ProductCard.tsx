"use client"
import Image from "next/image"
import type { Product } from "types"
import ProductModal from "./ProductModal"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-[1.01] transition cursor-pointer animate-fade-in max-h-110"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-80 relative">
          <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover rounded-lg" />
        </div>
        <div className="p-3 h-auto">
          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
          <p className="text-primary font-bold">${product.price}</p>
          <p className="text-sm text-muted-foreground mt-1">{product.brand}</p>
        </div>
      </div>

      <ProductModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}