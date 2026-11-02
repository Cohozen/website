---
name: Corentin Le Gal
description: Un cyclorama de théâtre, de la nuit au jour. Le défilement lève la lumière jusqu'aux projets.
colors:
  nuit: "#050505"
  sol: "#03040c"
  cobalt: "#0a33ff"
  horizon-nuit: "#6f86ff"
  violet-transition: "#7a45d8"
  rose: "#ff6aae"
  cue-2: "#ff7cb7"
  cue-3: "#ff8fc1"
  cue-4: "#ffa3cb"
  aube: "#ffc1d6"
  jour: "#f7f5ff"
  blanc: "#ffffff"
  e-clair: "#f7f5ff"
  e2-nuit: "#a9adc4"
  e2-cobalt: "#d3dbff"
  e-sombre: "#0b0d1a"
  e2-rose: "#3a1027"
  e2-aube: "#4a2234"
  e2-jour: "#44465a"
typography:
  display:
    fontFamily: "CLG Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 12.6vw, 11.5rem)"
    fontWeight: 800
    lineHeight: 0.74
    letterSpacing: "0.01em"
  headline:
    fontFamily: "CLG Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.92
  project-title:
    fontFamily: "CLG Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.8
  cue-title:
    fontFamily: "CLG Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.85
  label:
    fontFamily: "CLG Stencil, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  tagline:
    fontFamily: "Albert Sans Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.25
  lead:
    fontFamily: "Albert Sans Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Albert Sans Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\" 1"
  meta:
    fontFamily: "Albert Sans Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  cue-numeral:
    fontFamily: "Albert Sans Variable, Helvetica Neue, Arial, sans-serif"
    fontWeight: 600
    letterSpacing: "0.02em"
    fontFeature: "\"tnum\" 1"
rounded:
  none: "0px"
  app-icon: "16px"
spacing:
  page: "clamp(20px, 5vw, 72px)"
  fondu: "clamp(160px, 22vh, 260px)"
  container: "1280px"
  phase-end: "clamp(72px, 12vh, 140px)"
  cue: "clamp(32px, 5vh, 52px)"
  gutter: "clamp(16px, 2.4vw, 32px)"
components:
  action:
    textColor: "{colors.e-sombre}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  action-hover:
    backgroundColor: "{colors.e-sombre}"
    textColor: "{colors.aube}"
  action-pleine:
    backgroundColor: "{colors.e-sombre}"
    textColor: "{colors.jour}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  action-pleine-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.blanc}"
  conduite-nuit:
    backgroundColor: "{colors.nuit}"
    textColor: "{colors.e-clair}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  conduite-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.e-clair}"
  conduite-rose:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.e-sombre}"
  conduite-aube:
    backgroundColor: "{colors.aube}"
    textColor: "{colors.e-sombre}"
  conduite-jour:
    backgroundColor: "{colors.jour}"
    textColor: "{colors.e-sombre}"
  repere:
    textColor: "{colors.jour}"
    typography: "{typography.meta}"
    height: "44px"
  cue-band:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.e-sombre}"
    padding: "{spacing.cue}"
  mention:
    textColor: "{colors.e-sombre}"
    typography: "{typography.label}"
    padding: "12px 0"
  app-icon:
    rounded: "{rounded.app-icon}"
    size: "72px"
---

# Design System: Corentin Le Gal

## Overview

**Creative North Star: "Le cyclorama, de la nuit au jour"**

La page est un cyclorama de théâtre : un seul fond continu de lumière, découpé en bandes horizontales, que le défilement fait passer de la nuit noire au plein jour. Cinq phases se succèdent dans un ordre fixe (nuit, montée cobalt, rose, aube, plein jour), chacune avec son aplat de lumière et l'encre qui reste lisible dessus. Les projets arrivent quand la lumière est pleine : on monte vers eux.

Le vocabulaire vient de la régie lumière. Les noms et les titres sont au pochoir de plan de feux (CLG Stencil, capitales), les repères sont des numéros de conduite (« 1.1 », « LX 3.2 »), la phase courante s'affiche sur un pupitre de conduite, et la stack se lit comme un plan de feux en filets fins. Le texte courant est en Albert Sans, une sans géométrique claire, à 18 px. Tout est plat : la profondeur vient de la lumière (des aplats et de larges sources décentrées), jamais d'une ombre. Les angles sont droits.

