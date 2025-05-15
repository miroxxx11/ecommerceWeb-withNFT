// components/NftCard.tsx
import Image from "next/image";
import type { NftProduct } from "types";
import { useState } from "react";
import NftModal from "./NftModal";

interface NftCardProps {
  nft: NftProduct;
}

export default function NftCard({ nft }: NftCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-150 w-100"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-130 relative">
          <Image src={nft.images[3] || "/placeholder.svg"} alt={nft.brand} fill className="object-cover rounded-lg" />
        </div>
        <div className="p-3 h-auto">
          <h3 className="font-semibold text-lg mb-1">{nft.brand} </h3>
        </div>
      </div>

      <NftModal nft={nft} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
