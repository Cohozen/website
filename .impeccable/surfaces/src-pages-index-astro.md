---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: page d'accueil corentinlegal.dev

Scope : page d'accueil (`src/pages/index.astro`), et par héritage les pages projet du portfolio.
Visitor mode : Experience. La personne mène le premier écran ; les projets suivent.

Audience : pairs développeurs, curieux, personnes qui tapent le nom après GitHub, LinkedIn ou
TryCast. Action : comprendre qui est Corentin, voir TryCast, retrouver ses liens. Aucune offre :
la mission renvoie vers cernix.fr. À éviter (choix de Corentin) : ton consultant, cliché dev
(terminal, monospace, néon), format CV (timeline, barres de compétences, logos en liste).

## Direction contract

THESIS: La page est un cyclorama : le défilement lève le jour, de la nuit noire de l'ancien site
jusqu'au plein jour où les projets sont pleinement éclairés. Elle refuse le portfolio dev
habituel (en-tête, grille de cartes, icônes de stack) et le blanc éditorial.

OWN-WORLD: Un seul fond continu de lumière en bandes horizontales : noir cyclo #050505, horizon
cobalt #0A33FF, rose #FF6AAE, aube #FFC1D6, jour #F7F5FF, blanc #FFFFFF. Lumière en larges champs,
jamais en lueur de bord ni en néon. Capitales au pochoir de plan de feux (Big Shoulders Stencil)
pour les noms de phase et le nom ; sans géométrique claire pour le texte ; chiffres tabulaires
pour les numéros de conduite. Filets fins, angles droits, aucune ombre.

STORY: Nuit : qui je suis, mes liens. Montée cobalt : ce que je fais, la stack en mots.
Rose : le parcours, quatre maisons en phases, pas une timeline. Aube : TryCast en pleine
lumière, « bientôt sur les stores ». Plein jour : fondateur de Cernix, et pour une mission,
cernix.fr.

FIRST VIEWPORT: Plein écran noir sans profondeur, quelques étoiles éparses héritées de l'ancien
site. CORENTIN LE GAL au pochoir, à échelle monumentale, posé sur une fine bande d'horizon
cobalt au tiers bas. Dessous, une ligne : développeur, TypeScript, Node.js et .NET, Angers. En
bas à gauche, GitHub, LinkedIn, email comme repères de conduite numérotés. En haut à droite,
l'indicateur de phase courante (« Q 001 · Nuit »). Pas de bouton d'action.

FORM: Cyclorama de théâtre, nuit vers jour (challenger catalogue
stagecraft-theater-lighting-cyclorama-dawn, choisi au tour audacieux). Signature : la phase de
lumière est liée au défilement (scroll-driven animation), l'indicateur de conduite suit ;
mouvement réduit : bandes fixes, sans transition. Le monogramme CLG au pochoir, traversé par la
ligne d'horizon, sert de logo, d'avatar et de favicon. Seed key 62b52668.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Undecided

- Face du texte courant (sans géométrique, hors liste des polices par défaut) : à fixer au build.
- Autres projets du portfolio après TryCast.
- Réutilisation du portrait noir et blanc.