Refus confirmés : le ton consultant et le blanc éditorial (c'est le monde de Cernix, dont rien n'est repris), le cliché développeur (terminal, monospace, néon), le format CV (timeline, barres de compétences, logos en liste).

**Key Characteristics:**
- Un seul fond de lumière en bandes horizontales, toujours de la nuit vers le jour.
- Chaque phase a son aplat et ses deux encres (texte, texte second).
- La lumière vient de larges champs décentrés, jamais d'une lueur de bord ni d'un halo.
- Pochoir pour les noms, titres et étiquettes ; Albert Sans pour tout ce qui se lit.
- Plat, angles droits, aucune ombre.
- Le cobalt est l'horizon : la ligne sur laquelle tout se tient.
- Un seul mouvement écrit : la lumière d'horizon qui se lève puis s'intensifie au défilement.

## Colors

Une suite de lumières de scène, de la plus sombre à la plus claire, chacune doublée de ses encres. Toutes les valeurs sont des propriétés personnalisées sur `:root` dans `src/styles/global.css` (sauf `horizon-nuit`, `violet-transition` et la rampe des cues, écrites en littéral dans la page) ; `scripts/brand.py` reprend les mêmes valeurs pour le logo.

### Primary
- **Cobalt d'horizon** (`cobalt`) : la ligne d'horizon. Filet de 2 px au sol de la nuit, filet sous les captures de projet, trait du monogramme sur fond clair, aplat de la phase « Montée cobalt », fond du pupitre dans cette phase, survol du bouton plein, sélection de texte, barre de défilement.
- **Cobalt de nuit** (`horizon-nuit`) : le même cobalt éclairci pour rester lisible sur le noir. Trait du monogramme sur fond sombre, étiquettes des repères de la nuit.

