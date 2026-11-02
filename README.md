# corentinlegal.dev

Site personnel de Corentin Le Gal. Astro statique, déployé sur Cloudflare Workers.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
npm run check    # Biome
```

Node 22.23.4 ou plus récent (exigé par Astro 7).

## Déploiement

Le site est un **Worker** Cloudflare nommé `personal-website`, qui sert les fichiers statiques
de `dist/` (pas un projet Pages). Sa configuration est dans `wrangler.jsonc`.

### Automatique

Le Worker est relié au dépôt GitHub (Workers Builds) : chaque push sur `master` part en
production.

### À la main, en CLI

```bash
npx wrangler login     # une seule fois, ouvre le navigateur
npm run deploy         # astro build, puis wrangler deploy
```

`npx wrangler deploy --dry-run` vérifie ce qui serait envoyé sans rien publier. Le build se
fait sur ta machine : c'est ta version locale de Node qui compte.

## Ajouter un projet au portfolio

Un fichier Markdown par projet dans `src/content/projets/` (schéma dans `src/content.config.ts`).
`statut: bientot` affiche la `mention` ; `statut: disponible` affiche les liens `appStore` et
`playStore`. Les images vont dans `src/assets/`.

## Logo et police d'affichage

Générés par `scripts/brand.py` puis `scripts/brand-png.mjs` : voir `brand/README.md`.
Système visuel : `DESIGN.md`. Contexte produit : `PRODUCT.md`. Consignes pour les agents : `CLAUDE.md`.
