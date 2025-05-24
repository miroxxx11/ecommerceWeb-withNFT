"use client";

import Image from "next/image";
import type { Product } from "types";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const { addToCart } = useCart();
  const { theme } = useTheme();

  if (!isOpen) return null;
  console.log("ProductModal OPEN:", product.name);
  // Stylowanie modala zgodnie z motywem
  const modalBgColor = theme === "dark" ? "#CCC2C8" : "#FFF6D5";
  const textColor = theme === "dark" ? "#111827" : "#000000";

  const images = product.images?.length ? product.images : ["/placeholder.svg?height=400&width=400"];

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };
  //Listanie obrazków
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose(); // Zamykamy przy kliknięciu na tło
        }
      }}
    >
      <div
        className="modal-content w-full max-w-7xl min-h-[80vh] rounded-lg shadow-xl relative p-6 flex flex-col"
        style={{ backgroundColor: modalBgColor, color: textColor }}
      >
        {/* Przycisk zamknięcia */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 z-10"
          aria-label="Close"
        >
          <Image src="/icons/x.svg" width={24} height={24} alt="Close" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 flex-grow">
          {/* Blok z obrazkami */}
          <div className="relative h-96 md:h-full rounded-md overflow-hidden">
            <Image src={images[currentImageIndex]} alt={product.name} fill className="object-cover" />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
              aria-label="Previous image"
            >
              <Image src="/icons/chevronleft_left.svg" width={24} height={24} alt="Previous" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
              aria-label="Next image"
            >
              <Image src="/icons/chevronright_right.svg" width={24} height={24} alt="Next" />
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>

            <div className="mb-6">
              <p className="text-sm mb-2">Brand: {product.brand}</p>
              <p className="text-sm mb-4">Category: {product.category}</p>
              <p className="text-lg mb-6">{product.description}</p>
            </div>

            {/* Add to cart */}
            <div className="mt-auto">
              <button
                onClick={handleAddToCart}
                className="w-full py-3 rounded-md text-lg font-semibold transition-colors bg-gray-800 text-white hover:bg-gray-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
