# RikiZip 🌿

Compresseur de fichiers en ligne, 100% navigateur.
Vos fichiers restent sur votre appareil.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + design minimaliste, accent vert citron
- **browser-image-compression** (images)
- **pdf-lib** (PDF)
- **heic2any** (HEIC → JPG)
- **JSZip** (téléchargement groupé)

## Lancement en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Déploiement sur Vercel

1. Pousse ce projet sur GitHub (nouveau repo).
2. Va sur https://vercel.com, connecte ton compte GitHub.
3. Clique "Add New → Project", sélectionne le repo.
4. Clique "Deploy". Aucune variable d'environnement n'est nécessaire.
5. Ajoute ton domaine rikizip.fr dans l'onglet "Domains" du projet.
6. Dans OVH (ou ton registrar), configure les DNS selon les instructions Vercel (un enregistrement A ou CNAME).

## Structure

```
app/
  page.tsx                        # Accueil
  compresser-pdf/page.tsx         # SEO PDF
  compresser-image/page.tsx       # SEO image
  convertir-heic-jpg/page.tsx     # SEO HEIC
  mentions-legales/page.tsx
  politique-confidentialite/page.tsx
  sitemap.ts
  robots.ts
  layout.tsx
  globals.css
components/
  Header.tsx
  Footer.tsx
  compressor/Compressor.tsx       # Cœur du produit
lib/
  compressors/
    image.ts
    pdf.ts
    heic.ts
  utils/cn.ts
```

## Prochaines étapes (phase 2)

- Google AdSense (inscription après validation domaine)
- Plausible ou GA4 pour analytics
- Stripe Checkout pour version Pro (limites illimitées, pas de pub)
- Blog SEO (/blog) pour capturer plus de mots-clés
- Ajout vidéo via FFmpeg WASM (plus tard)

## Limites connues du MVP

- Safari iOS plafonne la mémoire (~300-400 Mo) → fichiers très lourds peuvent échouer sur iPhone
- Compression PDF limitée aux optimisations pdf-lib (métadonnées, streams). Pour compresser agressivement les images internes d'un PDF, il faudra une phase 2.
- Pas de compression vidéo (volontaire — trop lourd à charger en WASM, à ajouter en phase 2)
