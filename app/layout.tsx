import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://q-peptides.com"),
  title: {
    default: "GBH México: Distribuidora Líder en Péptidos de Grado Médico | q-peptides.com",
    template: "%s | GBH México",
  },
  description:
    "Innovación en medicina estética regenerativa y optimización metabólica. Suministramos biotecnología de alta pureza certificada para expertos en salud y bienestar en México.",
  keywords: [
    "péptidos México",
    "semaglutida",
    "tirzepatida",
    "GLP-1 México",
    "péptidos para adelgazar",
    "grado médico",
    "medicina regenerativa",
    "GBH México",
    "q-peptides.com",
  ],
  authors: [{ name: "GBH Global Beauty & Health" }],
  creator: "GBH México",
  publisher: "GBH Global Beauty & Health",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://q-peptides.com",
    siteName: "GBH México",
    title: "GBH México: Distribuidora Líder en Péptidos de Grado Médico",
    description:
      "Innovación en medicina estética regenerativa y optimización metabólica. Suministramos biotecnología de alta pureza certificada para expertos en salud y bienestar en México.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GBH México - Péptidos de Grado Médico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBH México: Distribuidora Líder en Péptidos de Grado Médico",
    description:
      "Innovación en medicina estética regenerativa y optimización metabólica.",
    images: ["/images/og-image.svg"],
    creator: "@gbhmexico",
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