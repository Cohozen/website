# Génère la police d'affichage et le logo de corentinlegal.dev.
#
# Usage (depuis la racine du projet, après npm install) :
#   python3 -m venv .venv-brand && .venv-brand/bin/pip install fonttools brotli uharfbuzz
#   .venv-brand/bin/python scripts/brand.py
#   node scripts/brand-png.mjs
#
# 1. Police : Big Shoulders Stencil (OFL) figée en 700 et 800, avec un L redessiné. Dans
#    l'original, le pied du L est détaché de la fût et se lit comme un point (« GAL. »). Ici le
#    pied tient à la fût et la coupe pochoir passe horizontalement à mi-hauteur. Renommée
#    « CLG Stencil » (version modifiée, licence OFL inchangée : public/fonts/OFL.txt).
# 2. Logo : monogramme CLG debout sur l'horizon, vectorisé depuis cette police.
# Couleurs = src/styles/global.css ; relancer si elles changent.
import io
import os
import shutil

import uharfbuzz as hb
from fontTools import subset
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

SOURCE = "node_modules/@fontsource-variable/big-shoulders-stencil"
FONT = f"{SOURCE}/files/big-shoulders-stencil-latin-standard-normal.woff2"
FAMILLE = "CLG Stencil"
# Latin de base, Latin-1 (accents français), ponctuation typographique.
UNICODES = [*range(0x20, 0x7F), *range(0xA0, 0x100), 0x152, 0x153, 0x2013, 0x2014, 0x2018,
            0x2019, 0x201C, 0x201D, 0x2026, 0x202F, 0x20AC]

NUIT = "#050505"
COBALT = "#0a33ff"
JOUR = "#ffffff"
ENCRE = "#0b0d1a"

_cache = {}


def contours(glyphset, name):
    """Boîtes (xmin, ymin, xmax, ymax) des contours d'un glyphe."""
    rec = RecordingPen()
    glyphset[name].draw(rec)
    boites, pts = [], []
    for op, args in rec.value:
        if op == "moveTo":
            pts = [args[0]]
        elif op in ("lineTo", "qCurveTo", "curveTo"):
            pts.extend(a for a in args if a)
        elif op in ("closePath", "endPath"):
            xs, ys = [p[0] for p in pts], [p[1] for p in pts]
            boites.append((min(xs), min(ys), max(xs), max(ys)))
    return boites


def redessiner_L(font):
    """Pied du L rattaché à la fût ; coupe pochoir horizontale à mi-hauteur."""
    gs = font.getGlyphSet()
    nom = font.getBestCmap()[ord("L")]
    (x0, _, x1, cap), (fx0, _, fx1, fy1) = sorted(contours(gs, nom))
    coupe = fx0 - x1  # même largeur que les autres coupes de la police
    c1, c2 = cap / 2 - coupe / 2, cap / 2 + coupe / 2
    pen = TTGlyphPen(gs)
    for poly in (
        [(x0, c2), (x0, cap), (x1, cap), (x1, c2)],
        [(x0, 0), (x0, c1), (x1, c1), (x1, fy1), (fx1, fy1), (fx1, 0)],
    ):
        pen.moveTo(poly[0])
        for p in poly[1:]:
            pen.lineTo(p)
        pen.closePath()
    glyphe = pen.glyph()
    font["glyf"][nom] = glyphe
    glyphe.recalcBounds(font["glyf"])
    font["hmtx"][nom] = (font["hmtx"][nom][0], glyphe.xMin)


def police(wght):
    if wght not in _cache:
        font = instantiateVariableFont(TTFont(FONT), {"wght": wght, "opsz": 72})
        redessiner_L(font)
        for rec in font["name"].names:
            if rec.nameID in (1, 3, 4, 16):
                rec.string = f"{FAMILLE} {wght}" if rec.nameID in (3, 4) else FAMILLE
            elif rec.nameID == 6:
                rec.string = f"CLGStencil-{wght}"
        font.flavor = None
        buf = io.BytesIO()
        font.save(buf)
        _cache[wght] = TTFont(io.BytesIO(buf.getvalue())), hb.Font(hb.Face(buf.getvalue()))
    return _cache[wght]


def exporter_police(wght, path):
    font = TTFont(io.BytesIO(_ttf(wght)))
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    opts.name_IDs = ["*"]
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=UNICODES)
    sub.subset(font)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    font.flavor = "woff2"
    font.save(path)


def _ttf(wght):
    font, _ = police(wght)
    buf = io.BytesIO()
    font.save(buf)
    return buf.getvalue()


def texte(txt, wght, size, track=0.0):
    """Tracé SVG du texte, ligne de base à y=0 ; renvoie (d, largeur, (xmin, ymin, xmax, ymax))."""
    font, hbfont = police(wght)
    upem = font["head"].unitsPerEm
    buf = hb.Buffer()
    buf.add_str(txt)
    buf.guess_segment_properties()
    hb.shape(hbfont, buf)
    glyphs = font.getGlyphSet()
    order = font.getGlyphOrder()
    scale = size / upem
    pen = SVGPathPen(glyphs)
    bounds = BoundsPen(glyphs)
    x = 0.0
    n = len(buf.glyph_infos)
    for i, (info, pos) in enumerate(zip(buf.glyph_infos, buf.glyph_positions)):
        name = order[info.codepoint]
        t = (scale, 0, 0, -scale, x + pos.x_offset * scale, 0)
        glyphs[name].draw(TransformPen(pen, t))
        glyphs[name].draw(TransformPen(bounds, t))
        x += pos.x_advance * scale + (track * size if i < n - 1 else 0)
    return pen.getCommands(), x, bounds.bounds


