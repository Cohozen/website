// Exporte en PNG les SVG produits par scripts/brand.py (à lancer après lui).
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const exports = [
    ["brand/clg-avatar.svg", "public/apple-touch-icon.png", 180],
    ["brand/clg-avatar.svg", "brand/clg-avatar-460.png", 460], // GitHub, LinkedIn
    ["brand/clg-avatar.svg", "brand/clg-avatar-1024.png", 1024],
    ["brand/og.svg", "public/og.png", 1200],
];

for (const [src, out, width] of exports) {
    await sharp(src, { density: 300 }).resize({ width }).png().toFile(out);
    console.log(out);
}

// favicon.ico : un PNG 96 × 96 dans un conteneur ICO. Google veut un multiple de 48 px, et
// plusieurs robots demandent /favicon.ico sans lire le <link rel="icon">.
const png = await sharp("brand/clg-avatar.svg", { density: 300 })
    .resize({ width: 96 })
    .png()
    .toBuffer();
const entete = Buffer.alloc(22);
entete.writeUInt16LE(1, 2); // type : icône
entete.writeUInt16LE(1, 4); // une image
entete.writeUInt8(96, 6); // largeur
entete.writeUInt8(96, 7); // hauteur
entete.writeUInt16LE(1, 10); // plans
entete.writeUInt16LE(32, 12); // bits par pixel
entete.writeUInt32LE(png.length, 14);
entete.writeUInt32LE(22, 18); // décalage des données
await writeFile("public/favicon.ico", Buffer.concat([entete, png]));
console.log("public/favicon.ico");
