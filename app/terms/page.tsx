import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones | Q-PEPTIDES",
  description: "Términos y condiciones de Q Pepings — laboratorio con sede en Singapur.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main max-w-3xl">
            <h1 className="text-3xl font-bold text-[#003366] mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Términos y Condiciones
            </h1>
            <div className="prose prose-lg text-[#4A657A] space-y-6">
              <p className="text-sm text-[#00BFFF]">Última actualización: Mayo 2026</p>

              <h2 className="text-xl font-semibold text-[#003366]">Objeto</h2>
              <p>Q-PEPTIDES proporciona información sobre productos biotecnológicos de grado médico exclusivamente a profesionales de la salud debidamente acreditados.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Venta Exclusiva a Profesionales</h2>
              <p>Los productos Q-PEPTIDES están destinados exclusivamente a médicos, clínicas y profesionales de la salud con cédula profesional vigente.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Verificación de Credentials</h2>
              <p>El equipo de Q-PEPTIDES verificará la validez de la cédula profesional antes de procesar cualquier solicitud.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Información de Producto</h2>
              <p>La información proporcionada en este sitio es de carácter técnico y científico. Q-PEPTIDES no garantiza resultados específicos.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Propiedad Intelectual</h2>
              <p>Todo el contenido de este sitio es propiedad de Q-PEPTIDES y está protegido por las leyes de propiedad intelectual.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Limitación de Responsabilidad</h2>
              <p>Q-PEPTIDES no será responsable por daños derivados del uso incorrecto de sus productos.</p>

              <h2 className="text-xl font-semibold text-[#003366]">Contacto</h2>
              <p>Para consultas sobre estos términos: <span className="text-[#00BFFF]">info@q-peptides.com</span></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}