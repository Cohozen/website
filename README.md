# corentinlegal.dev

Site personnel de Corentin Le Gal. Astro statique, déployé sur Cloudflare Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
npm run check    # Biome
```

Node 22.23.4 ou plus récent (exigé par Astro 7).

## Déploiement

### Automatique

Le projet Cloudflare Pages est relié au dépôt GitHub : chaque push sur `master` part en
production, chaque autre branche obtient une URL de prévisualisation en `*.pages.dev`.
Réglages du projet : commande de build `npm run build`, dossier de sortie `dist`.

### À la main, en CLI

Avec [Wrangler](https://developers.cloudflare.com/workers/wrangler/), sans passer par GitHub :

```bash
npx wrangler login                       # une seule fois, ouvre le navigateur
npx wrangler pages project list          # retrouver le nom exact du projet
npm run build
npx wrangler pages deploy dist --project-name <nom-du-projet> --branch master
```

`--branch master` publie en production ; un autre nom de branche publie une prévisualisation.
Le build se fait sur ta machine : c'est ta version locale de Node qui compte.

## Ajouter un projet au portfolio

Un fichier Markdown par projet dans `src/content/projets/` (schéma dans `src/content.config.ts`).
`statut: bientot` affiche la `mention` ; `statut: disponible` affiche les liens `appStore` et
`playStore`. Les images vont dans `src/assets/`.

## Logo et police d'affichage

Générés par `scripts/brand.py` puis `scripts/brand-png.mjs` : voir `brand/README.md`.
Système visuel : `DESIGN.md`. Contexte produit : `PRODUCT.md`.
