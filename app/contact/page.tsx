import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Registro para Médicos",
  description: "Formulario de registro profesional para verificar cédula y acceso a productos Q-PEPTIDES.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Registro para Médicos | Q-PEPTIDES",
    description: "Formulario de registro profesional para verificar cédula y acceso a productos Q-PEPTIDES.",
    url: "https://q-peptides.com/contact",
    siteName: "Q-PEPTIDES",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Registro profesional Q-PEPTIDES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registro para Médicos | Q-PEPTIDES",
    description: "Formulario de registro profesional para verificar cédula y acceso a productos Q-PEPTIDES.",
    images: ["/images/og-image.svg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
