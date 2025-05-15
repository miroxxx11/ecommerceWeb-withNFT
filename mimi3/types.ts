export interface Product {
    id: number
    name: string
    description: string
    price: number
    brand: string
    category: string
    images: string []
  }
  
  export interface NftProduct {
    id: number;
    brand: string;
    images: string[];
    price: number[];
    description: string[];
  }
  export interface NftCard {
    brand: string
    type: number 
    usesLeft?: number
    expiresAt?: string
  }
  
  export interface User {
    name: string
    email: string
    nfts: NftCard[]
  }
  export interface CartItem {
    id: number
    name?: string 
    description: string
    price: number
    brand: string
    image: string
    quantity: number
  }