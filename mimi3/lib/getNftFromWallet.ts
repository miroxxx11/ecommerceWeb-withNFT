import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js"
import { Connection, clusterApiUrl } from "@solana/web3.js"
import { WalletAdapter } from "@solana/wallet-adapter-base"

const connection = new Connection(clusterApiUrl("devnet"))

const metadataUris: Record<string, string> = {
  balenciaga: "https://gateway.irys.xyz/5nVu7pngiBTgiZtSJTtr5jGtu7kXv9SBGPF5RR5eCvLw",
  valentino: "https://gateway.irys.xyz/4d3XnoYifg8mfUiT81WTXeokXsQ4zj63UGUDapnoPqmr",
  givenchy: "https://gateway.irys.xyz/Xsk3RpftFSB9BpaEc3bBHxyZiX3ST8AvRmHW6A65E7Y",
  moncler: "https://gateway.irys.xyz/iLeStkS1P5tCoRZAqfkcy1MBc5TNouSgqc1CKGN53Hb",
  prada: "https://gateway.irys.xyz/DGTEKKy4icZoodw6xSeHqCHVMaWiPyCfaNEQ8fwRAHbv",
  "saint-laurent": "https://gateway.irys.xyz/DFrpDDzACPuZ6u2QTvu3CWcU79Yz6HzfzowYxZcnmSsY",
  tomford: "https://gateway.irys.xyz/7RfvzBzd642JBFoH8njr5faczSEJu32rztgtbtBGMhPh",
}

export async function getUserDiscountBrandsFromWallet(walletAdapter: WalletAdapter): Promise<string[]> {
  if (!walletAdapter?.connected || !walletAdapter.publicKey) return []

  const metaplex = new Metaplex(connection).use(walletAdapterIdentity(walletAdapter))
  const nfts = await metaplex.nfts().findAllByOwner({ owner: walletAdapter.publicKey })

  const ownedUris = nfts.map(nft => nft.uri)

  const brands = Object.entries(metadataUris)
    .filter(([brand, uri]) => ownedUris.includes(uri))
    .map(([brand]) => brand)

  return brands
}
