import Image from "next/image";
import { NftProduct } from "types";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
interface NftModalProps {
  nft: NftProduct;
  isOpen: boolean;
  onClose: () => void;
}

export default function NftModal({ nft, isOpen, onClose }: NftModalProps) {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  if (!isOpen) return null;

  const modalBgColor = theme === "dark" ? "#CCC2C8" : "#FFF6D5";
  const textColor = theme === "dark" ? "#111827" : "#000000";
  //Add to Cart z przekazaniem  nftVariant
  const handleAddToCart = (nftVariant: number) => {
    addToCart(nft, nftVariant);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      <div className="modal-content w-full max-w-7xl min-h-[80vh] rounded-lg shadow-xl relative p-6 flex flex-col bg-white" style={{ backgroundColor: modalBgColor, color: textColor }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 z-10"
          aria-label="Close"
        >
          <Image src="/icons/x.svg" width={24} height={24} alt="Close" />
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 3 warianty NFT */}
          {nft.price.map((price, index) => {
            const image = nft.images[index]
            const description = nft.description[index]

            if (typeof price !== "number") return null

            return (
              <div key={index} className="flex flex-col items-center w-full max-w-[550px] mx-auto">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={nft.brand}
                  width={550}
                  height={400}
                  className="object-cover rounded-md"
                />
                <div className="text-center mt-2">
                  <h3 className="font-semibold">{description || "..."}</h3>
                  <p className="text-xl font-bold mt-1">${price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(index)}
                  className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
