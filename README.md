# corentinlegal.dev

Site personnel de Corentin Le Gal. Astro statique, déployé sur Cloudflare Workers. Les
animations utilisent GSAP et Lenis (voir « Horizon de la nuit » et « Console de conduite » dans
`DESIGN.md`).

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

### Domaines

`corentinlegal.dev` est un domaine personnalisé du Worker. `www.corentinlegal.dev` est un
enregistrement `AAAA 100::` proxifié : une Redirect Rule de la zone le renvoie en 301 vers
`https://corentinlegal.dev`, chemin et paramètres conservés. « Always Use HTTPS » est actif sur la
zone.

## Ajouter un projet au portfolio

Un fichier Markdown par projet dans `src/content/projets/` (schéma dans `src/content.config.ts`).
`statut: bientot` affiche la `mention` ; `statut: disponible` affiche les liens `appStore` et
`playStore`. Les images vont dans `src/assets/`.

## Référencement

Un homonyme, webdesigner à Angers (corentin-legal.fr), sort sur les mêmes recherches. Le site
s'en distingue par ce qu'il est seul à dire : lead développeur, TypeScript et .NET, fondateur
de Cernix, GitHub `Cohozen`, TryCast.

- Titre et description : props de `<Layout>` dans `src/pages/index.astro`.
- Données structurées : le JSON-LD `donnees` de `src/pages/index.astro` (`ProfilePage`,
  `WebSite`, `Person`, un `SoftwareApplication` par projet). Il est construit à partir de
  `liens`, `stack` et de la collection `projets` : il suit le contenu sans édition à part.
  Le `sameAs` relie la personne à GitHub, LinkedIn et `https://cernix.fr/#qui`.
- `public/robots.txt` : sitemap et `Content-Signal: search=yes, ai-input=yes` (réponses des
  moteurs IA permises ; l'entraînement n'est ni permis ni refusé).
- Favicon : `favicon.svg` pour les navigateurs, `favicon.ico` 96 × 96 pour Google et les
  robots (voir `brand/README.md`).
- Le domaine est vérifié dans Google Search Console, où le sitemap est soumis. Après un
  changement de titre ou de description, y demander l'indexation de la page d'accueil.

## Logo et police d'affichage

Générés par `scripts/brand.py` puis `scripts/brand-png.mjs` : voir `brand/README.md`.
Système visuel : `DESIGN.md`. Contexte produit : `PRODUCT.md`. Consignes pour les agents : `CLAUDE.md`.