def ecrire(path, svg):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(svg)


# --- monogramme : CLG au pochoir, seul ---------------------------------------------------------
# Unités : texte de corps 100, ligne de base à y=0, capitale ≈ 80. L'horizon n'est pas un trait :
# c'est la lumière du ciel de l'avatar, sur laquelle les lettres se tiennent debout.
def monogramme():
    d, _, (x0, y0, x1, _) = texte("CLG", 800, 100, track=0.07)
    return dict(d=d, x0=x0, w=x1 - x0, cap=-y0)


def svg(W, H, corps):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.2f} {H:.2f}" width="{W:.0f}" height="{H:.0f}">
  <title>Corentin Le Gal</title>{corps}
</svg>
"""


def symbole(color):
    m = monogramme()
    marge = 2
    W, H = m["w"] + 2 * marge, m["cap"] + 2 * marge
    return svg(W, H, f"""
  <path transform="translate({marge - m['x0']:.2f} {marge + m['cap']:.2f})" fill="{color}" d="{m['d']}"/>""")


# --- avatar carré : CLG debout sur l'horizon, ciel cobalt au-dessus, nuit en dessous ----------
def avatar(size=512):
    m = monogramme()
    k = size * 0.64 / m["w"]
    base = size * 0.5 + m["cap"] * k / 2
    h = base / size
    return svg(size, size, f"""
  <defs>
    <linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{NUIT}"/>
      <stop offset="{h * 0.6:.3f}" stop-color="#0b0f2e"/>
      <stop offset="{h:.3f}" stop-color="{COBALT}"/>
      <stop offset="{h:.3f}" stop-color="#03040c"/>
      <stop offset="1" stop-color="{NUIT}"/>
    </linearGradient>
  </defs>
  <rect width="{size}" height="{size}" fill="url(#ciel)"/>
  <path transform="translate({(size - m['w'] * k) / 2 - m['x0'] * k:.2f} {base:.2f}) scale({k:.4f})" fill="{JOUR}" d="{m['d']}"/>""")


# --- logo horizontal : CLG puis le nom, sur la même ligne de base ----------------------------
def logo(color):
    m = monogramme()
    nd, _, (nx0, _, nx1, _) = texte("CORENTIN LE GAL", 600, 34, track=0.08)
    marge, sep = 2, 22
    base = marge + m["cap"]
    nom_x = marge + m["w"] + sep
    W, H = nom_x + (nx1 - nx0) + marge, m["cap"] + 2 * marge
    return svg(W, H, f"""
  <g fill="{color}">
    <path transform="translate({marge - m['x0']:.2f} {base:.2f})" d="{m['d']}"/>
    <path transform="translate({nom_x - nx0:.2f} {base:.2f})" d="{nd}"/>
  </g>""")


# --- image de partage 1200 × 630 : le premier écran du site, en petit ------------------------
def partage():
    W, H = 1200, 630
    horizon = H * 0.66
    d, w, (x0, y0, x1, y1) = texte("CORENTIN LE GAL", 800, 100, track=0.01)
    k = (W - 160) / (x1 - x0)
    sd, sw, (sx0, sy0, sx1, sy1) = texte("DÉVELOPPEUR · TYPESCRIPT, NODE.JS, .NET · ANGERS", 600, 30, 0.12)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <defs>
    <linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{NUIT}"/>
      <stop offset="0.38" stop-color="{NUIT}"/>
      <stop offset="0.62" stop-color="#1a2a9e"/>
      <stop offset="0.66" stop-color="{COBALT}"/>
      <stop offset="0.66" stop-color="#03040c"/>
      <stop offset="1" stop-color="{NUIT}"/>
    </linearGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#ciel)"/>
  <path transform="translate({80 - x0 * k:.2f} {horizon:.2f}) scale({k:.4f})" fill="{JOUR}" d="{d}"/>
  <path transform="translate({80 - sx0:.2f} {horizon + 74:.2f})" fill="#a9adc4" d="{sd}"/>
</svg>
"""


if __name__ == "__main__":
    for w in (700, 800):
        exporter_police(w, f"public/fonts/clg-stencil-{w}.woff2")
    shutil.copy(f"{SOURCE}/LICENSE", "public/fonts/OFL.txt")
    ecrire("brand/og.svg", partage())
    ecrire("brand/clg-avatar.svg", avatar())
    ecrire("brand/clg-symbole-encre.svg", symbole(ENCRE))
    ecrire("brand/clg-symbole-blanc.svg", symbole(JOUR))
    ecrire("brand/corentin-le-gal-logo-encre.svg", logo(ENCRE))
    ecrire("brand/corentin-le-gal-logo-blanc.svg", logo(JOUR))
    ecrire("public/favicon.svg", avatar(64))
    ecrire("src/assets/monogramme.svg", symbole("currentColor"))
    print("public/fonts, brand/ et public/favicon.svg générés")
