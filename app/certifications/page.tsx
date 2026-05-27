import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, FileCheck, Award, FlaskConical, Microscope, Droplets, Atom, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Certificaciones | Q Peptides",
  description: "Certificaciones y estándares de calidad Q Peptides — COA, HPLC, LC-MS, cGMP, ISO 17025. Laboratorio con sede en Singapur.",
};

const certifications = [
  {
    icon: FileCheck,
    title: "COA (Certificate of Analysis)",
    desc: "Documento principal del lote. Incluye pureza, identidad, número de lote y métodos analíticos validados.",
  },
  {
    icon: Microscope,
    title: "HPLC",
    desc: "High-Performance Liquid Chromatography — prueba estándar para verificar pureza. Ideal: ≥98–99%.",
  },
  {
    icon: Atom,
    title: "LC-MS / Mass Spectrometry",
    desc: "Confirma el peso molecular e identidad exacta del péptido mediante espectrometría de masas.",
  },
  {
    icon: FlaskConical,
    title: "UPLC",
    desc: "Ultra-Performance Liquid Chromatography — versión avanzada con mayor sensibilidad y resolución.",
  },
  {
    icon: Shield,
    title: "Endotoxin Testing",
    desc: "Detecta endotoxinas bacterianas (pirógenos). Crítico para productos inyectables — límite <0.5 EU/mL.",
  },
  {
    icon: Droplets,
    title: "Sterility Testing",
    desc: "Verifica ausencia de contaminación microbiológica en el producto final.",
  },
  {
    icon: Shield,
    title: "Heavy Metals Testing (ICP-MS)",
    desc: "Detecta trazas de metales pesados (Pb, As, Hg, Cd) mediante ICP-MS.透 Or testing.",
  },
  {
    icon: Award,
    title: "ISO/IEC 17025 Certification",
    desc: "Estándar internacional para laboratorios de ensayos y calibración. Valida competencia analítica.",
  },
  {
    icon: Award,
    title: "cGMP / GMP Certification",
    desc: "Good Manufacturing Practice certificada. Garantiza calidad farmacéutica en cada lote.",
  },
  {
    icon: CheckCircle,
    title: "USP / EP Compliance",
    desc: "Cumplimiento de farmacopeas estadounidense (USP) y europea (EP) — pureza e identidad garantizadas.",
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
                🇸🇬 Singapur · Third-party tested · COA verificado
              </span>
              <h1 className="text-4xl font-bold text-[#1A1F3C] animate-fade-in-up" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Certificaciones Q Peptides
              </h1>
              <p className="text-lg text-[#585c7d] max-w-2xl mx-auto animate-fade-in-up">
                Todos nuestros compuestos undergo thorough third-party testing. Cada lote incluye COA completo con resultados de HPLC y Mass Spec.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[20px] p-8 gold-shadow-deep border border-[#d4af37]/20 text-center animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
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
            <div className="mt-12 bg-[#f9f9ff] rounded-[20px] p-8 gold-shadow border border-[#d4af37]/20 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <h3 className="text-xl font-bold text-[#1A1F3C] mb-4 text-center" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Transparendcia de Lote
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#d4af37] mb-1">🇸🇬</div>
                  <p className="text-sm text-[#585c7d]">Laboratorio certificado en Singapur</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#d4af37] mb-1">📋</div>
                  <p className="text-sm text-[#585c7d]">COA + HPLC + Mass Spec por lote</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#d4af37] mb-1">🔬</div>
                  <p className="text-sm text-[#585c7d]">Third-party verified</p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
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