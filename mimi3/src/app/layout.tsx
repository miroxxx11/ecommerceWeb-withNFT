import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/Header"
import { CartProvider } from "@/app/contexts/CartContext"
import { ThemeProvider } from "@/app/contexts/ThemeContext" 
import { AuthProvider } from '@/app/contexts/AuthContext'
import { SolanaWalletProvider } from "./contexts/WalletProvider"
// Ustawienie czcionki
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Multi-Page App",
  description: "A multi-page application with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SolanaWalletProvider>
        <ThemeProvider>
          <CartProvider>
            <AuthProvider>
            <Header />
            <main className="pt-16">{children}</main>
            </AuthProvider>
          </CartProvider>
        </ThemeProvider>
      </SolanaWalletProvider>
      </body>
    </html>
  )
}

