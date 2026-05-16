import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/comment-ca-marche`;

export const metadata: Metadata = {
  title: "Comment fonctionne RikiZip ? Compression locale et sans upload",
  description: "Découvrez comment RikiZip compresse les PDF, images et photos directement dans le navigateur, sans envoyer vos fichiers sur serveur.",
  alternates: { canonical: "/comment-ca-marche" },
  openGraph: {
    title: "Comment fonctionne RikiZip ? Compression locale et sans upload | RikiZip",
    description: "Découvrez comment RikiZip compresse les PDF, images et photos directement dans le navigateur, sans envoyer vos fichiers sur serveur.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Comment fonctionne RikiZip ?", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Comment fonctionne RikiZip ?
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            RikiZip est conçu pour réduire vos fichiers simplement, avec une priorité claire : limiter les étapes inutiles et garder vos fichiers sur votre appareil quand le traitement peut se faire dans le navigateur.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Compression dans le navigateur</h2>
            <p className="text-neutral-700 leading-relaxed">Quand vous ajoutez un fichier, RikiZip utilise les capacités de votre navigateur pour le traiter localement. Le fichier n’a pas besoin d’être envoyé vers un serveur RikiZip pour être compressé ou converti.</p>
            <p className="text-neutral-700 leading-relaxed">Cette approche rend l’outil simple, rapide et plus respectueux de la confidentialité.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Types de fichiers pris en charge</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>PDF pour réduire certains documents trop lourds.</li>
              <li>Images JPG, PNG et WebP pour alléger les photos et visuels.</li>
              <li>HEIC pour convertir les photos iPhone en JPG.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Limites techniques</h2>
            <p className="text-neutral-700 leading-relaxed">Les performances dépendent de votre appareil et de votre navigateur. Les très gros fichiers peuvent demander plus de mémoire, notamment sur mobile.</p>
            <p className="text-neutral-700 leading-relaxed">Certains PDF déjà optimisés ou très complexes peuvent peu diminuer. Dans ce cas, le fichier ne contient simplement pas beaucoup d’éléments faciles à réduire localement.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/confidentialite-fichiers" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Confidentialité des fichiers</a></li>
            <li><a href="/compresser-pdf" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser PDF</a></li>
            <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser image</a></li>
            <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">HEIC vers JPG</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
