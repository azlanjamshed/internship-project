
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70 border-b border-border/50 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-xl">
                A
              </span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-foreground group-hover:text-primary transition-colors">
              Agency
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/20">
              Get Started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 hover:bg-muted/80 rounded-xl transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={26} className="text-foreground" />
              ) : (
                <Menu size={26} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-center shadow-lg shadow-primary/20">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
