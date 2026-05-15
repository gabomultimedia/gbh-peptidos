import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones | GBH México",
  description: "Términos y condiciones de uso del sitio web GBH México.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main max-w-3xl">
            <h1 className="text-3xl font-bold text-[#1A1F3C] mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Términos y Condiciones
            </h1>
            <div className="prose prose-lg text-[#585c7d] space-y-6">
              <p className="text-sm text-[#d4af37]">Última actualización: Mayo 2026</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Objeto</h2>
              <p>GBH México proporciona información sobre productos biotecnológicos de grado médico exclusivamente a profesionales de la salud debidamente acreditados en México.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Venta Exclusiva a Profesionales</h2>
              <p>Los productos GBH están destinados exclusivamente a médicos, clínicas y profesionales de la salud con cédula profesional vigente. No se atiende al público general.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Verificación de Credentials</h2>
              <p>El equipo de GBH verificará la validez de la cédula profesional antes de procesar cualquier solicitud de compra o cotización.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Información de Producto</h2>
              <p>La información proporcionada en este sitio es de carácter técnico y científico. GBH no garantiza resultados específicos y recomienda la consulta con un profesional de la salud.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Propiedad Intelectual</h2>
              <p>Todo el contenido de este sitio, incluyendo textos, imágenes y logotipos, es propiedad de GBH Global Beauty & Health y está protegido por las leyes de propiedad intelectual mexicanas.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Limitación de Responsabilidad</h2>
              <p>GBH México no será responsable por daños derivados del uso incorrecto de sus productos. El usuario es responsable de verificar la compatibilidad y legalidad de uso en su jurisdicción.</p>

              <h2 className="text-xl font-semibold text-[#1A1F3C]">Contacto</h2>
              <p>Para consultas sobre estos términos: <span className="text-[#d4af37]">info@q-peptides.com</span></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}