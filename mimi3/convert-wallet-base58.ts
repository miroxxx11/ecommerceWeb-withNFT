import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import * as fs from "fs";

const filePath = "nft/dev-wallet.json";

try {
  const raw = fs.readFileSync(filePath, "utf-8");
  const secretArray = Uint8Array.from(JSON.parse(raw));
  const keypair = Keypair.fromSecretKey(secretArray);

  const base58Key = bs58.encode(keypair.secretKey);
  console.log(`$env:IRYS_KEY = \"${base58Key}\"`);
} catch (err) {
  console.error("Error:", err);
}
