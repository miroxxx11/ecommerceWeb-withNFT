"use client"

import { useCart } from "../contexts/CartContext"
import { useAuth } from "../contexts/AuthContext"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { mintNFT } from "nft/mint-nft"
import ProductModal from "../components/ProductModal"
import NftModal from "../components/NftModal"
import products, { NftProducts } from "data/products"
import type { Product, NftProduct } from "types"
import debounce from "lodash.debounce"
import { calculateDiscounts } from "lib/calculateDiscounts"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const { user, login } = useAuth()
  const [discountedTotal, setDiscountedTotal] = useState(0)
  const [discountDetails, setDiscountDetails] = useState<string[]>([])
  const [originalTotal, setOriginalTotal] = useState(0)
  const [savedAmount, setSavedAmount] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedNft, setSelectedNft] = useState<NftProduct | null>(null)
  const wallet = useWallet()
  // Przyjmujemy zniżki, opóźniamy od spamu
  useEffect(() => {
    const debouncedCalculation = debounce(async () => {
      const result = await calculateDiscounts(cartItems, user, wallet.wallet?.adapter)
      setOriginalTotal(result.originalTotal)
      setDiscountedTotal(result.discountedTotal)
      setSavedAmount(result.savedAmount)
      setDiscountDetails(result.discountDetails)
    }, 300)

    debouncedCalculation()

    return () => {
      debouncedCalculation.cancel()
    }
  }, [cartItems, user, wallet])

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to complete your purchase.")
      return
    }

    const updatedUser = { ...user }
    updatedUser.nfts = Array.isArray(updatedUser.nfts) ? [...updatedUser.nfts] : []

    const brandsDiscounted: Set<string> = new Set()

    try {
      for (const item of cartItems) {
        const brand = item.brand
        const nft = updatedUser.nfts.find((n) => n.brand === brand)

        // Mint jeżeli 3 
        if (!item.name && item.description.includes("lifetime")) {
          if (!wallet.wallet?.adapter) {
            alert("Please connect a compatible wallet")
            return
          }
          try {
            const mintAddress = await mintNFT(wallet.wallet.adapter, brand.toLowerCase())
            alert(`🎉 NFT for ${brand} minted to your wallet! Address: ${mintAddress}`)
          } catch (err) {
            console.error(`Mint error for ${brand}:`, err)
            alert(`❌ Minting failed for ${brand}. Check console.`)
          }
          continue
        }

        // Do profilu, jeżeli 1 lub 2 kartka
        if (!item.name) {
          const isFivePurchases = item.description.includes("5 purchases")
          const isThreeMonths = item.description.includes("3 months")

          if (!nft) {
            if (isFivePurchases) {
              updatedUser.nfts.push({ brand, type: 1, usesLeft: 5 })
              console.log(`✅ NFT discount (5 purchases) added for ${brand}`)
            } else if (isThreeMonths) {
              updatedUser.nfts.push({
                brand,
                type: 2,
                expiresAt: new Date(Date.now() + 90 * 86400000).toISOString()
              })
              console.log(`✅ NFT discount (3 months) added for ${brand}`)
            }
          }

          continue
        }

        // Jeśli użytkownik ma NFT typu 1 – zmniejszamy `usesLeft`
        if (nft?.type === 1 && typeof nft.usesLeft === "number" && !brandsDiscounted.has(brand)) {
          nft.usesLeft -= 1
          if (nft.usesLeft < 0) nft.usesLeft = 0
          brandsDiscounted.add(brand)
        }
      }

      // Zapisujemy użytkownika i odświeżamy kontekst
      localStorage.setItem("user", JSON.stringify(updatedUser))
      login(updatedUser)
      alert("Purchase complete! 🎉")
    } catch (err) {
      console.error("Checkout failed:", err)
      alert("Something went wrong during checkout.")
    }
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Produkty */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-[1.01] transition cursor-pointer"
              onClick={() => {
                if (item.name) {
                  const fullProduct = products.find(p => p.id === item.id)
                  if (fullProduct) setSelectedProduct(fullProduct)
                } else {
                  const fullNft = NftProducts.find((nft: NftProduct) => {
                    const index = item.id - nft.id
                    return nft.brand === item.brand &&
                      nft.description[index] === item.description &&
                      nft.images[index] === item.image
                  })
                  if (fullNft) setSelectedNft(fullNft)
                }
              }}
            >
              <Image src={item.image} alt={item.name ?? item.description} width={80} height={80} className="rounded-md" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name ?? item.description}</h3>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, item.quantity - 1) }} className="text-2xl">−</button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, item.quantity + 1) }} className="text-2xl">+</button>
              </div>
              <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id) }} className="text-red-500 text-2xl">✕</button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name ?? item.description} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {discountDetails.length > 0 && (
            <div className="bg-green-100 dark:bg-green-900/30 text-sm rounded-md p-4 mb-4">
              <h3 className="font-semibold mb-2">Applied Discounts:</h3>
              <ul className="list-disc list-inside space-y-1">
                {discountDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t pt-4 mb-6 space-y-1">
            <div className="flex justify-between">
              <span>Original Total</span>
              <span>${originalTotal.toFixed(2)}</span>
            </div>
            {savedAmount > 0 && (
              <div className="flex justify-between text-sm text-green-700 dark:text-green-400">
                <span>You Saved</span>
                <span>−${savedAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>Total with Discounts</span>
              <span style={{ color: "#b3bfb0" }}>${discountedTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90"
          >
            Confirm Purchase
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={true} onClose={() => setSelectedProduct(null)} />
      )}
      {selectedNft && (
        <NftModal nft={selectedNft} isOpen={true} onClose={() => setSelectedNft(null)} />
      )}
    </div>
  )
}
