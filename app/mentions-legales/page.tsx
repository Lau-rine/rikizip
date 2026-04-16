import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site RikiZip.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="container-custom py-16 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Mentions légales</h1>

      <div className="space-y-6 text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            RikiZip<br />
            [À compléter avec votre nom / raison sociale, adresse, email de contact, SIRET le cas échéant]
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Hébergeur</h2>
          <p>
            Vercel Inc.<br />
            340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, logo, interface) est la propriété
            de RikiZip, sauf mention contraire. Toute reproduction sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question : contact@rikizip.fr
          </p>
        </div>
      </div>
    </section>
  );
}
