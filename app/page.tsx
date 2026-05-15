import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, Shield, Award, Star, Scale, Zap, Sparkles, Heart } from "lucide-react";

const stats = [
  { value: "99%+", label: "Pureza Certificada" },
  { value: "7+", label: "Péptidos Disponibles" },
  { value: "50+", label: "Clínicas Aliadas" },
  { value: "24h", label: "Soporte a Médicos" },
];

const featuredProducts = [
  {
    id: "semaglutide",
    name: "Semaglutida",
    category: "Control de Peso",
    image: "/images/product-semaglutide.webp",
    desc: "Análogo GLP-1 para control glucémico y pérdida de peso.",
  },
  {
    id: "tirzepatide",
    name: "Tirzepatida",
    category: "Control de Peso",
    image: "/images/product-tirzepatide.webp",
    desc: "Doble agonista GLP-1/GIP — nueva generación.",
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    category: "Regeneración",
    image: "/images/product-ghk-cu.webp",
    desc: "Péptido de cobre para regeneración cutánea.",
  },
  {
    id: "tesamorelin",
    name: "Tesamorelina",
    category: "Optimización GH",
    image: "/images/product-tesamorelin.webp",
    desc: "Análogo GHRH aprobado por FDA.",
  },
];

const whyGBH = [
  {
    icon: Shield,
    title: "Pureza Certificada",
    desc: "Cada lote verificado con análisis de pureza >99%.",
  },
  {
    icon: Award,
    title: "Grado Farmacéutico",
    desc: "Estándares de calidad farmacéutica en cada vial.",
  },
  {
    icon: Star,
    title: "Distribución Exclusiva",
    desc: "Venta solo a profesionales de salud con cédula vigente.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with background image */}
        <section className="relative py-32">
          <Image
            src="/images/hero-bg.webp"
            alt="GBH México - Péptidos de Grado Médico"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-0 bg-white/70" />
          <div className="relative container-main">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#d4af37]/30 bg-white/80 backdrop-blur-sm px-4 py-1.5 gold-shadow mb-6 animate-fade-in">
                <span className="gold-gradient-text text-xs font-semibold uppercase tracking-wider">
                  GBH Global Beauty & Health
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F3C] leading-tight mb-6 animate-fade-in-up" style={{ fontFamily: "DM Sans, sans-serif" }}>
                GBH México: Distribuidora Líder en Péptidos de Grado Médico
              </h1>
              <p className="text-xl text-[#585c7d] mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                Innovación en medicina estética regenerativa y optimización metabólica. Compuestos científicos de la más alta pureza certificados para la práctica médica profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <Link
                  href="/contact"
                  className="gold-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all gold-shadow-deep inline-flex items-center justify-center gap-2"
                >
                  Registro para Médicos
                </Link>
                <Link
                  href="/catalog"
                  className="bg-white/80 backdrop-blur border border-[#d4af37] text-[#1A1F3C] font-semibold px-8 py-4 rounded-[16px] hover:bg-white transition-all inline-flex items-center justify-center gap-2"
                >
                  Ver Catálogo
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1A1F3C] py-16">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-4xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest">
                Compuestos Destacados
              </span>
              <h2 className="text-3xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Productos GBH
              </h2>
              <p className="text-[#585c7d] max-w-xl mx-auto">
                Péptidos de alta pureza para la práctica médica profesional.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, i) => (
                <Link
                  key={product.id}
                  href={`/catalog/weight-loss/${product.id}`}
                  className="bg-white rounded-[20px] overflow-hidden gold-shadow-deep border border-[#d4af37]/20 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-square bg-[#f9f9ff] flex items-center justify-center p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={228}
                      height={228}
                      quality={75}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1A1F3C] mt-1 mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#585c7d]">{product.desc}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#d4af37] mt-4">
                      Ver ficha
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/catalog"
                className="gold-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all gold-shadow-deep inline-flex items-center gap-2"
              >
                Ver Todos los Productos
              </Link>
            </div>
          </div>
        </section>

        {/* Why GBH */}
        <section className="bg-[#f9f9ff] py-24">
          <div className="container-main">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest">
                Nuestra Propuesta
              </span>
              <h2 className="text-3xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                ¿Por qué elegir GBH?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyGBH.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[20px] p-8 gold-shadow-deep border border-[#d4af37]/20 text-center animate-fade-in-up hover:scale-105 transition-transform"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f9f9ff] flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1F3C] mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#585c7d]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Aviso */}
        <section className="bg-[#FFFBEB] py-12">
          <div className="container-main">
            <div className="flex items-center gap-6 bg-white p-8 rounded-[20px] gold-shadow border border-[#F59E0B]/30">
              <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#92400E] mb-1">
                  Aviso Importante: Venta Exclusiva a Profesionales
                </h3>
                <p className="text-sm text-[#585c7d]">
                  La distribución de los compuestos y péptidos ofrecidos por GBH México está estrictamente reservada para médicos, clínicas y profesionales de la salud debidamente acreditados con cédula profesional vigente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Catálogo de Péptidos
              </h2>
              <p className="text-[#585c7d] max-w-xl mx-auto">
                Explora nuestras categorías de compuestos de grado médico
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Control de Peso y Metabolismo",
                  desc: "Análogos de GLP-1 y otros péptidos para control glucémico, pérdida de peso y optimización metabólica.",
                  items: ["Semaglutida", "Tirzepatida", "Retatrutida"],
                  image: "/images/medical-cells.webp",
                  icon: Scale,
                  href: "/catalog/weight-loss",
                },
                {
                  title: "Optimización Hormona de Crecimiento",
                  desc: "Liberadores y análogos de hormona de crecimiento para regeneración celular, composición corporal y rendimiento.",
                  items: ["Tesamorelina", "Ipamorelina + CJC-1295"],
                  image: "/images/dna-strand.webp",
                  icon: Zap,
                  href: "/catalog/gh-optimization",
                },
                {
                  title: "Regeneración y Skin Health",
                  desc: "Péptidos para regeneración cutánea, producción de colágeno, bronceado y bienestar general.",
                  items: ["GHK-Cu Cobre Tripéptido", "Melanotano-2"],
                  image: "/images/wellness.webp",
                  icon: Sparkles,
                  href: "/catalog/regeneration",
                },
                {
                  title: "Rendimiento y Bienestar",
                  desc: "Péptidos para optimización del bienestar, rendimiento cognitivo y físico.",
                  items: ["PT-141", "Kisspeptin-10"],
                  image: "/images/image-support.webp",
                  icon: Heart,
                  href: "/catalog",
                },
              ].map((cat, i) => {
                const IconComponent = cat.icon;
                const imgWidth = cat.title === "Control de Peso y Metabolismo" ? 276 :
                                 cat.title === "Optimización Hormona de Crecimiento" ? 276 :
                                 cat.title === "Regeneración y Skin Health" ? 276 : 276;
                const imgHeight = cat.title === "Control de Peso y Metabolismo" ? 414 :
                                  cat.title === "Optimización Hormona de Crecimiento" ? 414 :
                                  cat.title === "Regeneración y Skin Health" ? 276 : 276;
                return (
                <div
                  key={i}
                  className="bg-white rounded-[20px] overflow-hidden gold-shadow-deep border border-[#d4af37]/20 hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-40 bg-[#f9f9ff] relative overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={75}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3C]/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1A1F3C] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#585c7d] mb-4">{cat.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-[#735c00]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:text-[#F5E17A] transition-colors"
                    >
                      Ver péptidos
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-[#1A1F3C] py-20">
          <div className="container-main text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              ¿Desea adquirir péptidos de grado médico?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Complete el registro de profesional de la salud para acceder a la información de compra y cotización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="gold-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Acceso Profesional
              </Link>
              <Link
                href="/clinics"
                className="border border-[#d4af37]/50 text-white font-semibold px-8 py-4 rounded-[16px] hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
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