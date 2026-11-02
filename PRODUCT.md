# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro statique, déployé sur Cloudflare Pages, Biome pour le lint et le format (même socle que
le site Cernix et le site TryCast). Domaine : corentinlegal.dev. Pas d'analytics.

## Users

Vitrine sans objectif de conversion. Visiteurs : des pairs développeurs, la communauté, des
curieux, et toute personne qui tape le nom de Corentin après l'avoir croisé (GitHub, LinkedIn,
une app, un échange). Ils veulent savoir qui il est, ce qu'il sait faire, ce qu'il a construit,
et le joindre ou le suivre.

## Product Purpose

Le site personnel de Corentin Le Gal, développeur. C'est son identité de développeur : son
parcours, sa stack, ses projets personnels, et les liens pour le joindre (GitHub, LinkedIn,
email). Succès : un visiteur repart avec une image claire et mémorable du développeur, a vu au
moins un projet, et sait où le retrouver.

## Positioning

Le site de la personne qui code, pas d'une offre. Cernix (cernix.fr) est le cabinet de conseil
de Corentin : il vend l'audit et l'accompagnement en amont des décisions techniques, à des CTO.
Le site perso ne vend rien et ne concurrence pas Cernix : aucune offre, aucun tarif, aucun
appel de cadrage, aucun discours de conseil. Il montre le développeur (11 ans de code, des
projets qu'il construit encore lui-même) et renvoie vers Cernix pour tout ce qui relève d'une
mission, avec la mention « fondateur de Cernix ».

## Operating Context

- Site en français seul.
- Une page d'accueil (identité, parcours, stack, liens) et une section portfolio extensible,
  qui accueillera d'autres projets plus tard.
- Passerelle vers Cernix : mention fondateur et lien vers https://cernix.fr ; une demande de
  mission doit être orientée vers Cernix, pas traitée ici.
- Un logo dédié au site est à créer, réutilisable ailleurs pour l'image de développeur
  (avatar GitHub, favicon, réseaux). Il doit rester distinct de l'identité Cernix.

## Capabilities and Constraints

- Statique, sans back-end ni formulaire. Contact par lien email.
- Portfolio pensé comme une collection de contenus (un fichier par projet), pour ajouter un
  projet sans toucher à la mise en page.
- Projet vedette au lancement : TryCast, application mobile de pronostics rugby entre amis
  (score exact et bonus offensifs, points pondérés par les cotes, classements par ligue et
  général, gratuite et sociale). Sortie prochaine sur l'App Store et le Play Store ; cible
  Coupe du monde 2027, soft-launch sur le 6 Nations 2027. Site : https://www.trycast.fr. Stack :
  Expo / React Native, TypeScript, Supabase, TanStack Query, NativeWind. Les liens de store ne
  sont pas encore publiés : le site doit pouvoir afficher « bientôt disponible » puis les liens.
- Undecided : liste des autres projets du portfolio (candidats dans `~/Code/personal` et
  `~/Code/opensource`, non confirmés) ; niveau de détail du parcours (le dossier de compétences
  est un document de mission, le site en reprend une version courte) ; dossier de compétences
  téléchargeable ou non.

## Brand Commitments

- Nom affiché : Corentin Le Gal. Activité : développeur (le dossier dit « Lead Tech »,
  « développeur JS/TS senior »).
- Voix : première personne, directe, concrète, sans jargon marketing.
- Ne pas reprendre l'identité Cernix (carte géologique, strates colorées, Archivo / Source
  Serif 4, carotte) : le site perso doit se reconnaître comme un autre objet.

## Evidence on Hand

- Dossier de compétences, source du parcours et des compétences :
  `~/Documents/Entreprise/Marketing/Dossier de compétences — Corentin Le Gal — Lead Tech.md`
  (eKonsilio 2022–2026 Lead Développeur ; KS2 2021–2022 ; Comerso 2017–2021 ; ILTR 2015–2017).
  Réalisations chiffrées utilisables telles quelles : temps de réponse API divisé par 3
  (remplacement de Keycloak), migration Node 18 → 22 d'une quinzaine de conteneurs sans
  interruption, couverture de tests au-delà de 95 % (KS2) et 90 % (Comerso), équipe de 6 à 9
  développeurs.
- TryCast : dépôt `~/Code/personal/trycast`, visuels de store dans `docs/stores/assets`,
  vidéo de démo `~/Downloads/trycast-demo.mp4`, site https://www.trycast.fr.
- Liens : GitHub https://github.com/Cohozen, LinkedIn
  https://www.linkedin.com/in/corentin--le--gal/, email corentin.legal@proton.me.
- Portrait noir et blanc existant côté Cernix (`cernix/website/src/assets/corentin-le-gal.webp`),
  réutilisation non confirmée.
- Absences : aucun témoignage, aucune métrique d'usage de TryCast (pas encore sorti) ; n'en
  inventer aucune.

## Product Principles

1. Le développeur avant l'offre : le site montre ce que Corentin construit et sait faire, il ne
   vend pas de prestation.
2. Une porte vers Cernix, pas un doublon : tout ce qui ressemble à du conseil renvoie à
   cernix.fr.
3. Les projets parlent : un projet montré vaut mieux qu'une compétence listée.
4. Léger et durable : un site qui se charge vite, qu'on met à jour en ajoutant un fichier.
