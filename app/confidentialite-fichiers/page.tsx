import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { breadcrumbJsonLd, siteUrl } from "@/lib/seo/jsonLd";

const pageUrl = `${siteUrl}/confidentialite-fichiers`;

export const metadata: Metadata = {
  title: "Confidentialité des fichiers — compression sans upload",
  description: "RikiZip traite vos fichiers dans le navigateur quand c’est possible : pas d’upload, pas de stockage, pas de compte nécessaire.",
  alternates: { canonical: "/confidentialite-fichiers" },
  openGraph: {
    title: "Confidentialité des fichiers — compression sans upload | RikiZip",
    description: "RikiZip traite vos fichiers dans le navigateur quand c’est possible : pas d’upload, pas de stockage, pas de compte nécessaire.",
    url: pageUrl,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: siteUrl },
          { name: "Confidentialité des fichiers avec RikiZip", url: pageUrl },
        ])}
      />

      <article className="container-custom py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Guide RikiZip</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Confidentialité des fichiers avec RikiZip
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            La confidentialité est l’un des principaux avantages de RikiZip. L’objectif est simple : vous permettre de réduire ou convertir vos fichiers sans les transmettre inutilement à un serveur externe.
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Aucun upload pour le traitement local</h2>
            <p className="text-neutral-700 leading-relaxed">Pour les outils de compression et conversion proposés, RikiZip réalise le traitement dans votre navigateur. Vos fichiers restent donc sur votre appareil pendant l’opération.</p>
            <p className="text-neutral-700 leading-relaxed">Cela évite de confier des documents sensibles à une plateforme externe simplement pour réduire leur taille.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Quels fichiers sont concernés ?</h2>
            <ul className="space-y-3 text-neutral-700 leading-relaxed">
              <li>Documents PDF contenant des informations administratives ou professionnelles.</li>
              <li>Photos personnelles ou images clients.</li>
              <li>Captures d’écran, visuels internes, justificatifs ou fichiers à usage privé.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Bonnes pratiques</h2>
            <p className="text-neutral-700 leading-relaxed">Même avec un outil local, gardez l’habitude de vérifier le fichier final avant de l’envoyer. Si un document est extrêmement sensible, évitez de multiplier les copies et supprimez les versions temporaires inutiles.</p>
            <p className="text-neutral-700 leading-relaxed">RikiZip vise une utilisation simple et transparente : pas d’inscription, pas de stockage de vos fichiers par RikiZip, pas de filigrane ajouté.</p>
          </section>


          </div>

          <section className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">À lire aussi</h2>
            <ul className="mt-4 grid gap-3 text-neutral-700 sm:grid-cols-2">
            <li><a href="/compresser-pdf-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">PDF sans upload</a></li>
            <li><a href="/compresser-image-sans-upload" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Image sans upload</a></li>
            <li><a href="/comment-ca-marche" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Comment ça marche</a></li>
            <li><a href="/compresser-pdf" className="font-semibold text-neutral-950 underline decoration-brand-300 underline-offset-4 hover:decoration-neutral-900">Compresser PDF</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
