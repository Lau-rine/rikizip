import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/compresser-photo-iphone`;

export const metadata: Metadata = {
  title: "Compresser une photo iPhone gratuitement",
  description: "Réduisez le poids d’une photo iPhone pour l’envoyer par email, la publier ou la stocker plus facilement. Gratuit, sans upload et sans inscription.",
  alternates: { canonical: "/compresser-photo-iphone" },
  openGraph: {
    title: "Compresser une photo iPhone gratuitement | RikiZip",
    description: "Réduisez le poids d’une photo iPhone pour l’envoyer par email, la publier ou la stocker plus facilement. Gratuit, sans upload et sans inscription.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Compresser une photo iPhone", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Compresser une photo iPhone
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Les photos iPhone peuvent être lourdes, surtout si elles sont en haute résolution. RikiZip aide à les alléger pour les envoyer plus facilement ou les utiliser sur le web.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi compresser une photo iPhone ?</h2>
            <p className="text-neutral-700 leading-relaxed">Une photo iPhone peut vite devenir trop lourde pour un email, un formulaire ou une publication web. La compression réduit le poids du fichier tout en conservant un rendu visuel correct pour la plupart des usages.</p>
            <p className="text-neutral-700 leading-relaxed">C’est utile avant d’envoyer plusieurs photos, de publier une image sur un site ou de libérer un peu d’espace.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">HEIC, JPG et compression</h2>
            <p className="text-neutral-700 leading-relaxed">Si votre photo est en HEIC, vous pouvez d’abord la convertir en JPG. Si elle est déjà en JPG, vous pouvez directement réduire sa taille avec l’outil de compression image.</p>
            <p className="text-neutral-700 leading-relaxed">Le choix dépend surtout de la plateforme qui recevra le fichier. Le JPG reste le format le plus compatible.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Réglage conseillé</h2>
            <p className="text-neutral-700 leading-relaxed">Pour un envoi par email ou une publication web, testez une qualité entre 70 et 80%. Pour garder davantage de détails, montez autour de 90%.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/compresser-image" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser une image</a></li>
            <li><a href="/convertir-heic-jpg" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Convertir HEIC en JPG</a></li>
            <li><a href="/convertir-heic-jpg-iphone" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">HEIC iPhone en JPG</a></li>
            <li><a href="/compresser-image-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Image sans upload</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
