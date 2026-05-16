import Link from "next/link";
import { Leaf } from "lucide-react";

const navItems = [
  { href: "/compresser-pdf", label: "PDF" },
  { href: "/compresser-image", label: "Images" },
  { href: "/convertir-heic-jpg", label: "HEIC → JPG" },
  { href: "/confidentialite-fichiers", label: "Confidentialité" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Accueil RikiZip">
          <div className="w-9 h-9 rounded-xl bg-brand-400 flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Leaf className="w-5 h-5 text-neutral-900" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">RikiZip</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