### Secondary
- **Rose de scène** (`rose`) : aplat de la phase « Rose », celle du parcours ; première cue (LX 3.1) et fond du pupitre dans cette phase.
- **Rampe des cues** (`cue-2`, `cue-3`, `cue-4`) : les quatre bandes du parcours montent d'un cran de lumière chacune, `rose` → `cue-2` → `cue-3` → `cue-4`. La dernière valeur sert de départ au fondu de l'aube : le parcours débouche sans rupture sur les projets.
- **Violet de passage** (`violet-transition`) : lumière intermédiaire, jamais un aplat. Mi-chemin du fondu cobalt → rose, et grande source basse à droite de la phase cobalt (à 78 % d'opacité).

### Tertiary
- **Aube** (`aube`) : aplat de la phase des projets ; texte du bouton à filet survolé.

### Neutral
- **Noir cyclo** (`nuit`) : fond du document et de la première phase, fond du pupitre de nuit, `theme-color`.
- **Sol** (`sol`) : le dessous de l'horizon de la nuit, un noir à peine bleuté.
- **Jour** (`jour`) : aplat de la dernière phase ; étoiles, nom et liens de la nuit ; texte du bouton plein.
- **Blanc** (`blanc`) : fin du fondu du plein jour et pied de page ; texte sur cobalt.
- **Encre claire** (`e-clair`, `e2-nuit`, `e2-cobalt`) : texte principal sur les phases sombres (nuit, cobalt) ; `e2-*` pour le texte second de chaque phase sombre.
- **Encre sombre** (`e-sombre`, `e2-rose`, `e2-aube`, `e2-jour`) : texte principal sur les phases claires (rose, aube, jour), boutons pleins, filet de la mention ; `e2-*` pour le texte second de chaque phase claire, teinté par sa lumière.
- **Filets** : l'encre de la phase en transparence. Sur sombre, `e-clair` de 25 à 45 % ; sur clair, `e-sombre` de 18 à 30 %.

### Named Rules
**The Rising Light Rule.** Les phases se suivent toujours dans l'ordre nuit, cobalt, rose, aube, jour, et chaque bande est plus claire que la précédente. Une nouvelle section prend sa place dans cette montée ; elle ne revient jamais vers la nuit.

**The Phase Ink Rule.** Une phase = un aplat + une encre + une encre seconde (`--lumiere`, `--encre`, `e2-*`). Un texte prend l'encre de la phase où il se trouve, jamais celle d'une autre.

**The Wide Field Rule.** La lumière se pose en larges champs : un aplat, un fondu vertical, une source radiale décentrée de 55 à 150 % de large. Jamais une lueur de bord, un halo autour d'un objet ou un néon.

**The Cobalt Horizon Rule.** Le cobalt trace l'horizon. Partout où un objet doit se tenir debout (le nom dans la nuit, le monogramme, les écrans de projet), il se tient sur un filet cobalt.

## Typography

**Display Font:** CLG Stencil, Big Shoulders Stencil (OFL) figée en 700 et 800 avec un L redessiné (repli Arial Narrow, sans-serif)
**Body Font:** Albert Sans Variable (repli Helvetica Neue, Arial, sans-serif)

CLG Stencil est générée par `scripts/brand.py` et auto-hébergée dans `public/fonts/` (le 800 est préchargé). Dans l'original, le pied du L se détache de la fût et se lit comme un point ; le L redessiné garde le pied attaché et place la coupe pochoir à l'horizontale, à mi-hauteur. Albert Sans vient de Fontsource.

**Character:** Le pochoir est le lettrage d'un plan de feux : étroit, en capitales, monumental en titre et espacé en étiquette. Albert Sans porte tout ce qui se lit, en chiffres tabulaires sur toute la page.

### Hierarchy
- **Display** (800, `clamp(3.4rem, 12.6vw, 11.5rem)`, interligne 0,74) : le nom, debout sur l'horizon de la nuit. Sous 640 px il passe sur deux lignes, `min(21vw, 6.5rem)`, interligne 0,86.
- **Headline** (800, `clamp(2.6rem, 6.4vw, 5.75rem)`, interligne 0,92, 14 caractères au plus) : un titre par phase.
- **Project title** (800, `clamp(3.5rem, 8vw, 7rem)`, interligne 0,8) : le nom d'un projet, à côté de son icône.
- **Cue title** (800, `clamp(3rem, 7vw, 6rem)`, interligne 0,85) : le nom d'une maison dans une cue du parcours.
- **Label** (pochoir 700, 14 à 17 px, approche 0,1 à 0,14 em, capitales) : pupitre de conduite, étiquettes des repères, termes du plan de feux, mention de sortie. Toujours le nom de quelque chose, jamais une phrase.
- **Tagline** (Albert Sans 600, `clamp(1.375rem, 2vw, 1.75rem)`, interligne 1,25) : l'accroche d'un projet.
- **Lead** (Albert Sans 500, `clamp(1.25rem, 1.8vw, 1.5rem)`, interligne 1,4) : la phrase qui ouvre une phase, à l'encre principale.
- **Body** (Albert Sans 400, 18 px, interligne 1,6, 62 caractères au plus, `text-wrap: pretty`) : texte courant, à l'encre seconde de la phase.
- **Meta** (Albert Sans 400, 16 px) : années et rôles des cues, stack d'un projet, valeurs des repères, pied de page.
- **Cue numeral** (Albert Sans 600, approche 0,02 em, tabulaire) : les numéros de conduite (« LX 1 », « 1.2 », « LX 3.4 »), dans l'étiquette pochoir qui les porte.

### Named Rules
**The Stencil Names Rule.** Le pochoir écrit des noms : le nom, les titres de phase, les maisons, les projets, les étiquettes. Il ne descend jamais dans un paragraphe, une valeur ou un lien de texte.

**The Readable Numeral Rule.** Un chiffre de conduite est en Albert Sans tabulaire, jamais au pochoir : dans CLG Stencil, le 1 se lit comme un I.

## Layout

Un conteneur de 1280 px au plus (`container`), marges latérales `page`, et une pile verticale de phases pleine largeur. Chaque phase s'ouvre sur un fondu : pendant `fondu` (160 à 260 px), la lumière de la phase précédente (`--avant`) se fond dans la sienne (`--lumiere`), puis le contenu se pose sur l'aplat, 24 px plus bas ; elle se ferme sur `phase-end`. Le parcours supprime ce bas : ses cues vont jusqu'au bord et passent la main à l'aube.

La nuit occupe au moins tout l'écran (`max(100svh, 640px)`). Son horizon est à 64 % de la hauteur (46 % sous 640 px) : le nom repose dessus, la présentation et les repères commencent juste dessous, sur une grille 5/7. Le monogramme est en haut à gauche (72 px, 44 px sous 640 px). Les phases suivantes utilisent des grilles asymétriques : 12 colonnes pour le métier (titre sur 7, texte sur les 5 dernières, plan de feux sur toute la largeur en 3 colonnes), 3/4/5 pour une cue, 5/7 pour un projet, 7/5 pour le plein jour. La gouttière horizontale est `gutter` ou monte jusqu'à 64 à 80 px entre texte et image.

Réponses observées : sous 1024 px, la nuit, le métier, les projets et le plein jour passent en une colonne, le plan de feux en deux, une cue en 1/2 ; sous 640 px, tout est en une colonne, et la maison passe au-dessus de ses années. Toute cible tactile mesure au moins 44 px.

### Named Rules
**The One-Pixel Overlap Rule.** Chaque phase remonte d'un pixel sur la précédente (`margin-top: -1px`). Une limite tombée sur un demi-pixel laisserait voir la nuit entre deux lumières.

## Elevation & Depth

Le système est plat : aucune `box-shadow`, aucun flou. La profondeur est celle d'une scène éclairée : des aplats qui se succèdent, des fondus verticaux entre phases, et une ou deux sources radiales larges et décentrées par phase (une lumière bleue haute à gauche et une violette basse à droite sur le cobalt, une rose basse à gauche sur le rose, une blanche à droite sur l'aube). La nuit a son propre plan : 46 étoiles fixes (positions tirées d'une graine, identiques à chaque build), un ciel, l'horizon, le sol.

### Named Rules
**The Light Not Shadow Rule.** On donne du relief en éclairant, jamais en ombrant. Un objet ressort parce qu'il est posé dans une lumière, pas parce qu'il projette quelque chose.

## Shapes

Angles droits partout (`rounded.none`) : boutons, pupitre, bandes, captures. La seule exception est l'icône d'application (`rounded.app-icon`, 16 px) : c'est la forme réelle du produit, pas un choix du site. Les contours sont des filets fins (1 px pour les repères, le plan de feux, la mention, le pied ; 1,5 px pour le bouton à filet). Le seul trait épais est l'horizon cobalt, à 2 px.

Les flèches sont des SVG tracés à 1,6 px : oblique pour un lien sortant, verticale pour descendre dans la page.

## Components

### Buttons
Des actions de régie, nettes et sans couleur propre.
- **Shape:** angles droits, 48 px de haut, 22 px de marge latérale, typographie Albert Sans 600, flèche SVG.
- **À filet (`action`) :** filet de 1,5 px à l'encre courante, fond transparent. Au survol, fond `e-sombre`, texte `aube`.
- **Plein (`action-pleine`) :** fond `e-sombre`, texte `jour`. Au survol, fond et filet `cobalt`, texte `blanc` : l'action prend la couleur de l'horizon.
- **Hover / Focus:** couleurs en 0,25 s ; la flèche avance de 2 px en diagonale (0,3 s `cubic-bezier(0.16, 1, 0.3, 1)`). Focus global : contour de 2 px à l'encre courante, décalé de 4 px.

### Pupitre de conduite (signature)
L'indicateur de la phase courante, fixe, en étiquette pochoir : le numéro de conduite (« LX 1 » à « LX 5 », en cue numeral à 75 % d'opacité) puis le nom de la phase. Il prend l'aplat et l'encre de la phase dont la lumière occupe le haut de l'écran, avec un filet de 1 px à 30 % de son encre ; le changement de couleur dure 0,5 s. À partir de 1200 px, c'est un rail vertical dans la marge droite, centré en hauteur, hors du texte. En dessous, c'est un bandeau opaque pleine largeur en haut de l'écran, aligné à droite, filet en bas ; le texte défile dessous. Dans la nuit, le bandeau est transparent. Il est masqué aux lecteurs d'écran (`aria-hidden`).

