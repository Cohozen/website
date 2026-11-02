# Corentin Le Gal — logo

Monogramme **CLG** au pochoir (Big Shoulders Stencil, graisse 800), posé sur la ligne d'horizon
du site : la nuit au-dessus, l'horizon cobalt, le sol en dessous. Le texte est vectorisé : aucun
fichier n'a besoin de la police.

Tout est généré : ne pas retoucher à la main, modifier `scripts/brand.py` puis relancer.

```bash
python3 -m venv .venv-brand && .venv-brand/bin/pip install fonttools brotli uharfbuzz
.venv-brand/bin/python scripts/brand.py
node scripts/brand-png.mjs
```

| Fichier | Usage |
| --- | --- |
| `clg-avatar.svg`, `clg-avatar-460.png`, `clg-avatar-1024.png` | Photo de profil GitHub, LinkedIn, réseaux : CLG debout sur l'horizon cobalt, fond nuit |
| `clg-symbole-encre.svg` | Monogramme une encre sur fond clair (documents, signatures) |
| `clg-symbole-blanc.svg` | Monogramme une encre sur fond sombre |
| `corentin-le-gal-logo-encre.svg` | Monogramme + nom, sur fond clair |
| `corentin-le-gal-logo-blanc.svg` | Monogramme + nom, sur fond sombre |
| `og.svg` → `public/og.png` | Image de partage 1200 × 630 |

Le script écrit aussi `public/favicon.svg`, `public/apple-touch-icon.png` et
`src/assets/monogramme.svg` (version `currentColor` utilisée dans la page).

Couleurs : nuit `#050505`, cobalt `#0a33ff`, rose `#ff6aae`, jour `#f7f5ff`, encre `#0b0d1a`.
Le logo reste distinct de l'identité Cernix : pas de strates, pas de carotte, pas d'Archivo.
