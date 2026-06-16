import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getProductBySlug } from "@/lib/products";
import { getProductImagePath } from "@/lib/product-images";
import {
  FlaskConical,
  Zap,
  ShieldCheck,
  TrendingDown,
  Star,
  CheckCircle,
  ChevronLeft,
  FileText,
  Phone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Zap,
  ShieldCheck,
  TrendingDown,
  Star,
};

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-[#F3F8FD] py-4 border-b border-[#00BFFF]/20">
          <div className="container-main">
            <div className="flex items-center gap-2 text-sm text-[#4A657A]">
              <Link href="/catalog" className="hover:text-[#00BFFF] transition-colors flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                Catálogo
              </Link>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-[#00BFFF] font-medium">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-[#00BFFF]/30 bg-[#F3F8FD] px-4 py-1.5">
                  <span className="brand-gradient-text text-xs font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {product.name}
                </h1>

                <p className="text-xl text-[#4A657A] leading-relaxed">
                  {product.tagline}
                </p>

                <p className="text-base text-[#151c27] leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="button" className="brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all brand-shadow-deep inline-flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Descargar Ficha Técnica
                  </button>
                  <Link
                    href="/contact"
                    className="border border-[#00BFFF] text-[#003366] font-semibold px-8 py-4 rounded-[16px] hover:bg-[#F3F8FD] transition-all inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Solicitar Cotización
                  </Link>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI0Q0QUYzNyIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')] opacity-50 rounded-[32px]" />
                <div className="relative w-[400px] h-[400px] bg-white rounded-[24px] brand-shadow-deep flex items-center justify-center border border-[#00BFFF]/20 p-8">
                  <Image
                    src={getProductImagePath(product.id)}
                    alt={product.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                    sizes="(min-width: 1024px) 400px, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#F3F8FD] py-20">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003366]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Características del Producto
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.features.map((feature) => {
                const Icon = iconMap[feature.icon] || FlaskConical;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-[16px] p-6 brand-shadow border border-[#00BFFF]/20"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F3F8FD] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#003366] mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#4A657A]">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mechanism & Benefits */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mechanism */}
              <div className="bg-[#F3F8FD] rounded-[24px] p-8 brand-shadow">
                <h2 className="text-2xl font-bold text-[#003366] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Mecanismo de Acción
                </h2>
                <p className="text-[#4A657A] leading-relaxed mb-6">{product.mechanism}</p>
                <div className="flex items-center gap-2 text-sm text-[#00BFFF] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  Respaldado por evidencia clínica
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-[#F3F8FD] rounded-[24px] p-8 brand-shadow">
                <h2 className="text-2xl font-bold text-[#003366] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Beneficios Clínicos
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span className="text-[#151c27]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dosage Table */}
        <section className="bg-[#F3F8FD] py-20">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#003366] mb-8 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Protocolo de Dosificación
              </h2>
              <div className="bg-white rounded-[24px] brand-shadow-deep overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="text-left px-8 py-4 text-sm font-semibold">Periodo</th>
                      <th className="text-left px-8 py-4 text-sm font-semibold">Dosis</th>
                    </tr>
                  </thead>
                  <tbody>
                  {product.dosageWeeks.map((row, i) => (
                      <tr key={row.week} className={i % 2 === 0 ? "bg-white" : "bg-[#F3F8FD]"}>
                        <td className="px-8 py-4 text-sm text-[#003366] font-medium">{row.week}</td>
                        <td className="px-8 py-4 text-sm text-[#4A657A]">{row.dose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Side Effects & Evidence */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Side Effects */}
              <div className="rounded-[24px] border border-[#00BFFF]/20 p-8">
                <h2 className="text-2xl font-bold text-[#003366] mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Efectos Secundarios Reportados
                </h2>
                <div className="space-y-3">
                  {product.sideEffects.map((effect) => (
                    <div key={effect} className="flex items-center gap-3 p-3 bg-[#F3F8FD] rounded-[8px]">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="text-sm text-[#151c27]">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence */}
              <div className="rounded-[24px] border border-[#00BFFF]/20 p-8">
                <h2 className="text-2xl font-bold text-[#003366] mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Evidencia Clínica
                </h2>
                <p className="text-[#4A657A] leading-relaxed mb-6">{product.evidence}</p>
                <div className="flex items-center gap-2 text-[#00BFFF] font-semibold text-sm">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Producto certificado por Q-PEPTIDES
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-[#003366] py-20">
          <div className="container-main text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              ¿Desea adquirir {product.name}?
            </h2>
            <p className="text-[#ffffff]/80 mb-8 max-w-xl mx-auto">
              Complete el registro de profesional de la salud para acceder a la información de compra y cotización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Acceso Profesional
              </Link>
              <Link
                href="/clinics"
                className="border border-[#00BFFF]/50 text-white font-semibold px-8 py-4 rounded-[16px] hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Ver Clínicas Certificadas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
