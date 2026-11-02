# Consignes pour les agents

Site personnel de Corentin Le Gal : Astro statique servi par le Worker Cloudflare
`personal-website`. Voir `README.md` pour les commandes et le déploiement.

## Git

- Travailler directement sur `master`, sans branche.
- Beaucoup de petits commits, un sujet par commit, au fil du travail. Messages en anglais au
  format `feat:` / `fix:` / `docs:` / `chore:` suivi d'une phrase courte.
- Ne jamais pousser sans l'accord explicite de Corentin : un push sur `master` part directement
  en production. Commiter reste permis.

## Références

- `PRODUCT.md` : pour qui est le site, ce qu'il montre, ce qu'il ne doit pas faire (concurrencer
  Cernix).
- `DESIGN.md` et `.impeccable/design.json` : le système visuel « De la nuit au jour ».
- `brand/README.md` : logo et police CLG Stencil, générés par `scripts/brand.py` puis
  `scripts/brand-png.mjs`. Ne jamais retoucher ces fichiers à la main.
- `src/content/projets/` : un fichier Markdown par projet du portfolio.
