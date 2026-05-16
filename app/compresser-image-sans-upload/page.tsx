import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/compresser-image-sans-upload`;

export const metadata: Metadata = {
  title: "Compresser une image sans upload — JPG, PNG, WebP privés",
  description: "Réduisez une image JPG, PNG ou WebP sans l’envoyer sur serveur. Compression gratuite, locale et directement dans le navigateur.",
  alternates: { canonical: "/compresser-image-sans-upload" },
  openGraph: {
    title: "Compresser une image sans upload — JPG, PNG, WebP privés | RikiZip",
    description: "Réduisez une image JPG, PNG ou WebP sans l’envoyer sur serveur. Compression gratuite, locale et directement dans le navigateur.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Compresser une image sans upload", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Compresser une image sans upload
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            RikiZip permet d’alléger une image tout en gardant vos fichiers sur votre appareil. C’est pratique pour les photos privées, captures d’écran, visuels clients ou images professionnelles.
          </p>

          <div className="mt-10 rounded-3xl border border-brand-200 bg-brand-50 p-6">
            <h2 className="font-display text-2xl font-bold">Utiliser l’outil adapté</h2>
            <p className="mt-3 text-neutral-700">
              Le plus simple est de lancer directement l’outil RikiZip correspondant à votre besoin.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/compresser-pdf" className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
                Compresser un PDF
              </Link>
              <Link href="/compresser-image" className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
                Compresser une image
              </Link>
              <Link href="/convertir-heic-jpg" className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
                HEIC → JPG
              </Link>
            </div>
          </div>

          <div className="mt-12 space-y-10">
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi compresser une image localement ?</h2>
            <p className="text-neutral-700 leading-relaxed">Une image peut révéler des informations personnelles, professionnelles ou contextuelles. La compression sans upload permet de réduire le poids du fichier sans le transmettre à un service externe.</p>
            <p className="text-neutral-700 leading-relaxed">C’est aussi plus rapide dans de nombreux cas, car vous évitez l’étape d’envoi du fichier avant traitement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Formats concernés</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>JPG et JPEG pour les photos classiques.</li>
              <li>PNG pour les captures, visuels avec texte ou transparence.</li>
              <li>WebP pour des images modernes souvent plus légères.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Conseil qualité</h2>
            <p className="text-neutral-700 leading-relaxed">Pour un email ou un site web, commencez autour de 70 à 80% de qualité. Pour une photo importante, gardez un réglage plus haut. Pour une miniature, vous pouvez descendre davantage.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Outil compression image</a></li>
            <li><a href="/compresser-photo-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une photo iPhone</a></li>
            <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Convertir HEIC en JPG</a></li>
            <li><a href="/confidentialite-fichiers" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Confidentialité des fichiers</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