### Repères de conduite
Les liens de la nuit (GitHub, LinkedIn, email, puis le projet en cours) : une étiquette pochoir en `horizon-nuit` précédée de son numéro (« 1.1 » à « 1.4 », en `e2-nuit`), puis la valeur en Albert Sans 16 px, `jour`, soulignée d'un filet de 1 px à 28 % qui passe à `jour` au survol (0,3 s).

### Plan de feux
La stack en mots, jamais en logos : une liste de définitions sur 3 colonnes, filet de 1 px à 45 % au-dessus, filet à 25 % sous chaque entrée. Le terme est une étiquette pochoir en `e2-cobalt`, la valeur en Albert Sans 19 px.

### Cues du parcours (signature)
Le parcours en quatre bandes pleine largeur, numérotées LX 3.1 à LX 3.4, chacune un cran de lumière plus claire que la précédente (rampe `rose` → `cue-4`). Dans chaque bande : numéro, années et rôle à gauche, la maison en cue title, la note à droite à l'encre `e2-rose`. Pas de ligne de temps, pas de points, pas de logos.

### Projet
Texte sur 5 colonnes, captures sur 7. Le titre se tient à côté de l'icône de 72 px (rayon 16 px), puis l'accroche, le corps en `e2-aube`, la mention de sortie (étiquette pochoir entre deux filets d'encre de 1 px) tant que le statut est `bientot`, la stack en meta, et le bouton à filet vers le site. Les captures sont deux écrans alignés par le bas, le second à 88 %, debout sur un filet cobalt de 2 px : des silhouettes sur l'horizon. Un projet = un fichier dans `src/content/projets/`.

### Monogramme
CLG au pochoir 800, vectorisé, traversé à mi-hauteur par la ligne d'horizon : une coupe masque les lettres et un trait déborde de chaque côté. Le trait est `cobalt` sur fond clair, `horizon-nuit` sur fond sombre ; les lettres suivent l'encre (`currentColor`). Le même dessin sert de logo, d'avatar, de favicon et de marque de pied de page. Tout fichier de marque est généré par `scripts/brand.py`, jamais retouché à la main.

### Horizon de la nuit (mouvement)
Le seul mouvement écrit de la page. Au chargement, la lumière cobalt au-dessus de l'horizon se lève : de 55 à 100 % de sa hauteur et de 35 à 100 % d'opacité, en 1,6 s `cubic-bezier(0.16, 1, 0.3, 1)`. Au défilement (là où `animation-timeline: scroll()` existe), elle s'intensifie sur la première hauteur d'écran jusqu'à 190 % de hauteur, saturation 1,3 et luminosité 1,25. Sous `prefers-reduced-motion`, rien ne bouge : la lumière est fixe et les transitions du pupitre, des flèches et des boutons sont coupées.

## Do's and Don'ts

### Do:
- **Do** placer chaque nouvelle section dans la montée nuit, cobalt, rose, aube, jour, avec son aplat (`--lumiere`), son encre (`--encre`) et la lumière précédente en départ de fondu (`--avant`).
- **Do** faire remonter chaque phase d'un pixel sur la précédente.
- **Do** éclairer une phase par une ou deux sources radiales larges et décentrées, en plus de son aplat.
- **Do** poser ce qui doit se tenir debout sur un filet cobalt de 2 px.
- **Do** écrire noms, titres et étiquettes au pochoir en capitales, et tout le reste en Albert Sans.
- **Do** composer les numéros de conduite en Albert Sans 600 tabulaire.
- **Do** tracer le trait du monogramme en `cobalt` sur fond clair et en `horizon-nuit` sur fond sombre.
- **Do** garder des angles droits, des filets fins et des cibles tactiles de 44 px.
- **Do** couper tout mouvement sous `prefers-reduced-motion`.
- **Do** générer police et fichiers de marque avec `scripts/brand.py`.

### Don't:
- **Don't** ajouter d'ombre, de flou, de lueur de bord, de halo ou d'effet néon.
- **Don't** arrondir un angle ; seule l'icône d'application garde son rayon de 16 px.
- **Don't** écrire un paragraphe ou un chiffre de conduite au pochoir.
- **Don't** adopter l'allure d'un cabinet de conseil ou d'une page éditoriale blanche.
- **Don't** utiliser terminal, monospace ou néon pour dire « développeur ».
- **Don't** présenter le parcours en CV : ni timeline, ni barres de compétences, ni logos en liste.
- **Don't** reprendre l'identité Cernix : ni strates, ni carotte, ni Archivo, ni Source Serif 4.
- **Don't** faire revenir la lumière vers la nuit après la première phase.
