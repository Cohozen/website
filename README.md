# corentinlegal.dev

Site personnel de Corentin Le Gal. Astro statique, déployé sur Cloudflare Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
npm run check    # Biome
```

Cloudflare Pages : commande de build `npm run build`, dossier de sortie `dist`.

## Ajouter un projet au portfolio

Un fichier Markdown par projet dans `src/content/projets/` (schéma dans `src/content.config.ts`).
`statut: bientot` affiche la `mention` ; `statut: disponible` affiche les liens `appStore` et
`playStore`. Les images vont dans `src/assets/`.

## Logo et police d'affichage

Générés par `scripts/brand.py` puis `scripts/brand-png.mjs` : voir `brand/README.md`.
Système visuel : `DESIGN.md`. Contexte produit : `PRODUCT.md`.
