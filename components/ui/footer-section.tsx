"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#", tooltip: "Follow us on Facebook" },
  { icon: Twitter, label: "Twitter", href: "#", tooltip: "Follow us on Twitter" },
  { icon: Instagram, label: "Instagram", href: "#", tooltip: "Follow us on Instagram" },
  { icon: Linkedin, label: "LinkedIn", href: "#", tooltip: "Connect with us on LinkedIn" },
]

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Products", href: "#" },
  { label: "Contact", href: "#" },
]

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
]

function Footerdemo() {
  return (
    <footer className="relative border-t bg-gradient-to-br from-[#e3f2fd] via-white to-[#f5f7fa] text-[#1a237e] transition-colors duration-300" id="contact">
      <div className="absolute inset-0 bg-[#2962ff]/[0.02]"></div>
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 relative">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-6 text-2xl lg:text-3xl font-bold tracking-tight text-[#1a237e]">Stay Connected</h2>
            <p className="mb-8 text-gray-700 text-sm lg:text-base">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm bg-white border-[#b6ccfa] text-[#1a237e] placeholder:text-gray-500"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#2962ff] text-white hover:bg-[#1a237e] transition-transform hover:scale-105"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#2962ff]/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[#1a237e]">Quick Links</h3>
            <nav className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="block transition-colors hover:text-[#2962ff] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[#1a237e]">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic text-gray-700">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-6 text-lg font-semibold text-[#1a237e]">Follow Us</h3>
            <div className="mb-8 flex space-x-4">
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-[#b6ccfa] text-[#2962ff] hover:bg-[#2962ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2"
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          <social.icon className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#b6ccfa] pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 WalkieCheck. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            {footerLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="transition-colors hover:text-[#2962ff] text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2962ff] focus:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 