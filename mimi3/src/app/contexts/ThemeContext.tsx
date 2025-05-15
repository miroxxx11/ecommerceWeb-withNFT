"use client"

import type React from "react"
import { createContext, useContext, useLayoutEffect, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
// Hook do korzystania z kontekstu
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider: React.FC<{
  children: ReactNode
  attribute?: string
  defaultTheme?: "light" | "dark"
  enableSystem?: boolean
}> = ({ children, attribute = "class", defaultTheme = "dark", enableSystem = true }) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme)

  // Czytujemy z localStorage theme
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setTheme(mediaQuery.matches ? "dark" : "light")
    }
  }, [enableSystem])

  // Czytujemy zmianę
  useEffect(() => {
    if (enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light")
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [enableSystem])

  // Zapisujemy wybraną themę 
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

