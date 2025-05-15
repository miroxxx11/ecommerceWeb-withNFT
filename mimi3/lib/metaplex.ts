import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js'
import { Metaplex, keypairIdentity } from '@metaplex-foundation/js'
import fs from 'fs'

//Podłaczamy się do devnet
const connection = new Connection(clusterApiUrl('devnet'))

// Podłaczamy własny dev-wallet
const keypair = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(fs.readFileSync('nft/dev-wallet.json', 'utf-8')))
)

// Konfigurujemy metaplex za pomocą klucza
const metaplex = Metaplex.make(connection).use(keypairIdentity(keypair))

export default metaplex