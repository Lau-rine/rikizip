import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rikizip.fr"),
  title: {
    default: "RikiZip — Compresseur de fichiers en ligne gratuit",
    template: "%s | RikiZip",
  },
  description:
    "Compressez vos PDF, images et fichiers directement dans votre navigateur. 100% gratuit, sans inscription, sans upload. Vos fichiers restent sur votre appareil.",
  keywords: [
    "compresseur de fichiers",
    "compresser PDF",
    "compresser image",
    "réduire taille fichier",
    "convertir HEIC",
    "compression en ligne gratuit",
  ],
  authors: [{ name: "RikiZip" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rikizip.fr",
    siteName: "RikiZip",
    title: "RikiZip — Compresseur de fichiers en ligne gratuit",
    description:
      "Réduisez la taille de vos PDF, images et fichiers en quelques secondes. 100% gratuit, 100% privé.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
