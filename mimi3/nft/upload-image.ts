import Irys from "@irys/sdk";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

async function uploadAllImages() {
  const irys = new Irys({
    network: "devnet",
    token: "solana",
    key: process.env.PRIVATE_KEY!,
    config: {
      providerUrl: "https://api.devnet.solana.com",
    },
  });

  console.log(" Using wallet:", irys.address);
  console.log(" Network:", irys.token);

  const balance = await irys.getBalance(irys.address);
  console.log(" Irys balance before fund:", balance);

  const fundTx = await irys.fund(150_000_000); 
  console.log(" Fund tx:", fundTx.id);

  const imageDir = path.join(process.cwd(), "public", "nft", "images");
  const files = fs.readdirSync(imageDir).filter(file => file.endsWith(".png"));

  for (const file of files) {
    try {
      const fullPath = path.join(imageDir, file);
      const receipt = await irys.uploadFile(fullPath, {
        tags: [{ name: "Content-Type", value: "image/png" }],
      });
      console.log(` Uploaded ${file} => https://gateway.irys.xyz/${receipt.id}`);
    } catch (err) {
      console.error(` Failed to upload ${file}:`, err);
    }
  }
}

uploadAllImages();
