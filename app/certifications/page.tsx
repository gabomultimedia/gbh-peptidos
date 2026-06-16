import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, FileCheck, Award, FlaskConical, Microscope, Droplets, Atom, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Certificaciones | Q-PEPTIDES",
  description: "Certificaciones y estándares de calidad Q-PEPTIDES — COA, HPLC, LC-MS, cGMP, ISO 17025. Laboratorio con sede en Singapur.",
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
    desc: "Detecta trazas de metales pesados (Pb, As, Hg, Cd) mediante ICP-MS y pruebas complementarias.",
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
              <span className="brand-gradient-text text-sm font-semibold uppercase tracking-widest animate-fade-in">
                🇸🇬 Singapur · Third-party tested · COA verificado
              </span>
              <h1 className="text-4xl font-bold text-[#003366] animate-fade-in-up" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Certificaciones Q-PEPTIDES
              </h1>
              <p className="text-lg text-[#4A657A] max-w-2xl mx-auto animate-fade-in-up">
                Todos nuestros compuestos pasan por verificación de terceros. Cada lote incluye COA completo con resultados de HPLC y Mass Spec.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-[20px] p-8 brand-shadow-deep border border-[#00BFFF]/20 text-center animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F3F8FD] flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#003366] mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {cert.title}
                    </h3>
                    <p className="text-[#4A657A]">{cert.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 bg-[#F3F8FD] rounded-[20px] p-8 brand-shadow border border-[#00BFFF]/20 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <h3 className="text-xl font-bold text-[#003366] mb-4 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Transparencia de Lote
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#00BFFF] mb-1">🇸🇬</div>
                  <p className="text-sm text-[#4A657A]">Laboratorio certificado en Singapur</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00BFFF] mb-1">📋</div>
                  <p className="text-sm text-[#4A657A]">COA + HPLC + Mass Spec por lote</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00BFFF] mb-1">🔬</div>
                  <p className="text-sm text-[#4A657A]">Third-party verified</p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
              <Link
                href="/contact"
                className="brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all brand-shadow-deep inline-flex items-center gap-2 hover:scale-105 transition-transform"
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
