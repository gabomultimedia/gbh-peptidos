import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, FileCheck, Award } from "lucide-react";

export const metadata = {
  title: "Certificaciones | GBH México",
  description: "Certificaciones y estándares de calidad GBH México.",
};

const certifications = [
  {
    icon: Shield,
    title: "Grado Farmacéutico",
    desc: "Todos nuestros productos cumplen con estándares de pureza farmacéutica equivalentes a especificaciones USP/FCC.",
  },
  {
    icon: FileCheck,
    title: "Análisis de Lote",
    desc: "Cada lote incluye certificado de análisis con resultados de pureza, esterilidad y potencia.",
  },
  {
    icon: Award,
    title: "Cadena de Custodia",
    desc: "Mantenimiento de cadena de frío y custodia documentada desde manufactura hasta entrega final.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="text-center mb-16 space-y-4">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest animate-fade-in">
                Estándares de Calidad
              </span>
              <h1 className="text-4xl font-bold text-[#1A1F3C] animate-fade-in-up" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Certificaciones GBH
              </h1>
              <p className="text-lg text-[#585c7d] max-w-2xl mx-auto animate-fade-in-up">
                Comprometidos con los más altos estándares de calidad farmacéutica en cada vial que distribuimos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[20px] p-8 gold-shadow-deep border border-[#d4af37]/20 text-center animate-fade-in-up"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f9f9ff] flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1F3C] mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {cert.title}
                    </h3>
                    <p className="text-[#585c7d]">{cert.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "500ms" }}>
              <Link
                href="/contact"
                className="gold-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all gold-shadow-deep inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Solicitar Información de Certificaciones
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}