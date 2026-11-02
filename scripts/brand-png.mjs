// Exporte en PNG les SVG produits par scripts/brand.py (à lancer après lui).
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
