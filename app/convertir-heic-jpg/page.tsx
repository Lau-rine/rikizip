import type { Metadata } from "next";
import Compressor from "@/components/compressor/Compressor";
import JsonLd, { breadcrumbJsonLd, faqJsonLd, siteUrl, webApplicationJsonLd } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/convertir-heic-jpg`;

export const metadata: Metadata = {
  title: "Convertir HEIC en JPG gratuitement, sans upload",
  description: "Transformez vos photos iPhone HEIC en JPG directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
  alternates: { canonical: "/convertir-heic-jpg" },
  openGraph: {
    title: "Convertir HEIC en JPG gratuitement, sans upload | RikiZip",
    description: "Transformez vos photos iPhone HEIC en JPG directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
    url: pageUrl,
  },
};

const faqs = [
  {
    "question": "Pourquoi mon iPhone crée-t-il des fichiers HEIC ?",
    "answer": "L’iPhone utilise souvent le HEIC pour obtenir des photos de bonne qualité avec un poids réduit."
  },
  {
    "question": "La conversion HEIC vers JPG est-elle privée ?",
    "answer": "Oui. Avec RikiZip, la conversion se fait localement dans votre navigateur, sans upload."
  },
  {
    "question": "Le JPG sera-t-il plus lourd que le HEIC ?",
    "answer": "Souvent oui, car le JPG est moins récent. Mais il est beaucoup plus compatible avec les sites, logiciels et appareils."
  },
  {
    "question": "Puis-je convertir plusieurs photos ?",
    "answer": "Oui, vous pouvez utiliser RikiZip pour traiter plusieurs fichiers selon les limites de votre navigateur et de votre appareil."
  }
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationJsonLd({
            name: "Convertir HEIC en JPG — RikiZip",
            url: pageUrl,
            description: "Transformez vos photos iPhone HEIC en JPG directement dans votre navigateur. Gratuit, sans inscription et sans upload.",
          }),
          breadcrumbJsonLd([
            { name: "Accueil", url: siteUrl },
            { name: "Convertir HEIC en JPG", url: pageUrl },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
        <Compressor
          mode="heic"
          title="Convertir HEIC en JPG"
          subtitle="Convertissez vos photos iPhone HEIC en JPG, un format compatible avec presque tous les appareils et services."
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-10">
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi convertir un fichier HEIC en JPG ?</h2>
            <p className="text-neutral-700 leading-relaxed">Le HEIC est courant sur iPhone car il permet de stocker des photos avec un bon rapport qualité/poids. Mais certains sites, logiciels ou appareils acceptent encore mieux le JPG.</p>
            <p className="text-neutral-700 leading-relaxed">Convertir une photo HEIC en JPG permet de l’envoyer plus facilement, de l’ouvrir sur davantage d’appareils ou de l’importer dans un formulaire en ligne.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Conversion HEIC sans upload</h2>
            <p className="text-neutral-700 leading-relaxed">RikiZip convertit vos photos directement dans votre navigateur. Le fichier HEIC reste sur votre appareil et n’est pas envoyé vers un serveur.</p>
            <p className="text-neutral-700 leading-relaxed">C’est plus rassurant pour des photos personnelles, des documents photographiés, des captures ou des images destinées à un usage privé.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">HEIC ou JPG : quelle différence ?</h2>
            <p className="text-neutral-700 leading-relaxed">Le HEIC est moderne et souvent plus compact. Le JPG est plus universel et plus simple à partager. Si un site refuse une photo iPhone, la conversion en JPG règle souvent le problème.</p>
            <p className="text-neutral-700 leading-relaxed">Le JPG reste le format le plus pratique pour l’envoi, l’impression simple, les formulaires et les plateformes qui n’acceptent pas encore le HEIC.</p>
          </section>


          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Questions fréquentes</h2>
            <div className="space-y-3">
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">Pourquoi mon iPhone crée-t-il des fichiers HEIC ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">L’iPhone utilise souvent le HEIC pour obtenir des photos de bonne qualité avec un poids réduit.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">La conversion HEIC vers JPG est-elle privée ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Oui. Avec RikiZip, la conversion se fait localement dans votre navigateur, sans upload.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">Le JPG sera-t-il plus lourd que le HEIC ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Souvent oui, car le JPG est moins récent. Mais il est beaucoup plus compatible avec les sites, logiciels et appareils.</p>
            </details>
            <details className="rounded-2xl border border-neutral-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-neutral-950">Puis-je convertir plusieurs photos ?</summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">Oui, vous pouvez utiliser RikiZip pour traiter plusieurs fichiers selon les limites de votre navigateur et de votre appareil.</p>
            </details>
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">Outils et guides liés</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
          <li><a href="/convertir-heic-jpg-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Convertir HEIC iPhone en JPG</a></li>
          <li><a href="/compresser-photo-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une photo iPhone</a></li>
          <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une image</a></li>
          <li><a href="/compresser-image-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Image sans upload</a></li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
