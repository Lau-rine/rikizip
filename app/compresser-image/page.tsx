import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";
import JsonLd, { breadcrumbJsonLd, faqJsonLd, siteUrl, webApplicationJsonLd } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/compresser-image`;

export const metadata: Metadata = {
  title: "Compresser une image en ligne — JPG, PNG, WebP",
  description: "Réduisez la taille de vos images JPG, PNG et WebP directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
  alternates: { canonical: "/compresser-image" },
  openGraph: {
    title: "Compresser une image en ligne — JPG, PNG, WebP | RikiZip",
    description: "Réduisez la taille de vos images JPG, PNG et WebP directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
    url: pageUrl,
  },
};

const faqs = [
  {
    "question": "Mes images sont-elles envoyées sur un serveur ?",
    "answer": "Non. La compression se fait dans votre navigateur, sur votre appareil."
  },
  {
    "question": "Quels formats d’image sont acceptés ?",
    "answer": "RikiZip accepte les formats courants comme JPG, PNG et WebP pour la compression d’image."
  },
  {
    "question": "La qualité va-t-elle être dégradée ?",
    "answer": "La compression peut réduire certains détails, surtout avec une qualité basse. Vous pouvez ajuster le niveau pour trouver le bon compromis."
  },
  {
    "question": "Quel réglage choisir pour le web ?",
    "answer": "Pour un site web ou un email, 70 à 80% est souvent un bon point de départ."
  }
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationJsonLd({
            name: "Compresser une image — RikiZip",
            url: pageUrl,
            description: "Réduisez la taille de vos images JPG, PNG et WebP directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
          }),
          breadcrumbJsonLd([
            { name: "Accueil", url: siteUrl },
            { name: "Compresser une image", url: pageUrl },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
        <Compressor
          mode="image"
          title="Compresser une image"
          subtitle="Réduisez le poids de vos photos JPG, PNG et WebP en ajustant la qualité selon votre besoin."
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-10">
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Compresser une photo facilement</h2>
            <p className="text-neutral-700 leading-relaxed">RikiZip permet d’alléger une image pour l’envoyer par email, l’utiliser sur un site web, la publier plus vite ou libérer de l’espace de stockage.</p>
            <p className="text-neutral-700 leading-relaxed">Vous gardez la main sur le niveau de qualité : plus la qualité est basse, plus le fichier final est léger. Pour un usage courant, un réglage autour de 70 à 80% offre souvent un bon équilibre.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Formats supportés</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li><strong>JPG / JPEG</strong> — idéal pour les photographies et les images riches en couleurs.</li>
              <li><strong>PNG</strong> — utile pour les visuels avec texte, captures d’écran ou transparence.</li>
              <li><strong>WebP</strong> — format moderne souvent plus léger, pratique pour le web.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Quelle qualité choisir ?</h2>
            <p className="text-neutral-700 leading-relaxed">Pour une image destinée au web ou à un email, choisissez souvent entre 70 et 80%. Pour une impression ou une image importante, restez plutôt au-dessus de 90%. Pour une miniature ou un aperçu, 50 à 60% peut suffire.</p>
            <p className="text-neutral-700 leading-relaxed">Le bon réglage dépend du contenu : une photo supporte généralement mieux la compression qu’un visuel avec texte fin ou détails très nets.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi compresser une image sans upload ?</h2>
            <p className="text-neutral-700 leading-relaxed">Une photo peut contenir des informations personnelles ou simplement être privée. Avec RikiZip, l’image est traitée localement dans le navigateur, sans envoi sur serveur.</p>
            <p className="text-neutral-700 leading-relaxed">Cela rend l’outil pratique pour des photos personnelles, des visuels clients, des captures d’écran internes ou des images que vous ne voulez pas transmettre à un service externe.</p>
          </section>


          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Questions fréquentes</h2>
            <div className="space-y-3">
              <details className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-neutral-950">Mes images sont-elles envoyées sur un serveur ?</summary>
                <p className="mt-3 text-neutral-700 leading-relaxed">Non. La compression se fait dans votre navigateur, sur votre appareil.</p>
              </details>
              <details className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-neutral-950">Quels formats d’image sont acceptés ?</summary>
                <p className="mt-3 text-neutral-700 leading-relaxed">RikiZip accepte les formats courants comme JPG, PNG et WebP pour la compression d’image.</p>
              </details>
              <details className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-neutral-950">La qualité va-t-elle être dégradée ?</summary>
                <p className="mt-3 text-neutral-700 leading-relaxed">La compression peut réduire certains détails, surtout avec une qualité basse. Vous pouvez ajuster le niveau pour trouver le bon compromis.</p>
              </details>
              <details className="rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-neutral-950">Quel réglage choisir pour le web ?</summary>
                <p className="mt-3 text-neutral-700 leading-relaxed">Pour un site web ou un email, 70 à 80% est souvent un bon point de départ.</p>
              </details>
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">Outils et guides liés</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
              <li><a href="/compresser-image-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une image sans upload</a></li>
              <li><a href="/compresser-photo-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une photo iPhone</a></li>
              <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Convertir HEIC en JPG</a></li>
              <li><a href="/compresser-pdf" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser un PDF</a></li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
