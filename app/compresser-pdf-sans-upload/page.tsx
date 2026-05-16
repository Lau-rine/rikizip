import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/compresser-pdf-sans-upload`;

export const metadata: Metadata = {
  title: "Compresser un PDF sans upload — fichier privé et local",
  description: "Compressez un PDF sans l’envoyer sur un serveur. RikiZip réduit vos documents localement dans le navigateur, gratuitement et sans inscription.",
  alternates: { canonical: "/compresser-pdf-sans-upload" },
  openGraph: {
    title: "Compresser un PDF sans upload — fichier privé et local | RikiZip",
    description: "Compressez un PDF sans l’envoyer sur un serveur. RikiZip réduit vos documents localement dans le navigateur, gratuitement et sans inscription.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Compresser un PDF sans upload", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Compresser un PDF sans upload
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Vous voulez réduire un PDF sans confier le document à un service externe ? RikiZip privilégie une compression locale dans le navigateur : vos fichiers restent sur votre appareil.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Pourquoi éviter l’upload pour un PDF ?</h2>
            <p className="text-neutral-700 leading-relaxed">Un PDF peut contenir des informations sensibles : contrat, facture, devis, document administratif, relevé, pièce d’identité ou dossier professionnel. Éviter l’upload limite la circulation du fichier et réduit les risques liés au stockage par un tiers.</p>
            <p className="text-neutral-700 leading-relaxed">Avec un traitement local, le fichier n’a pas besoin de quitter votre appareil pour être optimisé.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Dans quels cas c’est utile ?</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>Documents administratifs à envoyer sans dépasser une limite de taille.</li>
              <li>Contrats ou devis clients que vous ne voulez pas transmettre à un serveur externe.</li>
              <li>PDF personnels ou professionnels à archiver plus proprement.</li>
              <li>Fichiers à compresser rapidement avant un dépôt sur une plateforme.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Limites à connaître</h2>
            <p className="text-neutral-700 leading-relaxed">Un PDF déjà optimisé peut ne presque pas diminuer. Les résultats dépendent du contenu du document, notamment de la présence d’images lourdes ou de métadonnées inutiles.</p>
            <p className="text-neutral-700 leading-relaxed">RikiZip privilégie la confidentialité et la simplicité. Une compression extrêmement agressive peut demander des traitements plus lourds qui seront à envisager dans une évolution dédiée.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/compresser-pdf" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Outil de compression PDF</a></li>
            <li><a href="/reduire-taille-pdf-email" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Réduire un PDF pour email</a></li>
            <li><a href="/confidentialite-fichiers" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Confidentialité des fichiers</a></li>
            <li><a href="/compresser-image-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Image sans upload</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
