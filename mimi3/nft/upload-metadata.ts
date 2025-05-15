import Irys from "@irys/sdk"
import dotenv from "dotenv"
import fs from "fs"
import path from "path"

dotenv.config()

async function uploadAllMetadata() {
  const irys = new Irys({
    network: "devnet",
    token: "solana",
    key: process.env.PRIVATE_KEY!,
    config: {
      providerUrl: "https://api.devnet.solana.com", 
    },
  })

  console.log(" Using wallet:", irys.address)
  console.log(" Network:", irys.token)
  console.log(" Irys balance:", await irys.getBalance(irys.address))

  const metadataDir = path.join(process.cwd(), "nft", "metadata")
  const files = fs.readdirSync(metadataDir).filter(f => f.endsWith(".json"))

  for (const file of files) {
    try {
      const filePath = path.join(metadataDir, file)
      const response = await irys.uploadFile(filePath, {
        tags: [{ name: "Content-Type", value: "application/json" }],
      })
      console.log(` Uploaded ${file} => https://gateway.irys.xyz/${response.id}`)
    } catch (err) {
      console.error(` Failed to upload ${file}:`, err)
    }
  }
}

uploadAllMetadata().catch(console.error)
