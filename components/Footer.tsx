import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  enlaces: [
    { label: "Aviso de Privacidad", href: "/privacy" },
    { label: "Términos y Condiciones", href: "/terms" },
    { label: "Certificaciones", href: "/certifications" },
    { label: "Contacto", href: "/contact" },
  ],
  productos: [
    { label: "Control de Peso", href: "/catalog/weight-loss" },
    { label: "Optimización Hormonal", href: "/catalog/gh-optimization" },
    { label: "Regeneración", href: "/catalog/regeneration" },
    { label: "Ver Catálogo", href: "/catalog" },
  ],
};

export default function Footer() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20obtener%20información%20sobre%20los%20péptidos%20de%20GBH%20México"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <footer className="bg-[#1A1F3C] w-full py-12">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#ffffff]">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="GBH México"
                  width={160}
                  height={54}
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm opacity-80 max-w-xs">
                Distribuidores de Grado Farmacéutico. Proveedores de confianza para la medicina estética y regenerativa.
              </p>
            </div>

            {/* Productos */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#F5E17A] font-bold text-sm mb-2">Productos</h4>
              {footerLinks.productos.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-[#F5E17A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#F5E17A] font-bold text-sm mb-2">Enlaces</h4>
              {footerLinks.enlaces.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-[#F5E17A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#F5E17A] font-bold text-sm mb-2">Contacto</h4>
              <p className="text-sm opacity-80 flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@q-peptides.com
              </p>
              <p className="text-sm opacity-80 flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +52 (55) 1234 5678
              </p>
              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#128C7E] transition-colors mt-2"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Developed by Abundiss */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-xs text-white/50">
              Desarrollado por{" "}
              <a
                href="https://abundiss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:text-[#F5E17A] transition-colors"
              >
                Abundiss Services
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-4 pt-4 text-center text-xs opacity-60">
            © 2026 GBH Global Beauty & Health. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}