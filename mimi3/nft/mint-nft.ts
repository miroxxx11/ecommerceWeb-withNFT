import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl } from "@solana/web3.js"
import { WalletAdapter } from "@solana/wallet-adapter-base"

const connection = new Connection(clusterApiUrl("devnet"))
//Ladujemy json linki otzymane po ladowaniu image URI
const metadataUris: Record<string, string> = {
  balenciaga: "https://gateway.irys.xyz/5nVu7pngiBTgiZtSJTtr5jGtu7kXv9SBGPF5RR5eCvLw",
  valentino: "https://gateway.irys.xyz/4d3XnoYifg8mfUiT81WTXeokXsQ4zj63UGUDapnoPqmr",
  givenchy: "https://gateway.irys.xyz/Xsk3RpftFSB9BpaEc3bBHxyZiX3ST8AvRmHW6A65E7Y",
  moncler: "https://gateway.irys.xyz/iLeStkS1P5tCoRZAqfkcy1MBc5TNouSgqc1CKGN53Hb",
  prada: "https://gateway.irys.xyz/DGTEKKy4icZoodw6xSeHqCHVMaWiPyCfaNEQ8fwRAHbv",
  "saint-laurent": "https://gateway.irys.xyz/DFrpDDzACPuZ6u2QTvu3CWcU79Yz6HzfzowYxZcnmSsY",
  tomford: "https://gateway.irys.xyz/7RfvzBzd642JBFoH8njr5faczSEJu32rztgtbtBGMhPh",
}

export async function mintNFT(walletAdapter: WalletAdapter, brand: string) {
  if (!walletAdapter?.connected) throw new Error("Wallet not connected")

  const metaplex = new Metaplex(connection).use(walletAdapterIdentity(walletAdapter))

  const metadataUri = metadataUris[brand.toLowerCase()]
  if (!metadataUri) throw new Error(`Metadata URI not found for brand: ${brand}`)

  console.log("Mint launch:", brand, metadataUri)
  
  const { nft } = await metaplex.nfts().create({
    uri: metadataUri,
    name: brand.charAt(0).toUpperCase() + brand.slice(1),
    sellerFeeBasisPoints: 0,
  })

  console.log(`✅ ${brand} NFT minted: ${nft.address.toBase58()}`)
  return nft.address.toBase58()
}
