import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, ArrowRight, Mail, Phone } from "lucide-react";
import { CONTACT_PHONE_DISPLAY } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Solicitud enviada",
  description: "Tu solicitud de validación fue recibida. Q-PEPTIDES revisará tu registro y te contactará pronto.",
  alternates: {
    canonical: "/contact/thank-you",
  },
  openGraph: {
    title: "Solicitud enviada | Q-PEPTIDES",
    description: "Tu solicitud de validación fue recibida. Q-PEPTIDES revisará tu registro y te contactará pronto.",
    url: "https://q-peptides.com/contact/thank-you",
    siteName: "Q-PEPTIDES",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Solicitud enviada Q-PEPTIDES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicitud enviada | Q-PEPTIDES",
    description: "Tu solicitud de validación fue recibida. Q-PEPTIDES revisará tu registro y te contactará pronto.",
    images: ["/images/og-image.svg"],
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-[28px] brand-shadow-deep border border-[#00BFFF]/20 p-10 md:p-12 text-center space-y-8">
                <div className="w-20 h-20 rounded-full brand-gradient-bg flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>

                <div className="space-y-4">
                  <span className="brand-gradient-text text-sm font-semibold uppercase tracking-widest">
                    Validación recibida
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#003366]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Gracias, tu solicitud fue enviada
                  </h1>
                  <p className="text-lg text-[#4A657A] max-w-xl mx-auto">
                    Nuestro equipo revisará tu registro profesional y, si todo está correcto, te contactará en un plazo de 24 a 48 horas hábiles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="rounded-[18px] border border-[#00BFFF]/15 bg-[#F3F8FD] p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck className="w-5 h-5 text-[#00BFFF]" />
                      <h2 className="font-semibold text-[#003366]">Validación profesional</h2>
                    </div>
                    <p className="text-sm text-[#4A657A]">
                      Verificamos cédula, especialidad y datos de contacto antes de habilitar el acceso a la información de producto.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-[#00BFFF]/15 bg-[#F3F8FD] p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-[#00BFFF]" />
                      <h2 className="font-semibold text-[#003366]">Seguimiento por correo</h2>
                    </div>
                    <p className="text-sm text-[#4A657A]">
                      Si necesitamos confirmar algún dato, te escribiremos al correo que registraste.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#4A657A]">
                  <div className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00BFFF]" />
                    {CONTACT_PHONE_DISPLAY}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/catalog"
                    className="brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Ver catálogo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/"
                    className="border border-[#00BFFF]/40 text-[#003366] font-semibold px-8 py-4 rounded-[16px] hover:bg-[#F3F8FD] transition-all inline-flex items-center justify-center gap-2"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
