import Link from "next/link";

const toolLinks = [
  { href: "/compresser-pdf", label: "Compresser PDF" },
  { href: "/compresser-image", label: "Compresser image" },
  { href: "/convertir-heic-jpg", label: "Convertir HEIC en JPG" },
];

const seoLinks = [
  { href: "/compresser-pdf-sans-upload", label: "PDF sans upload" },
  { href: "/compresser-image-sans-upload", label: "Image sans upload" },
  { href: "/reduire-taille-pdf-email", label: "PDF pour email" },
  { href: "/compresser-photo-iphone", label: "Photo iPhone" },
];

const infoLinks = [
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/confidentialite-fichiers", label: "Confidentialité des fichiers" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-custom py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="font-display text-xl font-bold">RikiZip</h2>
          <p className="mt-3 text-sm text-neutral-600">
            Compresseur de fichiers gratuit, privé et 100% navigateur. Vos fichiers restent sur votre appareil.
          </p>
        </div>

        <FooterColumn title="Outils" links={toolLinks} />
        <FooterColumn title="Guides utiles" links={seoLinks} />
        <FooterColumn title="Info" links={infoLinks} />

        <div className="md:col-span-4 flex flex-col gap-3 border-t border-neutral-100 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} RikiZip — Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-neutral-900">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-neutral-900">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-neutral-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-neutral-900">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
