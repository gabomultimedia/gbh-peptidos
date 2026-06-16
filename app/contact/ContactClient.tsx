"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, User, FileText, Heart } from "lucide-react";
import { CONTACT_PHONE_PLACEHOLDER } from "@/lib/site-contact";

const steps = [
  { id: 1, icon: User, label: "Datos Personales" },
  { id: 2, icon: FileText, label: "Validación" },
  { id: 3, icon: Heart, label: "Perfil Clínico" },
];

const specialties = [
  "Medicina Estética",
  "Endocrinología",
  "Medicina Antiaging",
  "Medicina General",
  "Dermatología",
  "Otra",
];

export default function ContactClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    specialty: "",
    institution: "",
    comments: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo enviar el formulario.");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        license: "",
        specialty: "",
        institution: "",
        comments: "",
      });
      router.push("/contact/thank-you");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Ocurrió un error inesperado.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <span className="brand-gradient-text text-sm font-semibold uppercase tracking-widest">
                Registro Profesional
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#003366]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Registro para Médicos
              </h1>
              <p className="text-lg text-[#4A657A]">
                El acceso a nuestros productos está restringido a profesionales de la salud. Complete el formulario para verificar su licencia profesional.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-8 mb-12">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i === 0;
                  return (
                    <div key={step.id} className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive
                            ? "brand-gradient-bg text-white"
                            : "bg-[#F3F8FD] border border-[#00BFFF]/30 text-[#4A657A]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-sm font-medium ${isActive ? "text-[#003366]" : "text-[#4A657A]"}`}>
                        {step.label}
                      </span>
                      {i < steps.length - 1 && <div className="w-16 h-px bg-[#00BFFF]/30 ml-4" />}
                    </div>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-[24px] brand-shadow-deep border border-[#00BFFF]/20 p-8 space-y-6">
                {errorMessage ? (
                  <div className="rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-full-name" className="block text-sm font-semibold text-[#003366] mb-2">
                      Nombre Completo <span className="text-[#00BFFF]">*</span>
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                      placeholder="Dr. Juan Pérez García"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#003366] mb-2">
                      Correo Electrónico Profesional <span className="text-[#00BFFF]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                      placeholder="juan.perez@clinica.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#003366] mb-2">
                      Teléfono de Contacto <span className="text-[#00BFFF]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                      placeholder={CONTACT_PHONE_PLACEHOLDER}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-license" className="block text-sm font-semibold text-[#003366] mb-2">
                      Cédula Profesional <span className="text-[#00BFFF]">*</span>
                    </label>
                    <input
                      id="contact-license"
                      type="text"
                      required
                      value={formData.license}
                      onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                      placeholder="12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-specialty" className="block text-sm font-semibold text-[#003366] mb-2">
                      Especialidad Médica <span className="text-[#00BFFF]">*</span>
                    </label>
                    <select
                      id="contact-specialty"
                      required
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                    >
                      <option value="">Seleccionar especialidad</option>
                      {specialties.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-institution" className="block text-sm font-semibold text-[#003366] mb-2">
                      Nombre de Clínica o Institución
                    </label>
                    <input
                      id="contact-institution"
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                      placeholder="Clínica Esperanza"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-comments" className="block text-sm font-semibold text-[#003366] mb-2">
                    Comentarios o Consultas
                  </label>
                  <textarea
                    id="contact-comments"
                    rows={4}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full px-4 py-3 rounded-[16px] border border-[#00BFFF]/30 bg-white text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 resize-none"
                    placeholder="Describa brevemente su consulta o el tipo de productos que le interesan..."
                  />
                </div>

                <div className="bg-[#F3F8FD] rounded-[16px] p-6 border border-[#00BFFF]/10">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#00BFFF] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#4A657A] leading-relaxed">
                      Al enviar este formulario, usted declara ser profesional de la salud con cédula profesional vigente. Q-PEPTIDES se reserva el derecho de verificar la autenticidad de la información proporcionada.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all brand-shadow-deep inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Enviando..." : "Solicitar Verificación de Cuenta"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
