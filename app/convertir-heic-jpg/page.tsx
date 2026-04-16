import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG en ligne — Gratuit",
  description:
    "Convertissez vos photos iPhone au format HEIC en JPG universel. 100% gratuit, directement dans votre navigateur, sans inscription ni upload.",
  alternates: { canonical: "/convertir-heic-jpg" },
  openGraph: {
    title: "Convertir HEIC en JPG — RikiZip",
    description:
      "Transformez vos photos iPhone HEIC en JPG compatibles avec tous les appareils.",
    url: "https://rikizip.fr/convertir-heic-jpg",
  },
};

export default function ConvertirHeicPage() {
  return (
    <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
      <Compressor
        mode="heic"
        title="Convertir HEIC en JPG"
        subtitle="Transformez les photos HEIC de votre iPhone en JPG universels, compatibles avec tous les appareils et logiciels."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6 text-neutral-700 leading-relaxed">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Qu'est-ce que le format HEIC ?
        </h2>
        <p className="text-neutral-700">
          Le format HEIC (High Efficiency Image Container) est le format photo par
          défaut des iPhone depuis iOS 11. Il offre une excellente compression, mais
          pose un problème de compatibilité : de nombreux logiciels, sites web et
          appareils Windows ou Android ne savent pas l'ouvrir.
        </p>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Pourquoi convertir en JPG ?
        </h2>
        <p className="text-neutral-700">
          Le JPG reste le format universel de la photographie numérique. Il est lisible
          par absolument tous les appareils, logiciels et plateformes. Convertir vos
          HEIC en JPG vous permet de les partager sans souci par email, de les
          imprimer facilement, ou de les publier sur n'importe quel site web.
        </p>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Comment convertir un HEIC en JPG ?
        </h2>
        <ol className="space-y-3 text-neutral-700">
          <li>
            <strong>1. Déposez vos fichiers HEIC</strong> dans la zone prévue à cet effet.
          </li>
          <li>
            <strong>2. Ajustez la qualité</strong> de conversion si nécessaire.
          </li>
          <li>
            <strong>3. Cliquez sur « Compresser »</strong> pour lancer la conversion,
            qui se fait directement dans votre navigateur.
          </li>
          <li>
            <strong>4. Téléchargez vos JPG</strong> individuellement ou sous forme d'archive ZIP.
          </li>
        </ol>
      </div>
    </section>
  );
}
