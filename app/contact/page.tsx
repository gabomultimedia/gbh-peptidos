"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, CheckCircle, User, FileText, Heart } from "lucide-react";

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
  "另一 (Otra)",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    specialty: "",
    institution: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
              <span className="gold-gradient-text text-sm font-semibold uppercase tracking-widest">
                Registro Profesional
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Registro para Médicos
              </h1>
              <p className="text-lg text-[#585c7d]">
                El acceso a nuestros productos está restringido a profesionales de la salud. Complete el formulario para verificar su licencia profesional.
              </p>
            </div>

            {/* Success State */}
            {submitted ? (
              <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-[24px] gold-shadow-deep border border-[#d4af37]/20 p-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full gold-gradient-bg flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1F3C]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Solicitud Recibida
                    </h2>
                    <p className="text-[#585c7d] mt-2">
                      Su solicitud ha sido recibida. Nuestro equipo se pondrá en contacto con usted en un plazo de 24-48 horas hábiles para completar el proceso de verificación.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-[#d4af37]">
                    <ShieldCheck className="w-4 h-4" />
                    Información protegida bajo nuestros protocolos de privacidad
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-8 mb-12">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = i === 0;
                    return (
                      <div key={step.id} className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isActive
                              ? "gold-gradient-bg text-white"
                              : "bg-[#f9f9ff] border border-[#d4af37]/30 text-[#585c7d]"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-sm font-medium ${isActive ? "text-[#1A1F3C]" : "text-[#585c7d]"}`}>
                          {step.label}
                        </span>
                        {i < steps.length - 1 && (
                          <div className="w-16 h-px bg-[#d4af37]/30 ml-4" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-[24px] gold-shadow-deep border border-[#d4af37]/20 p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Nombre Completo <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                        placeholder="Dr. Juan Pérez García"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Correo Electrónico Profesional <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                        placeholder="juan.perez@clinica.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Teléfono de Contacto <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                        placeholder="+52 (55) 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Cédula Profesional <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.license}
                        onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                        placeholder="12345678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Especialidad Médica <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        required
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
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
                      <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                        Nombre de Clínica o Institución
                      </label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                        placeholder="Clínica Esperanza"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1A1F3C] mb-2">
                      Comentarios o Consultas
                    </label>
                    <textarea
                      rows={4}
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-4 py-3 rounded-[16px] border border-[#d4af37]/30 bg-white text-[#1A1F3C] placeholder:text-[#585c7d]/60 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 resize-none"
                      placeholder="Describa brevemente su consulta o el tipo de productos que le interesan..."
                    />
                  </div>

                  {/* Legal Notice */}
                  <div className="bg-[#f9f9ff] rounded-[16px] p-6 border border-[#d4af37]/10">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#585c7d] leading-relaxed">
                        Al enviar este formulario, usted declara ser profesional de la salud con cédula profesional vigente. Q Peptides se reserva el derecho de verificar la autenticidad de la información proporcionada.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all gold-shadow-deep inline-flex items-center justify-center gap-2"
                  >
                    Solicitar Verificación de Cuenta
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}