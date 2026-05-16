import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/convertir-heic-jpg-iphone`;

export const metadata: Metadata = {
  title: "Convertir une photo iPhone HEIC en JPG",
  description: "Transformez une photo iPhone HEIC en JPG directement dans votre navigateur, sans upload, sans compte et gratuitement.",
  alternates: { canonical: "/convertir-heic-jpg-iphone" },
  openGraph: {
    title: "Convertir une photo iPhone HEIC en JPG | RikiZip",
    description: "Transformez une photo iPhone HEIC en JPG directement dans votre navigateur, sans upload, sans compte et gratuitement.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Convertir une photo iPhone HEIC en JPG", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Convertir une photo iPhone HEIC en JPG
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Les iPhone enregistrent souvent les photos en HEIC. Ce format est efficace, mais pas toujours accepté par les sites, formulaires ou anciens logiciels. Le JPG reste le format le plus simple à partager.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi les photos iPhone sont en HEIC ?</h2>
            <p className="text-neutral-700 leading-relaxed">Le HEIC permet de conserver une bonne qualité d’image avec un poids réduit. C’est pratique pour économiser du stockage, mais la compatibilité n’est pas toujours parfaite selon les outils utilisés.</p>
            <p className="text-neutral-700 leading-relaxed">Convertir en JPG permet d’obtenir un fichier plus universel.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Quand convertir en JPG ?</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>Quand un formulaire refuse votre photo HEIC.</li>
              <li>Quand un logiciel ne sait pas ouvrir le fichier.</li>
              <li>Quand vous devez envoyer une photo à quelqu’un qui utilise un appareil plus ancien.</li>
              <li>Quand une plateforme demande explicitement un JPG ou JPEG.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Confidentialité</h2>
            <p className="text-neutral-700 leading-relaxed">Avec RikiZip, la conversion se fait dans votre navigateur. La photo n’est pas envoyée sur un serveur RikiZip, ce qui est plus adapté aux images personnelles ou sensibles.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Outil HEIC vers JPG</a></li>
            <li><a href="/compresser-photo-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une photo iPhone</a></li>
            <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une image</a></li>
            <li><a href="/confidentialite-fichiers" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Confidentialité des fichiers</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
