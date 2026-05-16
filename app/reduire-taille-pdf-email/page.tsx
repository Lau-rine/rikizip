import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/reduire-taille-pdf-email`;

export const metadata: Metadata = {
  title: "Réduire la taille d’un PDF pour email",
  description: "Guide simple pour compresser un PDF trop lourd avant de l’envoyer par email, sans inscription et sans upload avec RikiZip.",
  alternates: { canonical: "/reduire-taille-pdf-email" },
  openGraph: {
    title: "Réduire la taille d’un PDF pour email | RikiZip",
    description: "Guide simple pour compresser un PDF trop lourd avant de l’envoyer par email, sans inscription et sans upload avec RikiZip.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Réduire la taille d’un PDF pour l’envoyer par email", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Réduire la taille d’un PDF pour l’envoyer par email
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Un PDF trop lourd peut bloquer l’envoi d’un email ou ralentir le téléchargement côté destinataire. RikiZip aide à alléger le fichier directement dans le navigateur.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi un PDF est trop lourd pour un email ?</h2>
            <p className="text-neutral-700 leading-relaxed">Un PDF devient lourd lorsqu’il contient des images en haute résolution, des scans, beaucoup de pages, des polices intégrées ou des éléments graphiques. Les documents scannés sont souvent les plus volumineux.</p>
            <p className="text-neutral-700 leading-relaxed">Réduire la taille permet de l’envoyer plus facilement et d’éviter de passer par un service de transfert externe.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Méthode rapide</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>Ouvrez l’outil de compression PDF RikiZip.</li>
              <li>Ajoutez votre fichier PDF.</li>
              <li>Lancez la compression.</li>
              <li>Téléchargez le PDF allégé puis joignez-le à votre email.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Si le fichier reste trop lourd</h2>
            <p className="text-neutral-700 leading-relaxed">Si le résultat est encore trop volumineux, le PDF contient probablement des images internes très lourdes. Vous pouvez aussi essayer de réduire les images sources avant de recréer le PDF, ou séparer le document en plusieurs parties si c’est acceptable.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/compresser-pdf" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser un PDF</a></li>
            <li><a href="/compresser-pdf-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">PDF sans upload</a></li>
            <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser les images</a></li>
            <li><a href="/comment-ca-marche" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Comment fonctionne RikiZip</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
