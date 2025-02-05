import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 border-b border-green-500">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe-1dSFr1SvCB9KTycXvT1tAqt1jVzKS9.png"
                alt="PepeFrog Logo"
                fill
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors">PEPEFROG</span>
          </Link>

          {/* Burger menu for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-green-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("buy")}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              How to Buy
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Roadmap
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("buy")}
              className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors py-2"
            >
              How to Buy
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors py-2"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors py-2"
            >
              Roadmap
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

