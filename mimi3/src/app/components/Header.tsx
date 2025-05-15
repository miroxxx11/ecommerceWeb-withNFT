"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import AuthModal from "./AuthModal"
import { useCart } from "../contexts/CartContext"
import { useTheme } from "../contexts/ThemeContext"
import { useAuth } from "../contexts/AuthContext"
import { useWallet } from "@solana/wallet-adapter-react"
import { PhantomWalletName } from "@solana/wallet-adapter-wallets"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [scrollCount, setScrollCount] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false)

  const pathname = usePathname()
  const { cartItems } = useCart()
  const { theme, setTheme } = useTheme()
  const { user, logout } = useAuth()
  const {
    connect,
    select,
    connected,
    wallet,
    publicKey,
    disconnect,
  } = useWallet()
  const { setVisible } = useWalletModal()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/market", label: "Market" },
    { href: "/nft", label: "NFT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        if (isHeaderVisible) {
          setIsHeaderVisible(false)
          setScrollCount((prev) => prev + 1)
        }
      } else {
        if (!isHeaderVisible) setIsHeaderVisible(true)
      }
      if (scrollCount >= 3) {
        setIsHeaderVisible(true)
        setScrollCount(0)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isHeaderVisible, scrollCount])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const profile = document.getElementById("profile-dropdown")
      if (profile && !profile.contains(e.target as Node)) {
        setIsProfileOpen(false)
      }
      const walletMenu = document.getElementById("wallet-menu")
      if (walletMenu && !walletMenu.contains(e.target as Node)) {
        setIsWalletMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isProfileOpen, isWalletMenuOpen])

  const openAuthModal = (mode: "login" | "register") => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const shortAddress = (address: string) =>
    address.slice(0, 4) + "..." + address.slice(-4)

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full shadow-md z-50 transition-transform duration-300 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          } ${theme === "dark" ? "bg-[#732C37]" : "bg-[#262626]"}`}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/icons/mimi.svg" alt="Logo" width={120} height={120} />
            </div>

            <nav className="hidden md:flex items-center justify-center gap-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-white" : "text-gray-300"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end space-x-4 relative">
              <button onClick={toggleTheme} aria-label="Toggle theme">
                <Image
                  src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
                  width={24}
                  height={24}
                  alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                />
              </button>

              <Link href="/cart" className="text-white hover:text-gray-300 transition-colors relative">
                <Image src="/icons/cart-white.svg" width={24} height={24} alt="Shopping cart icon" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Кошелёк доступен всем */}
              <div className="relative ml-2" id="wallet-menu">
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      if (!connected || !wallet) {
                        try {
                          await select(PhantomWalletName)
                          await connect()
                        } catch (err) {
                          console.error("Ошибка подключения к Phantom:", err)
                        }
                      } else {
                        setIsWalletMenuOpen((prev) => !prev)
                      }
                    }}
                    className="text-white"
                    aria-label="Phantom Wallet"
                  >
                    <Image
                      src="/icons/Phantom-Icon_App.svg"
                      width={24}
                      height={24}
                      alt="Phantom Wallet"
                    />
                  </button>
                  {connected && publicKey && (
                    <span className="text-xs text-gray-300 font-mono">
                      {shortAddress(publicKey.toBase58())}
                    </span>
                  )}
                </div>

                {isWalletMenuOpen && (
                  <div className="absolute top-10 right-0 bg-[#262626] text-white rounded-lg shadow-lg w-48 z-50 p-3 space-y-2">
                    <button
                      onClick={() => {
                        setVisible(true)
                        setIsWalletMenuOpen(false)
                      }}
                      className="w-full text-left text-sm hover:text-gray-300"
                    >
                      🔄 Change Wallet
                    </button>
                    <button
                      onClick={() => {
                        disconnect()
                        setIsWalletMenuOpen(false)
                      }}
                      className="w-full text-left text-sm text-red-500 hover:text-red-300"
                    >
                      ❌ Disconnect
                    </button>
                  </div>
                )}
              </div>

              {!user ? (
                <>
                  <button
                    onClick={() => openAuthModal("login")}
                    className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => openAuthModal("register")}
                    className="text-sm font-medium bg-white text-[#732C37] px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="text-white"
                    aria-label="Profile"
                  >
                    <Image src="/icons/user-white.svg" width={24} height={24} alt="Profile" />
                  </button>

                  {isProfileOpen && (
                    <div
                      id="profile-dropdown"
                      className="absolute top-14 right-0 bg-[#262626] text-white shadow-lg rounded-lg w-64 z-50 p-4"
                    >
                      <p className="text-sm mb-2 font-semibold">👋 Hello, {user.name}</p>

                      {user.nfts?.length > 0 ? (
                        <div className="text-sm space-y-2">
                          {user.nfts.map((nft: any, index: number) => (
                            <div key={index}>
                              <p>
                                "NFT" discount -10% on <strong>{nft.brand}</strong>:{" "}
                                {nft.type === 1
                                  ? `left ${nft.usesLeft}`
                                  : `until ${new Date(nft.expiresAt).toLocaleDateString()}`}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400 mt-2">No active NFTs</p>
                      )}

                      <button
                        onClick={() => {
                          logout()
                          setIsProfileOpen(false)
                        }}
                        className="mt-4 w-full text-sm text-white bg-red-600 hover:bg-red-700 rounded py-1.5"
                      >
                        Log out
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              <Image
                src={isMenuOpen ? "/icons/x.svg" : "/icons/menu.svg"}
                width={24}
                height={24}
                alt={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-4 pb-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base font-medium px-3 py-2 rounded-md ${pathname === link.href
                    ? "bg-gray-200 dark:bg-gray-700 text-[#732C37] dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!user && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-1">
                  <button
                    onClick={() => {
                      openAuthModal("login")
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => {
                      openAuthModal("register")
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </>
  )
}
