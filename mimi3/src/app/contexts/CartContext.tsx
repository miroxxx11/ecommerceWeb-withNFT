"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Product, NftProduct } from "types"

// Typ  elementu w koszyku
type CartItem = {
  id: number
  brand: string
  image: string
  price: number
  description: string
  quantity: number
  name?: string
  category?: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product | NftProduct, variantIndex?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        if (Array.isArray(parsed)) setCartItems(parsed)
      } catch (err) {
        console.error("Failed to parse cart from localStorage", err)
      }
    }
  }, [])

  // Zapisujemy koszyk do localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])
  // Dodawanie produktu do koszyka
  const addToCart = (product: Product | NftProduct, variantIndex: number = 0) => {
    let newItem: CartItem

    if ("name" in product) {
      newItem = {
        id: product.id,
        brand: product.brand,
        image: product.images[0],
        price: product.price,
        description: product.description,
        name: product.name,
        category: product.category,
        quantity: 1,
      }
    } else {
      const nft = product as NftProduct
      newItem = {
        id: nft.id + variantIndex,
        brand: nft.brand,
        image: nft.images[variantIndex],
        price: nft.price[variantIndex],
        description: nft.description[variantIndex],
        quantity: 1,
      }
    }
    // Jeśli produkt już jest w koszyku zwiększamy ilość
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, newItem]
    })
  }
  // Usunięcie produktu z koszyka
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }
  // Zmiana ilości produktu w koszyku
  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    )
  }

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>

  )
}

