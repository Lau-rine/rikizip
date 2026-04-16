import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";

export const metadata: Metadata = {
  title: "Compresser un PDF en ligne — Gratuit et privé",
  description:
    "Réduisez la taille de vos fichiers PDF directement dans votre navigateur. 100% gratuit, sans inscription, sans upload. Vos documents restent confidentiels.",
  alternates: { canonical: "/compresser-pdf" },
  openGraph: {
    title: "Compresser un PDF en ligne — RikiZip",
    description:
      "Réduisez la taille de vos PDF sans perdre en qualité. 100% navigateur, 100% privé.",
    url: "https://rikizip.fr/compresser-pdf",
  },
};

export default function CompresserPdfPage() {
  return (
    <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
      <Compressor
        mode="pdf"
        title="Compresser un PDF"
        subtitle="Réduisez le poids de vos documents PDF en quelques secondes, directement dans votre navigateur."
      />

      <div className="max-w-3xl mx-auto mt-16 space-y-6 text-neutral-700 leading-relaxed">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Comment compresser un PDF gratuitement ?
        </h2>
        <ol className="space-y-3 text-neutral-700">
          <li>
            <strong>1. Glissez votre PDF</strong> dans la zone de dépôt, ou cliquez pour
            sélectionner un fichier depuis votre appareil.
          </li>
          <li>
            <strong>2. Cliquez sur « Compresser »</strong>. La réduction se fait
            directement dans votre navigateur, sans aucun envoi vers un serveur.
          </li>
          <li>
            <strong>3. Téléchargez votre PDF allégé</strong>. Vos fichiers restent
            strictement confidentiels.
          </li>
        </ol>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Pourquoi compresser un PDF ?
        </h2>
        <p className="text-neutral-700">
          Un PDF trop lourd complique son envoi par email (limite de 25 Mo chez Gmail,
          20 Mo sur Outlook), ralentit son ouverture, et consomme inutilement de
          l'espace de stockage. Compresser votre PDF permet de l'envoyer facilement,
          de l'archiver sans encombrer votre disque, et d'en accélérer la consultation.
        </p>

        <h2 className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4">
          Vos documents sont-ils en sécurité ?
        </h2>
        <p className="text-neutral-700">
          Oui, totalement. RikiZip fonctionne 100% dans votre navigateur grâce à des
          technologies web modernes (WebAssembly). Vos fichiers ne sont jamais
          transmis à nos serveurs, ni à qui que ce soit. C'est la garantie la plus
          forte de confidentialité pour vos documents sensibles : contrats, dossiers
          médicaux, relevés bancaires, pièces d'identité.
        </p>
      </div>
    </section>
  );
}
