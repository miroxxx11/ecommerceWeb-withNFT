"use client";
import NftCard from "../components/NftCard"
import { NftProduct } from "types";
import {NftProducts} from "data/products"

export default function NftPage() {
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">NFT-Promo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 justify-items-center max-w-6xl mx-auto">
        {NftProducts.map((nft: NftProduct) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}