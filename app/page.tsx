import Link from "next/link";
import Compressor from "@/components/compressor/Compressor";
import { Shield, Zap, Heart, FileImage, FileText, Image as ImageIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero + compresseur */}
      <section className="container-custom pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="text-center mb-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            100% gratuit · aucune inscription
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Vos fichiers, en mode{" "}
            <span className="relative inline-block">
              <span className="relative z-10">rikiki</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-300 -z-0" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Compressez vos PDF, images et photos directement dans votre navigateur.
            Aucun upload, aucun serveur, vos fichiers restent chez vous.
          </p>
        </div>

        <Compressor />
      </section>

      {/* Features */}
      <section className="container-custom py-16 border-t border-neutral-200" id="comment-ca-marche">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi RikiZip ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="100% privé"
            text="Vos fichiers ne sont jamais envoyés sur un serveur. Toute la compression se fait localement dans votre navigateur."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Rapide et simple"
            text="Glissez, déposez, c'est fait. Pas de compte, pas d'attente, pas de filigrane."
          />
          <FeatureCard
            icon={<Heart className="w-6 h-6" />}
            title="Gratuit et illimité"
            text="Utilisation sans limite, sans inscription, sans abonnement. Juste un outil efficace."
          />
        </div>
      </section>

      {/* Outils dédiés */}
      <section className="container-custom py-16 border-t border-neutral-200">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Nos outils
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            href="/compresser-pdf"
            icon={<FileText className="w-6 h-6" />}
            title="Compresser un PDF"
            text="Réduisez la taille de vos documents PDF sans perdre en lisibilité."
          />
          <ToolCard
            href="/compresser-image"
            icon={<ImageIcon className="w-6 h-6" />}
            title="Compresser une image"
            text="JPG, PNG, WebP — diminuez le poids de vos photos en un clic."
          />
          <ToolCard
            href="/convertir-heic-jpg"
            icon={<FileImage className="w-6 h-6" />}
            title="Convertir HEIC en JPG"
            text="Transformez vos photos iPhone au format universel JPG."
          />
        </div>
      </section>

      {/* Confidentialité */}
      <section className="container-custom py-16 border-t border-neutral-200" id="confidentialite">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 items-center justify-center mb-6">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Vos fichiers restent chez vous
          </h2>
          <p className="text-lg text-neutral-600">
            Contrairement à la plupart des outils en ligne, RikiZip ne télécharge
            jamais vos fichiers sur un serveur. Toute la compression est effectuée
            directement dans votre navigateur grâce aux dernières technologies web.
            Vos documents confidentiels, vos photos personnelles, vos contrats —
            tout reste strictement sur votre appareil.
          </p>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="p-6 rounded-2xl border border-neutral-200 bg-white hover:border-brand-300 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ToolCard({ href, icon, title, text }: { href: string; icon: React.ReactNode; title: string; text: string }) {
  return (
    <Link
      href={href}
      className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:border-brand-400 hover:shadow-sm transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-400 group-hover:text-neutral-900 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>
      <span className="inline-block mt-4 text-brand-700 text-sm font-semibold group-hover:underline">
        Utiliser l'outil →
      </span>
    </Link>
  );
}
