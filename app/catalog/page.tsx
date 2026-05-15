import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { FlaskConical, Zap, ShieldCheck, TrendingDown, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Zap,
  ShieldCheck,
  TrendingDown,
  Star,
};

const categoryMeta: Record<string, { color: string; description: string }> = {
  "weight-loss": {
    color: "#d4af37",
    description:
      "Análogos de GLP-1 y otros péptidos para control glucémico, pérdida de peso y optimización metabólica.",
  },
  "gh-optimization": {
    color: "#585c7d",
    description:
      "Liberadores y análogos de hormona de crecimiento para regeneración celular, composición corporal y rendimiento.",
  },
  regeneration: {
    color: "#F59E0B",
    description:
      "Péptidos para regeneración cutánea, producción de colágeno, bronceado y bienestar general.",
  },
};

export default function CatalogPage() {
  const grouped = products.reduce(
    (acc, product) => {
      if (!acc[product.categorySlug]) acc[product.categorySlug] = [];
      acc[product.categorySlug].push(product);
      return acc;
    },
    {} as Record<string, typeof products>
  );

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="text-center space-y-4 mb-16">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest">
                GBH México
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Catálogo de Péptidos de Grado Médico
              </h1>
              <p className="text-lg text-[#585c7d] max-w-2xl mx-auto">
                Compuestos de alta pureza certificados para la práctica médica profesional. Venta exclusiva a profesionales de la salud con cédula vigente.
              </p>
            </div>

            {/* Product Grid by Category */}
            <div className="space-y-16">
              {Object.entries(grouped).map(([categorySlug, prods]) => {
                const meta = categoryMeta[categorySlug] || { color: "#d4af37", description: "" };
                return (
                  <div key={categorySlug}>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-3 h-8 rounded-full"
                        style={{ backgroundColor: meta.color }}
                      />
                      <h2 className="text-2xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {prods[0].category}
                      </h2>
                    </div>
                    <p className="text-[#585c7d] mb-8 max-w-xl">{meta.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {prods.map((product) => {
                        const productImageMap: Record<string, string> = {
                          semaglutide: "/images/product-semaglutide.webp",
                          tirzepatide: "/images/product-tirzepatide.webp",
                          retatrutide: "/images/product-retatrutide.webp",
                          tesamorelin: "/images/product-tesamorelin.webp",
                          "ipamorelin-cjc": "/images/product-ipamorelin-cjc.webp",
                          "ghk-cu": "/images/product-ghk-cu.webp",
                          "melanotan-2": "/images/product-melanotan.webp",
                        };
                        const imgSrc = productImageMap[product.id] || "/images/product-peptide-glow.webp";
                        return (
                          <Link
                            key={product.id}
                            href={`/catalog/${product.categorySlug}/${product.slug}`}
                            className="bg-white rounded-[16px] p-6 gold-shadow-deep border border-[#d4af37]/20 hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                          >
                            {/* Product Image */}
                            <div className="w-full aspect-square bg-[#f9f9ff] rounded-[12px] mb-4 flex items-center justify-center overflow-hidden">
                              <Image
                                src={imgSrc}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                              />
                            </div>

                            {/* Category pill */}
                            <div className="mb-3">
                              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                                {product.category}
                              </span>
                            </div>

                            {/* Product name */}
                            <h3 className="text-xl font-bold text-[#1A1F3C] mb-2 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                              {product.name}
                            </h3>

                            {/* Tagline */}
                            <p className="text-sm text-[#585c7d] mb-4 leading-relaxed flex-1">
                              {product.tagline}
                            </p>

                            {/* Features preview */}
                            <div className="space-y-2 mb-4">
                              {product.features.slice(0, 2).map((f, i) => {
                                const Icon = iconMap[f.icon] || FlaskConical;
                                return (
                                  <div key={i} className="flex items-center gap-2 text-xs text-[#585c7d]">
                                    <Icon className="w-4 h-4 text-[#d4af37]" />
                                    <span>{f.title}</span>
                                  </div>
                                );
                              })}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-1 text-sm font-semibold text-[#d4af37]">
                              Ver ficha técnica
                              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Aviso */}
        <section className="bg-[#FFFBEB] py-12">
          <div className="container-main">
            <div className="flex items-center gap-6 bg-white p-8 rounded-[16px] gold-shadow border border-[#F59E0B]/30">
              <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                <svg width="28" height="28" fill="none" stroke="#F59E0B" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#92400E] mb-1">
                  Aviso Importante: Venta Exclusiva a Profesionales
                </h3>
                <p className="text-sm text-[#585c7d]">
                  La distribución de los compuestos ofrecidos por GBH México está estrictamente reservada para médicos, clínicas y profesionales de la salud debidamente acreditados con cédula profesional vigente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}