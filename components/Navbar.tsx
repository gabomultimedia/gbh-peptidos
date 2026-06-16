"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { getProductImagePath } from "@/lib/product-images";

const categories = [
  {
    title: "Control de Peso",
    href: "/catalog/weight-loss",
    image: getProductImagePath("semaglutide"),
    products: ["Semaglutida", "Tirzepatida", "Retatrutida"],
  },
  {
    title: "Optimización GH",
    href: "/catalog/gh-optimization",
    image: getProductImagePath("tesamorelin"),
    products: ["Tesamorelina", "Ipamorelina + CJC-1295"],
  },
  {
    title: "Regeneración",
    href: "/catalog/regeneration",
    image: getProductImagePath("ghk-cu"),
    products: ["GHK-Cu", "Melanotano-2"],
  },
  {
    title: "Bienestar",
    href: "/catalog",
    image: getProductImagePath("melanotan-2"),
    products: ["PT-141", "Kisspeptin-10"],
  },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalog", label: "Productos" },
  { href: "/clinics", label: "Clínicas" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 300);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#00BFFF] shadow-[0_4px_20px_-4px_rgba(0,51,102,0.08)]">
      <div className="container-main flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-peptidos.png"
            alt="Q-PEPTIDES"
            width={260}
            height={146}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {link.label === "Productos" ? (
                <button
                  type="button"
                  onMouseEnter={handleMouseEnter}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#00BFFF] px-4 py-2 rounded-[12px] ${
                    pathname.startsWith("/catalog") ? "text-[#00BFFF]" : "text-[#003366]"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#00BFFF] px-4 py-2 rounded-[12px] ${
                    pathname === link.href ? "text-[#00BFFF]" : "text-[#003366]"
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Megamenu con imágenes - desktop solo */}
              {link.label === "Productos" && productsOpen && (
                <div
                  ref={menuRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-[20px] brand-shadow-deep border border-[#00BFFF]/20 p-6 animate-fade-in-up"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-4">
                    {categories.map((cat) => (
                      <Link
                        key={cat.title}
                        href={cat.href}
                        className="group"
                        onClick={() => setProductsOpen(false)}
                      >
                        <div className="aspect-square bg-[#F3F8FD] rounded-[12px] overflow-hidden mb-3">
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            width={120}
                            height={120}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-[#003366] text-sm text-center group-hover:text-[#00BFFF] transition-colors">
                          {cat.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#00BFFF]/20">
                    <Link
                      href="/catalog"
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-[#00BFFF] hover:text-[#7CE9FF] transition-colors py-2"
                      onClick={() => setProductsOpen(false)}
                    >
                      Ver todo el catálogo
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="brand-gradient-bg text-white text-sm font-semibold px-6 py-2.5 rounded-[12px] hover:opacity-90 transition-all shadow-sm hover:scale-105 transition-transform"
          >
            Registro para Médicos
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-[#003366] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#00BFFF]">
          <div className="container-main py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.label === "Productos" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="w-full flex items-center justify-between text-[#003366] font-semibold py-3 border-b border-[#00BFFF]/10"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {productsOpen && (
                      <div className="py-2 grid grid-cols-2 gap-3">
                        {categories.map((cat) => (
                          <Link
                            key={cat.title}
                            href={cat.href}
                            className="flex flex-col items-center py-3 px-2 rounded-[12px] bg-[#F3F8FD] hover:bg-[#00BFFF]/10 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="w-20 h-20 rounded-[10px] overflow-hidden mb-2 bg-white">
                              <Image
                                src={cat.image}
                                alt={cat.title}
                                width={80}
                                height={80}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs font-semibold text-[#003366] text-center">{cat.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-[#003366] font-semibold py-3 border-b border-[#00BFFF]/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block brand-gradient-bg text-white text-center font-semibold px-6 py-3.5 rounded-[12px]"
                onClick={() => setMobileOpen(false)}
              >
                Registro para Médicos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
