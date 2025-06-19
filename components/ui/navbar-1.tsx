"use client" 

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4 bg-white/80 backdrop-blur-md border-b border-white/20">
      <nav className="flex items-center justify-between px-6 py-3 bg-white/60 backdrop-blur-md rounded-full shadow-lg w-full max-w-3xl relative z-10 border border-white/30">
        <div className="flex items-center">
          <span className="font-bold text-2xl tracking-tight text-[#2962ff] mr-6 select-none">WalkieCheck</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#1a237e] hover:text-[#2962ff] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href="/sign-in"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold border-2 border-[#2962ff] text-[#2962ff] bg-white/80 backdrop-blur-sm rounded-full hover:bg-[#2962ff] hover:text-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-[#2962ff] rounded-full hover:bg-[#1a237e] transition-colors font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#e3f2fd]/95 backdrop-blur-md z-50 pt-24 px-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <button
            className="absolute top-6 right-6 p-2 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6 text-[#1a237e]" />
          </button>
          <div className="flex flex-col space-y-6">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base text-[#1a237e] font-medium hover:text-[#2962ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-8">
              <a
                href="/sign-in"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold border-2 border-[#2962ff] text-[#2962ff] bg-white/80 backdrop-blur-sm rounded-full hover:bg-[#2962ff] hover:text-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
                onClick={closeMenu}
              >
                Sign In
              </a>
              <a
                href="/sign-up"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-[#2962ff] rounded-full hover:bg-[#1a237e] transition-colors font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
                onClick={closeMenu}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export { Navbar1 }