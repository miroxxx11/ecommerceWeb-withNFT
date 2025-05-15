"use client";

import Image from "next/image";
import type { Product } from "types";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
import products from "../data/products"
interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const { addToCart } = useCart();
  const { theme } = useTheme(); // Получаем текущую тему

  if (!isOpen) return null;

  // Определяем цвет фона в зависимости от темы
  const modalBgColor = theme === "dark" ? "#CCC2C8" : "#FFF6D5";
  const textColor = theme === "dark" ? "#111827" : "#000000";

  // Массив картинок товара (если только 1, то добавляем заглушки)
  const images = product.images?.length ? product.images : ["/placeholder.svg?height=400&width=400"];

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

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
          onClose(); // Закрываем только если кликнули на фон
        }
      }}
    >
      <div
        className="modal-content w-full max-w-7xl min-h-[80vh] rounded-lg shadow-xl relative p-6 flex flex-col"
        style={{ backgroundColor: modalBgColor, color: textColor }}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 z-10"
          aria-label="Close"
        >
          <Image src="/icons/x.svg" width={24} height={24} alt="Close" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 flex-grow">
          {/* Блок с картинками */}
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

          {/* Информация о продукте */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>

            <div className="mb-6">
              <p className="text-sm mb-2">Brand: {product.brand}</p>
              <p className="text-sm mb-4">Category: {product.category}</p>
              <p className="text-lg mb-6">{product.description}</p>
            </div>

            {/* Кнопка добавления в корзину */}
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
