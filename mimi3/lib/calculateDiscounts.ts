import { getUserDiscountBrandsFromWallet } from "./getNftFromWallet"
import { CartItem, User } from "types"
import { WalletAdapter } from "@solana/wallet-adapter-base"

export interface DiscountResult {
  originalTotal: number
  discountedTotal: number
  savedAmount: number
  discountDetails: string[]
}

export async function calculateDiscounts(
  cartItems: CartItem[],
  user: User | null,
  walletAdapter: WalletAdapter | undefined
): Promise<DiscountResult> {
  let fullTotal = 0
  let totalWithDiscount = 0
  let totalSaved = 0
  const details: string[] = []

  const brandGroups: Record<string, { total: number; items: CartItem[] }> = {}

  for (const item of cartItems) {
    if (!item.name) {
      fullTotal += item.price * item.quantity
      totalWithDiscount += item.price * item.quantity
      continue
    }

    fullTotal += item.price * item.quantity
    if (!brandGroups[item.brand]) {
      brandGroups[item.brand] = { total: 0, items: [] }
    }
    brandGroups[item.brand].total += item.price * item.quantity
    brandGroups[item.brand].items.push(item)
  }

  const realNftBrands = walletAdapter
    ? await getUserDiscountBrandsFromWallet(walletAdapter)
    : []

  for (const [brand, group] of Object.entries(brandGroups)) {
    const nft = user?.nfts?.find(n => n.brand === brand)

    const hasTempDiscount =
      nft &&
      ((nft.type === 1 && typeof nft.usesLeft === "number" && nft.usesLeft > 0) ||
        (nft.type === 2 && nft.expiresAt && new Date(nft.expiresAt) > new Date()))

    const hasLifetimeDiscount = realNftBrands.includes(brand.toLowerCase())

    if (hasTempDiscount || hasLifetimeDiscount) {
      const discount = group.total * 0.1
      totalWithDiscount += group.total - discount
      totalSaved += discount

      if (nft?.type === 1 && typeof nft.usesLeft === "number") {
        details.push(`10% discount from ${brand} NFT card (left: ${nft.usesLeft})`)
      } else if (nft?.type === 2 && nft.expiresAt) {
        const date = new Date(nft.expiresAt).toLocaleDateString()
        details.push(`10% discount from ${brand} NFT card (valid until ${date})`)
      } else if (hasLifetimeDiscount) {
        details.push(`10% lifetime discount from ${brand} NFT`)
      }
    } else {
      totalWithDiscount += group.total
    }
  }

  return {
    originalTotal: fullTotal,
    discountedTotal: totalWithDiscount,
    savedAmount: totalSaved,
    discountDetails: details,
  }
}
