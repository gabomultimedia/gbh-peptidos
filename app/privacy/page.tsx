import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Q-PEPTIDES",
  description: "Aviso de privacidad de Q-PEPTIDES — laboratorio con sede en Singapur.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Aviso de Privacidad | Q-PEPTIDES",
    description: "Aviso de privacidad de Q-PEPTIDES — laboratorio con sede en Singapur.",
    url: "https://q-peptides.com/privacy",
    siteName: "Q-PEPTIDES",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aviso de Privacidad Q-PEPTIDES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso de Privacidad | Q-PEPTIDES",
    description: "Aviso de privacidad de Q-PEPTIDES — laboratorio con sede en Singapur.",
    images: ["/images/og-image.svg"],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main max-w-3xl">
            <h1 className="text-3xl font-bold text-[#003366] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Aviso de Privacidad
            </h1>
            <div className="prose prose-lg text-[#4A657A] space-y-6">
              <p className="text-sm text-[#00BFFF]">Última actualización: Mayo 2026</p>

              <h2 className="text-xl font-semibold text-[#003366]">Responsable del Tratamiento de Datos</h2>
              <p>Q-PEPTIDES, con sede en Singapur (2 International Business Park Road Strategy #01-04), es responsable del tratamiento de sus datos personales.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Datos Personales Recopilados</h2>
              <p>Podemos recopilar: nombre, correo electrónico, número de teléfono, cédula profesional, especialidad médica e información de contacto de su institución.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Finalidad del Tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registro y verificación de profesionales de la salud</li>
                <li>Comunicación sobre productos y servicios</li>
                <li>Cotizaciones y seguimiento comercial</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h2 className="text-xl font-semibold text-[#003366]">Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y administrativas para proteger sus datos contra acceso no autorizado, pérdida o alteración.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Derechos ARCO</h2>
              <p>Usted tiene derecho a: Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contacte a privacy@q-peptides.com.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Contacto</h2>
              <p>Para consultas sobre este aviso de privacidad: <span className="text-[#00BFFF]">privacy@q-peptides.com</span></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
