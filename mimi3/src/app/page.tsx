"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTheme } from "./contexts/ThemeContext"

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const { theme } = useTheme()
  // Efekt uruchamiający animacje
  useEffect(() => {
    const first = sectionRefs.current[0]
    if (first) first.classList.add("animate-fade-in")

    // Pozostałe IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.slice(1).forEach((ref) => {
      if (ref) {
        ref.classList.remove("animate-fade-in") // wyłaczamy anim jeżeli była
        observer.observe(ref)
      }
      
    })

    return () => observer.disconnect()
  }, [theme])

  const sectionBaseClasses = "min-h-screen flex items-center justify-center opacity-0 transition-opacity duration-1000 will-change-[opacity,transform]"

  const bgSection1 = theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#edf1ed]"
  const bgSection2 = theme === "dark" ? "bg-[#111]" : "bg-[#fdfdfd]"
  const bgSection3 = theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#e7eae5]"

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Sekcja 1 */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el
          if (el) el.classList.add("animate-fade-in")
        }}
        className={`${sectionBaseClasses} ${bgSection1} pt-30`}
      >
        <div className="text-center px-4 md:px-0 space-y-6">
          <div className="inline-block bg-white/10 dark:bg-black/30 backdrop-blur p-6 rounded-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">The Future of Fashion Is Now</h1>
            <h2 className="text-2xl md:text-2xl font-bold mb-4 leading-tight">Elevate your style and investment in one seamless transaction</h2>
            <p className="text-xl">Where luxury meets innovation.</p>
          </div>
          <Image src="/images/balenci.png" alt="Luxury Fashion" width={800} height={400} className="rounded-lg shadow-2xl mx-auto" />
        </div>
      </section>

      {/* Sekcja 2 */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
        className={`${sectionBaseClasses} ${bgSection2}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-0">
          <div className="bg-white/10 dark:bg-black/30 backdrop-blur p-6 rounded-xl">
            <h2 className="text-4xl font-bold mb-4">Elevate Your Style</h2>
            <p className="text-xl"> Elevate your style and investment in one seamless transaction. </p>
          </div>
          <Image src="/images/sanlau.avif" alt="Craftsmanship" width={600} height={600} className="rounded-lg shadow-2xl mx-auto" />
        </div>
      </section>

      {/* Sekcja 3 */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
        className={`${sectionBaseClasses} ${bgSection3}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-0">
          <Image src="/images/hood.png" alt="Timeless Elegance" width={600} height={600} className="rounded-lg shadow-2xl mx-auto" />
          <div className="bg-white/10 dark:bg-black/30 backdrop-blur p-6 rounded-xl">
            <h2 className="text-4xl font-bold mb-4">Timeless Elegance</h2>
            <p className="text-xl">Designs that transcend trends, forged with identity.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
