import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://q-peptides.com"),
  title: {
    default: "Q Peptides — Péptidos de Grado Médico",
    template: "%s | Q Peptides",
  },
  description:
    "Laboratorio con sede en Singapur. Innovación en medicina estética regenerativa y optimización metabólica. Biotecnología de alta pureza certificada — third-party tested con COA verificado.",
  keywords: [
    "péptidos Singapur",
    "semaglutida",
    "tirzepatida",
    "GLP-1",
    "péptidos para adelgazar",
    "grado médico",
    "medicina regenerativa",
    "Q Peptides",
    "q-peptides.com",
    "peptides Singapore",
  ],
  authors: [{ name: "Q Peptides" }],
  creator: "Q Peptides",
  publisher: "Q Peptides",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://q-peptides.com",
    siteName: "Q Peptides",
    title: "Q Peptides — Péptidos de Grado Médico de Alta Pureza",
    description:
      "Laboratorio con sede en Singapur. Biotecnología de alta pureza certificada para expertos en salud y bienestar en México.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Q Peptides — Péptidos de Grado Médico de Alta Pureza 🇸🇬",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q Peptides — Péptidos de Grado Médico de Alta Pureza 🇸🇬",
    description:
      "Laboratorio con sede en Singapur. Third-party tested con COA verificado.",
    images: ["/images/og-image.svg"],
    creator: "@qpeptides",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}