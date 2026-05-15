import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso de Privacidad | GBH México",
  description: "Aviso de privacidad de GBH México. Información sobre cómo protegemos sus datos personales.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main max-w-3xl">
            <h1 className="text-3xl font-bold text-[#1A1F3C] mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Aviso de Privacidad
            </h1>
            <div className="prose prose-lg text-[#585c7d] space-y-6">
              <p className="text-sm text-[#d4af37]">Última actualización: Mayo 2026</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Responsable del Tratamiento de Datos</h2>
              <p>GBH Global Beauty & Health, con domicilio en México, es responsable del tratamiento de sus datos personales conforme a este aviso de privacidad.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Datos Personales Recopilados</h2>
              <p>Podemos recopilar: nombre, correo electrónico, número de teléfono, cédula profesional, especialidad médica e información de contacto de su institución.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Finalidad del Tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registro y verificación de profesionales de la salud</li>
                <li>Comunicación sobre productos y servicios</li>
                <li>Cotizaciones y seguimiento comercial</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y administrativas para proteger sus datos contra acceso no autorizado, pérdida o alteración.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Derechos ARCO</h2>
              <p>Usted tiene derecho a: Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contacte a privacy@q-peptides.com.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Contacto</h2>
              <p>Para consultas sobre este aviso de privacidad: <span className="text-[#d4af37]">privacy@q-peptides.com</span></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}