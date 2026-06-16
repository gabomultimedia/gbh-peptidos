import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Star, Phone, ExternalLink, ChevronRight } from "lucide-react";
import { CONTACT_PHONE_DISPLAY } from "@/lib/site-contact";

const clinics = [
  {
    id: "vive-medical-spa",
    name: "Vive Medical Spa Tijuana",
    specialty: "Medicina Estética y Regenerativa",
    location: "Zona Río, Tijuana, B.C.",
    featured: true,
    badge: "Clínica Destacada",
    description:
      "Una clínica de vanguardia dedicada a la salud integral, utilizando las técnicas más innovadoras y productos certificados de Q-PEPTIDES para garantizar la seguridad y satisfacción de cada paciente.",
    services: [
      "Medicina estética regenerativa",
      "Programas de optimización hormonal",
      "Tratamientos de rejuvenecimiento",
      "Wellness integral",
    ],
    tags: ["Optimización Metabólica", "Terapia Peptídica IV", "Skin Health"],
    phone: CONTACT_PHONE_DISPLAY,
    website: "https://vivemedicalspa.com",
  },
  {
    id: "aurelian-clinic",
    name: "Aurelian Clinic CDMX",
    specialty: "Medicina Antiaging y Longevidad",
    location: "Polanco, Ciudad de México",
    featured: false,
    badge: null,
    description:
      "Centro especializado en medicina de longevidad y protocolos de optimización hormonal. Equipo multidisciplinario con certificación en terapia peptídica.",
    services: [
      "Evaluación de biomarkers",
      "Protocolos de optimización hormonal",
      "Terapia peptídica personalizada",
      "Nutrición clínica",
    ],
    tags: ["Antiaging", "Longevidad", "Medicina Funcional"],
    phone: CONTACT_PHONE_DISPLAY,
    website: "#",
  },
  {
    id: "regen-center",
    name: "Regen Center Monterrey",
    specialty: "Regeneración Tisular y Medicina Orthomolecular",
    location: "San Pedro Garza García, Nuevo León",
    featured: false,
    badge: null,
    description:
      "Centro de investigación y tratamiento en medicina regenerativa. Especializados en aplicaciones de péptidos para recuperación deportiva y antiaging.",
    services: [
      "Regeneración tisular",
      "Medicina ortomolecular",
      "Recuperación deportiva",
      "Terapias IV",
    ],
    tags: ["Regeneración", "Deportología", "IV Therapy"],
    phone: CONTACT_PHONE_DISPLAY,
    website: "#",
  },
  {
    id: "biotech-wellness",
    name: "Biotech Wellness Guadalajara",
    specialty: "Biotecnología Aplicada al Bienestar",
    location: "Zapopan, Jalisco",
    featured: false,
    badge: null,
    description:
      "Clínica de última generación enfocada en la aplicación de biotecnología para el bienestar integral. Protocols personalizados de medicina estética y antiaging.",
    services: [
      "Biotecnología wellness",
      "Análisis genético",
      "Protocolos antiaging",
      "Medicina estética avanzada",
    ],
    tags: ["Biotecnología", "Genética", "Wellness"],
    phone: CONTACT_PHONE_DISPLAY,
    website: "#",
  },
];

