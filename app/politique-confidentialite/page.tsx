import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données de RikiZip.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="container-custom py-16 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
        Politique de confidentialité
      </h1>

      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Traitement de vos fichiers</h2>
          <p>
            <strong>Vos fichiers ne quittent jamais votre appareil.</strong> RikiZip fonctionne
            intégralement dans votre navigateur grâce à des technologies web modernes.
            Aucun fichier n'est transmis, stocké ou analysé sur nos serveurs.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Données personnelles collectées</h2>
          <p>
            RikiZip ne collecte aucune donnée personnelle directement. Aucun compte
            utilisateur n'est requis pour utiliser le service.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Cookies et statistiques</h2>
          <p>
            Nous pouvons utiliser des outils d'analyse d'audience anonymisés (type
            Plausible ou Google Analytics) pour mesurer la fréquentation du site. Ces
            outils ne permettent pas de vous identifier personnellement. Le site peut
            également afficher de la publicité via des régies comme Google AdSense,
            qui utilisent leurs propres cookies — vous pouvez les gérer via le bandeau
            de consentement.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et
            de suppression de vos données. Pour toute demande : contact@rikizip.fr
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Modifications</h2>
          <p>
            Cette politique peut être mise à jour. La date de dernière modification
            sera indiquée ci-dessous.
          </p>
          <p className="text-sm text-neutral-500 mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
    </section>
  );
}
