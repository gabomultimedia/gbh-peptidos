import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import { getProductImagePath } from "@/lib/product-images";
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
    color: "#00BFFF",
    title: "Control de Peso y Metabolismo",
    description: "Análogos de GLP-1 y otros péptidos para control glucémico, pérdida de peso y optimización metabólica.",
  },
  "gh-optimization": {
    color: "#4A657A",
    title: "Optimización Hormona de Crecimiento",
    description: "Liberadores y análogos de hormona de crecimiento para regeneración celular, composición corporal y rendimiento.",
  },
  regeneration: {
    color: "#F59E0B",
    title: "Regeneración y Skin Health",
    description: "Péptidos para regeneración cutánea, producción de colágeno, bronceado y bienestar general.",
  },
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
    title: `${meta.title} | Q-PEPTIDES`,
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
            <div className="flex items-center gap-2 text-sm text-[#4A657A] mb-4">
              <Link href="/catalog" className="hover:text-[#00BFFF]">Catálogo</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#00BFFF]">{meta.title}</span>
            </div>
            <div className="text-center space-y-4 mb-16">
              <span className="brand-gradient-text text-sm font-semibold uppercase tracking-widest">
                Q-PEPTIDES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#003366]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {meta.title}
              </h1>
              <p className="text-lg text-[#4A657A] max-w-2xl mx-auto">
                {meta.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => {
                const imgSrc = getProductImagePath(product.id);
                return (
                  <Link
                    key={product.id}
                    href={`/catalog/${product.categorySlug}/${product.slug}`}
                    className="bg-white rounded-[16px] p-6 brand-shadow-deep border border-[#00BFFF]/20 hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
                  >
                    <div className="w-full aspect-square bg-[#F3F8FD] rounded-[12px] mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#00BFFF] mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#003366] mb-2 group-hover:text-[#00BFFF] transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#4A657A] mb-4 leading-relaxed flex-1">
                      {product.tagline}
                    </p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((f) => {
                        const Icon = iconMap[f.icon] || FlaskConical;
                        return (
                          <div key={f.title} className="flex items-center gap-2 text-xs text-[#4A657A]">
                            <Icon className="w-4 h-4 text-[#00BFFF]" />
                            <span>{f.title}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#00BFFF]">
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
        <section className="bg-[#F0F7FC] py-12">
          <div className="container-main">
            <div className="flex items-center gap-6 bg-white p-8 rounded-[16px] brand-shadow border border-[#F59E0B]/30">
              <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                <svg width="28" height="28" fill="none" stroke="#F59E0B" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#92400E] mb-1">
                  Aviso Importante: Venta Exclusiva a Profesionales
                </h3>
                <p className="text-sm text-[#4A657A]">
                  La distribución de los compuestos ofrecidos por Q-PEPTIDES está estrictamente reservada para médicos, clínicas y profesionales de la salud debidamente acreditados con cédula profesional vigente.
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