export default function ClinicsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-white py-24">
          <div className="container-main">
            <div className="text-center space-y-4 mb-16">
              <span className="brand-gradient-text text-sm font-semibold uppercase tracking-widest">
                Red de Clínicas
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#003366]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Clínicas Certificadas Q-PEPTIDES
              </h1>
              <p className="text-lg text-[#4A657A] max-w-2xl mx-auto">
                Encuentre clínicas autorizadas donde realizar sus tratamientos con seguridad y estándares profesionales. Todos los centros certificados utilizan productos Q-PEPTIDES de grado médico.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A657A]" />
                <input
                  type="text"
                  placeholder="Buscar clínica o especialidad..."
                  className="w-full pl-12 pr-4 py-4 rounded-[16px] border border-[#00BFFF]/30 bg-white brand-shadow text-[#003366] placeholder:text-[#4A657A]/60 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Todas", "Medicina Estética", "Optimización Hormonal", "Wellness", "Antiaging", "Regeneración"].map(
                (filter, i) => (
                  <button
                    key={i}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      i === 0
                        ? "brand-gradient-bg text-white"
                        : "border border-[#00BFFF]/30 text-[#003366] hover:border-[#00BFFF] hover:bg-[#F3F8FD]"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            {/* Clinics Grid */}
            <div className="space-y-8">
              {/* Featured Clinic */}
              {clinics
                .filter((c) => c.featured)
                .map((clinic) => (
                  <div
                    key={clinic.id}
                    className="bg-white rounded-[24px] brand-shadow-deep border border-[#00BFFF]/30 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Image area */}
                      <div className="lg:col-span-1 relative min-h-[320px] border-r border-[#00BFFF]/10 bg-[#F3F8FD]">
                        <Image
                          src="/optimized/contacto_imagen_sucursal.webp"
                          alt="Sucursal VIVE MED SPA"
                          fill
                          priority
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/55 via-transparent to-transparent" />
                        <div className="absolute left-6 right-6 bottom-6 space-y-3">
                          {clinic.badge && (
                            <span className="inline-flex items-center gap-1 bg-[#00BFFF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                              <Star className="w-3 h-3" />
                              {clinic.badge}
                            </span>
                          )}
                          <div className="rounded-[16px] bg-white/90 backdrop-blur px-4 py-3">
                            <p className="text-sm font-semibold text-[#003366]">{clinic.name}</p>
                            <p className="text-xs text-[#4A657A]">{clinic.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 p-8 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-[#003366] mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                            {clinic.name}
                          </h3>
                          <p className="text-[#00BFFF] font-medium">{clinic.specialty}</p>
                        </div>

                        <p className="text-[#4A657A] leading-relaxed">{clinic.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {clinic.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full border border-[#4A657A]/20 text-xs text-[#4A657A] bg-[#F3F8FD]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#00BFFF]/10">
                          <div className="flex items-center gap-2 text-sm text-[#4A657A]">
                            <MapPin className="w-4 h-4 text-[#00BFFF]" />
                            {clinic.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#4A657A]">
                            <Phone className="w-4 h-4 text-[#00BFFF]" />
                            {clinic.phone}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={clinic.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brand-gradient-bg text-white font-semibold px-6 py-3 rounded-[16px] hover:opacity-90 transition-all inline-flex items-center gap-2"
                          >
                            Visitar Sitio
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <button className="border border-[#00BFFF] text-[#003366] font-semibold px-6 py-3 rounded-[16px] hover:bg-[#F3F8FD] transition-all inline-flex items-center gap-2">
                            Solicitar Cita
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Standard Clinics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinics
                  .filter((c) => !c.featured)
                  .map((clinic) => (
                    <div
                      key={clinic.id}
                      className="bg-white rounded-[16px] p-8 brand-shadow border border-[#00BFFF]/20 hover:-translate-y-1 transition-transform duration-300"
                    >
                      <h3 className="text-lg font-bold text-[#003366] mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {clinic.name}
                      </h3>
                      <p className="text-[#00BFFF] text-sm font-medium mb-3">{clinic.specialty}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {clinic.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full border border-[#4A657A]/20 text-xs text-[#4A657A] bg-[#F3F8FD]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2 mb-6 text-sm text-[#4A657A]">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[#00BFFF]" />
                          {clinic.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-[#00BFFF]" />
                          {clinic.phone}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="flex-1 brand-gradient-bg text-white text-sm font-medium py-2 rounded-[12px] hover:opacity-90 transition-all">
                          Visitar
                        </button>
                        <button className="flex-1 border border-[#00BFFF]/30 text-[#003366] text-sm font-medium py-2 rounded-[12px] hover:bg-[#F3F8FD] transition-all">
                          Contactar
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gold Banner */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 brand-gradient-bg opacity-10" />
          <div className="container-main relative z-10 text-center">
            <h2 className="text-2xl font-bold text-[#003366] mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Estándar Oro Q-PEPTIDES
            </h2>
            <p className="text-[#4A657A] max-w-xl mx-auto mb-6">
              Todas las clínicas certificadas cumplen con nuestros estándares de calidad, seguridad y protocolos de aplicación. Encuentre el centro más cercano a usted.
            </p>
            <Link
              href="/contact"
              className="brand-gradient-bg text-white font-semibold px-8 py-4 rounded-[16px] hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              Registrar su Clínica
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
