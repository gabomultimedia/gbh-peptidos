import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { ChevronRight, FlaskConical, Zap, ShieldCheck, TrendingDown, Star } from "lucide-react";
import { notFound } from "next/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Zap,
  ShieldCheck,
  TrendingDown,
  Star,
};

const categoryMeta: Record<string, { color: string; description: string; title: string }> = {
  "weight-loss": {
    color: "#d4af37",
    title: "Control de Peso y Metabolismo",
    description: "Análogos de GLP-1 y otros péptidos para control glucémico, pérdida de peso y optimización metabólica.",
  },
  "gh-optimization": {
    color: "#585c7d",
    title: "Optimización Hormona de Crecimiento",
    description: "Liberadores y análogos de hormona de crecimiento para regeneración celular, composición corporal y rendimiento.",
  },
  regeneration: {
    color: "#F59E0B",
    title: "Regeneración y Skin Health",
    description: "Péptidos para regeneración cutánea, producción de colágeno, bronceado y bienestar general.",
  },
};

const productImageMap: Record<string, string> = {
  semaglutide: "/images/product-semaglutide.webp",
  tirzepatide: "/images/product-tirzepatide.webp",
  retatrutide: "/images/product-retatrutide.webp",
  tesamorelin: "/images/product-tesamorelin.webp",
  "ipamorelin-cjc": "/images/product-ipamorelin-cjc.webp",
  "ghk-cu": "/images/product-ghk-cu.webp",
  "melanotan-2": "/images/product-melanotan.webp",
};

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props) {
  const meta = categoryMeta[params.category];
  if (!meta) return {};
  return {
    title: `${meta.title} | GBH México`,
    description: meta.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const meta = categoryMeta[params.category];
  if (!meta) notFound();

  const categoryProducts = products.filter((p) => p.categorySlug === params.category);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="flex items-center gap-2 text-sm text-[#585c7d] mb-4">
              <Link href="/catalog" className="hover:text-[#d4af37]">Catálogo</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#d4af37]">{meta.title}</span>
            </div>
            <div className="text-center space-y-4 mb-16">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest">
                GBH México
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {meta.title}
              </h1>
              <p className="text-lg text-[#585c7d] max-w-2xl mx-auto">
                {meta.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => {
                const imgSrc = productImageMap[product.id] || "/images/product-peptide-glow.webp";
                return (
                  <Link
                    key={product.id}
                    href={`/catalog/${product.categorySlug}/${product.slug}`}
                    className="bg-white rounded-[16px] p-6 gold-shadow-deep border border-[#d4af37]/20 hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                  >
                    <div className="w-full aspect-square bg-[#f9f9ff] rounded-[12px] mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A1F3C] mb-2 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#585c7d] mb-4 leading-relaxed flex-1">
                      {product.tagline}
                    </p>
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