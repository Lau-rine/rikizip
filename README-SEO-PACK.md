# Pack SEO RikiZip

Ce dossier contient des fichiers prêts à copier dans ton projet Next.js.

## À remplacer

- `app/layout.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/compresser-pdf/page.tsx`
- `app/compresser-image/page.tsx`
- `app/convertir-heic-jpg/page.tsx`

## À ajouter

- `lib/seo/jsonLd.tsx`
- `app/compresser-pdf-sans-upload/page.tsx`
- `app/compresser-image-sans-upload/page.tsx`
- `app/reduire-taille-pdf-email/page.tsx`
- `app/convertir-heic-jpg-iphone/page.tsx`
- `app/compresser-photo-iphone/page.tsx`
- `app/comment-ca-marche/page.tsx`
- `app/confidentialite-fichiers/page.tsx`

## Après copie

Lance :

```bash
npm run build
```

Puis vérifie localement :

```bash
npm run dev
```

Si ton composant `Compressor` n’accepte pas `mode="heic"` ou `mode="pdf"`, garde les pages SEO mais adapte seulement cette prop selon ton composant actuel.
