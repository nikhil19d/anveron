'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              ANVERON
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() =>
                document
                  .getElementById("audit")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Slot
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white/80 hover:text-white font-medium transition-colors"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-black text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onClick={() =>
                    document
                      .getElementById("audit")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book Slot
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
