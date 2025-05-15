//Zakomentowaną mam realizację mintu na stworzony devnet-wallet (CEX)
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
//import { Metaplex, keypairIdentity, toMetaplexFile } from '@metaplex-foundation/js'
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('devnet'))

/*const keypair = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync('nft/dev-wallet.json', 'utf-8')))
)

const metaplex = Metaplex.make(connection).use(keypairIdentity(keypair))
*/
export async function POST(req: NextRequest) {
  const { action, email, password, brand } = await req.json()

  const userPath = path.join(process.cwd(), 'user.json')

  if (action === 'login') {
    try {
      const rawData = fs.readFileSync(userPath, 'utf-8')
      const user = JSON.parse(rawData)

      if (user.email === email && user.password === password) {
        return NextResponse.json({
          name: user.name,
          email: user.email,
          nfts: user.nfts
        })
      } else {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
      }
    } catch (error) {
      console.error('Login error:', error)
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }

  if (action === 'mint') {
    /*try {
      const imagePath = path.join(process.cwd(), `nft/images/${brand}B.png`)
      const metadataPath = path.join(process.cwd(), `nft/metadata/${brand}.json`)

      const imageBuffer = fs.readFileSync(imagePath)
      const file = toMetaplexFile(imageBuffer, `${brand}B.png`)
      const imageUri = await metaplex.storage().upload(file)

      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'))
      metadata.image = imageUri
      metadata.properties = {
        files: [{ uri: imageUri, type: 'image/png' }],
        category: 'image'
      }

      const { uri: metadataUri } = await metaplex.nfts().uploadMetadata(metadata)

      const { nft } = await metaplex.nfts().create({
        uri: metadataUri,
        name: metadata.name,
        sellerFeeBasisPoints: 0
      })

      return NextResponse.json({ success: true, mint: nft.address.toBase58() })
    } catch (error) {
      console.error('❌ Minting failed:', error)
      return NextResponse.json({ success: false, error: 'Minting failed' }, { status: 500 })
    }
  }
*/
  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  
}
}
