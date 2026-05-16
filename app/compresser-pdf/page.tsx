import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";
import JsonLd, { breadcrumbJsonLd, faqJsonLd, siteUrl, webApplicationJsonLd } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/compresser-pdf`;

export const metadata: Metadata = {
  title: "Compresser un PDF en ligne gratuitement, sans upload",
  description: "Réduisez la taille de vos fichiers PDF directement dans votre navigateur. Gratuit, sans inscription et sans upload : vos documents restent sur votre appareil.",
  alternates: { canonical: "/compresser-pdf" },
  openGraph: {
    title: "Compresser un PDF en ligne gratuitement, sans upload | RikiZip",
    description: "Réduisez la taille de vos fichiers PDF directement dans votre navigateur. Gratuit, sans inscription et sans upload : vos documents restent sur votre appareil.",
    url: pageUrl,
  },
};

const faqs = [
  {
    "question": "Mes PDF sont-ils envoyés sur un serveur ?",
    "answer": "Non. RikiZip traite le PDF directement dans votre navigateur. Le fichier reste sur votre appareil."
  },
  {
    "question": "La compression PDF réduit-elle toujours beaucoup la taille ?",
    "answer": "Non, cela dépend du fichier. Un PDF déjà optimisé peut très peu diminuer, tandis qu’un PDF avec des images lourdes peut mieux se compresser."
  },
  {
    "question": "Puis-je compresser un PDF confidentiel ?",
    "answer": "Oui, c’est justement l’intérêt d’un outil sans upload. Votre document n’est pas transmis à un serveur RikiZip."
  },
  {
    "question": "RikiZip ajoute-t-il un filigrane ?",
    "answer": "Non. Le fichier compressé ne reçoit pas de filigrane."
  }
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationJsonLd({
            name: "Compresser un PDF — RikiZip",
            url: pageUrl,
            description: "Réduisez la taille de vos fichiers PDF directement dans votre navigateur. Gratuit, sans inscription et sans upload : vos documents restent sur votre appareil.",
          }),
          breadcrumbJsonLd([
            { name: "Accueil", url: siteUrl },
            { name: "Compresser un PDF", url: pageUrl },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
        <Compressor
          mode="pdf"
          title="Compresser un PDF"
          subtitle="Réduisez le poids de vos documents PDF en quelques secondes, sans envoyer vos fichiers sur un serveur."
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-10">
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Comment compresser un PDF gratuitement ?</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li><strong>1. Ajoutez votre PDF</strong> dans la zone de dépôt ou sélectionnez-le depuis votre appareil.</li>
              <li><strong>2. Lancez la compression</strong>. RikiZip optimise le fichier directement dans votre navigateur.</li>
              <li><strong>3. Téléchargez le PDF allégé</strong> et utilisez-le pour un email, une archive ou un formulaire en ligne.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi réduire la taille d’un PDF ?</h2>
            <p className="text-neutral-700 leading-relaxed">Un PDF trop lourd peut être difficile à envoyer par email, lent à ouvrir ou impossible à déposer sur un formulaire administratif. Une compression permet de garder un document plus léger, plus simple à partager et plus pratique à archiver.</p>
            <p className="text-neutral-700 leading-relaxed">RikiZip est particulièrement utile pour les documents du quotidien : factures, dossiers administratifs, devis, contrats, supports de cours ou fichiers à transmettre rapidement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Compression PDF sans upload : l’avantage confidentialité</h2>
            <p className="text-neutral-700 leading-relaxed">Le point fort de RikiZip est le traitement local. Votre PDF n’est pas envoyé vers un serveur externe : la compression se fait dans votre navigateur, sur votre appareil.</p>
            <p className="text-neutral-700 leading-relaxed">C’est une approche rassurante pour les documents sensibles comme les contrats, relevés, justificatifs, documents médicaux ou pièces administratives.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi certains PDF se compressent peu ?</h2>
            <p className="text-neutral-700 leading-relaxed">Tous les PDF ne réagissent pas de la même manière. Un document déjà optimisé peut perdre très peu de poids. À l’inverse, un PDF contenant des images lourdes peut offrir davantage de marge de réduction.</p>
            <p className="text-neutral-700 leading-relaxed">RikiZip privilégie une compression simple et privée dans le navigateur. Pour une compression très agressive des images intégrées dans un PDF, une optimisation plus avancée pourra être ajoutée dans une prochaine version.</p>
          </section>


          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Questions fréquentes</h2>
            <div className="space-y-3">
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">Mes PDF sont-ils envoyés sur un serveur ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Non. RikiZip traite le PDF directement dans votre navigateur. Le fichier reste sur votre appareil.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">La compression PDF réduit-elle toujours beaucoup la taille ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Non, cela dépend du fichier. Un PDF déjà optimisé peut très peu diminuer, tandis qu’un PDF avec des images lourdes peut mieux se compresser.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">Puis-je compresser un PDF confidentiel ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Oui, c’est justement l’intérêt d’un outil sans upload. Votre document n’est pas transmis à un serveur RikiZip.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">RikiZip ajoute-t-il un filigrane ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Non. Le fichier compressé ne reçoit pas de filigrane.</p>
            </details>
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">Outils et guides liés</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
          <li><a href="/compresser-pdf-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser un PDF sans upload</a></li>
          <li><a href="/reduire-taille-pdf-email" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Réduire un PDF pour email</a></li>
          <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une image</a></li>
          <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Convertir HEIC en JPG</a></li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
