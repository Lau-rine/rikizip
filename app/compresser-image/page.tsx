import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";

export const metadata: Metadata = {
  title: "Compresser une image en ligne — JPG, PNG, WebP",
  description:
    "Réduisez la taille de vos images JPG, PNG et WebP sans perdre en qualité. 100% gratuit, directement dans votre navigateur, sans inscription.",
  alternates: { canonical: "/compresser-image" },
  openGraph: {
    title: "Compresser une image en ligne — RikiZip",
    description:
      "Réduisez le poids de vos photos JPG, PNG et WebP en quelques secondes.",
    url: "https://rikizip.fr/compresser-image",
  },
};

export default function CompresserImagePage() {
  return (
    <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
      <Compressor
        mode="image"
        title="Compresser une image"
        subtitle="Réduisez le poids de vos photos JPG, PNG et WebP en ajustant la qualité à votre convenance."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6 text-neutral-700 leading-relaxed">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Compresser une photo facilement
        </h2>
        <p className="text-neutral-700">
          Que ce soit pour envoyer une photo par email, l'intégrer à un site web, ou
          alléger votre galerie, RikiZip réduit le poids de vos images en préservant
          la qualité visuelle. Ajustez le curseur de qualité selon vos besoins : plus
          la qualité est basse, plus le fichier est léger.
        </p>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Formats supportés
        </h2>
        <ul className="space-y-2 text-neutral-700">
          <li><strong>JPG / JPEG</strong> — format idéal pour les photographies</li>
          <li><strong>PNG</strong> — parfait pour les images avec transparence</li>
          <li><strong>WebP</strong> — format moderne, compression supérieure</li>
        </ul>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Quelle qualité choisir ?
        </h2>
        <p className="text-neutral-700">
          Pour un usage web, 70 à 80% de qualité offre un excellent compromis. Pour
          des photos destinées à l'impression, restez au-dessus de 90%. Pour une
          simple miniature ou une prévisualisation, descendre à 50% suffit
          largement.
        </p>
      </div>
    </section>
  );
}
