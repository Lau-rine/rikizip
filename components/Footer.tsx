import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-20">
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-display font-semibold text-neutral-900 mb-3">RikiZip</h3>
            <p className="text-neutral-600">
              Compresseur de fichiers en ligne, 100% navigateur.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Outils</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/compresser-pdf" className="hover:text-neutral-900">Compresser PDF</Link></li>
              <li><Link href="/compresser-image" className="hover:text-neutral-900">Compresser image</Link></li>
              <li><Link href="/convertir-heic-jpg" className="hover:text-neutral-900">Convertir HEIC en JPG</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Info</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/#comment-ca-marche" className="hover:text-neutral-900">Comment ça marche</Link></li>
              <li><Link href="/#confidentialite" className="hover:text-neutral-900">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Légal</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/mentions-legales" className="hover:text-neutral-900">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-neutral-900">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
          © {new Date().getFullYear()} RikiZip — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
