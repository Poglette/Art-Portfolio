"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "3D Modeling", path: "/portfolio/modeling" },
    { name: "Animation", path: "/portfolio/animation" },
    { name: "Video", path: "/portfolio/video" },
    { name: "Technical Drawing", path: "/portfolio/technical-drawing" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          3D ARTIST
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-lg ${
                pathname === route.path ? "text-white font-medium" : "text-white/70 hover:text-white transition-colors"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-black/95 backdrop-blur-md p-4 z-50">
          <div className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-lg ${
                  pathname === route.path
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

