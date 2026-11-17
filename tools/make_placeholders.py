"""Generate simple placeholder SVG illustrations for the drinks menu.

Run once: python tools/make_placeholders.py
Replace any images/*.svg with a real photo later (and update drinks.js).
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "images"
W, H = 600, 300  # glass sits in the left part, leaving room for the fade


def frame(bg1, bg2, inner):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">
<defs><radialGradient id="bg" cx="33%" cy="40%" r="70%">
<stop offset="0" stop-color="{bg1}"/><stop offset="1" stop-color="{bg2}"/></radialGradient></defs>
<rect width="{W}" height="{H}" fill="url(#bg)"/>
<ellipse cx="205" cy="275" rx="60" ry="7" fill="#000" opacity=".25"/>
<g transform="translate(5 6) rotate(12 200 170)">
{inner}
</g>
</svg>
'''


GLASS = 'fill="#ffffff" fill-opacity=".10" stroke="#f3e9dc" stroke-opacity=".75" stroke-width="3"'


def highball(liquid, extras=""):
    return (f'<rect x="150" y="70" width="100" height="195" rx="8" {GLASS}/>'
            f'<rect x="154" y="110" width="92" height="151" rx="5" fill="{liquid}" opacity=".9"/>'
            '<rect x="165" y="125" width="26" height="26" rx="4" fill="#fff" opacity=".35"/>'
            '<rect x="200" y="160" width="26" height="26" rx="4" fill="#fff" opacity=".3"/>'
            f'{extras}')


def lime(x, y):
    return (f'<circle cx="{x}" cy="{y}" r="26" fill="#8bc34a"/>'
            f'<circle cx="{x}" cy="{y}" r="20" fill="#cddc39"/>'
            f'<path d="M{x} {y-20}V{y+20}M{x-20} {y}H{x+20}" stroke="#8bc34a" stroke-width="2"/>')


def mint():
    return ('<path d="M190 112c-12-24 4-40 18-42-2 16-6 30-18 42z" fill="#43a047"/>'
            '<path d="M206 112c4-22 24-30 36-26-8 14-20 24-36 26z" fill="#66bb6a"/>')


def bubbles(xs):
    return "".join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fff" opacity=".5"/>' for x, y, r in xs)


def wine(liquid):
    return ('<path d="M150 60h100c0 70-20 105-50 110-30-5-50-40-50-110z" ' + GLASS + '/>'
            f'<path d="M155 110h90c-4 40-20 55-45 57-25-2-41-17-45-57z" fill="{liquid}"/>'
            '<path d="M200 170v80M160 262h80" stroke="#f3e9dc" stroke-opacity=".75" stroke-width="4" stroke-linecap="round"/>')


def mug(liquid, steam=True):
    s = ('<path d="M180 70c-10-14 10-22 0-38M205 70c-10-14 10-22 0-38M230 70c-10-14 10-22 0-38" '
         'stroke="#f3e9dc" stroke-opacity=".5" stroke-width="4" fill="none" stroke-linecap="round"/>') if steam else ""
    return (s + '<path d="M260 130c40 0 40 70 0 70" stroke="#e8ddd0" stroke-width="12" fill="none"/>'
            '<rect x="140" y="95" width="125" height="170" rx="18" fill="#e8ddd0"/>'
            f'<ellipse cx="202" cy="100" rx="56" ry="10" fill="{liquid}"/>')


def beer():
    return ('<path d="M255 120c45 0 45 90 0 90" stroke="#f3e9dc" stroke-opacity=".75" stroke-width="10" fill="none"/>'
            f'<rect x="140" y="80" width="120" height="185" rx="10" {GLASS}/>'
            '<rect x="145" y="110" width="110" height="150" rx="6" fill="#f2a900"/>'
            '<path d="M138 112c-10-30 20-46 36-30 10-22 46-20 50 2 18-16 46 0 38 28z" fill="#fff8e7"/>'
            + bubbles([(170, 200, 4), (210, 170, 3), (230, 230, 4), (190, 140, 3)]))


def coupe_icon():
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
            '<rect width="64" height="64" rx="14" fill="#16110d"/>'
            '<path d="M14 14h36L32 34z" fill="#e0a458"/>'
            '<path d="M32 34v16M22 52h20" stroke="#e0a458" stroke-width="4" stroke-linecap="round"/>'
            '<circle cx="44" cy="14" r="6" fill="#8bc34a"/></svg>\n')


IMAGES = {
    "gin-tonic": frame("#2b3a4a", "#121820", highball("#d6eef5", lime(250, 75) + bubbles([(180, 220, 4), (220, 200, 3), (205, 240, 4)]))),
    "aperol-spritz": frame("#4a2a1a", "#1a100a", wine("#ff6f1f") + '<circle cx="245" cy="68" r="24" fill="#ff9800"/><circle cx="245" cy="68" r="18" fill="#ffb74d"/>'),
    "mojito": frame("#1e3b2c", "#0d1a13", highball("#e6f5d0", mint() + lime(250, 75))),
    "virgin-mojito": frame("#1f3a3a", "#0c1818", highball("#d9f7e8", mint() + lime(250, 75) + bubbles([(185, 230, 3), (215, 205, 4)]))),
    "red-wine": frame("#3a1a22", "#14080b", wine("#7b1028")),
    "beer": frame("#3e2f12", "#161006", beer()),
    "lemonade": frame("#3d3a14", "#151406", highball("#fff3a0", '<circle cx="250" cy="75" r="26" fill="#fdd835"/><circle cx="250" cy="75" r="20" fill="#fff59d"/>')),
    "coffee": frame("#3b2a1e", "#140d08", mug("#4e2c16")),
    "tea": frame("#3b331e", "#141008", mug("#b5651d") + '<path d="M262 95v40" stroke="#ccc" stroke-width="2"/><rect x="254" y="135" width="16" height="20" fill="#c62828"/>'),
    "sparkling-water": frame("#1d2f3d", "#0a1219", highball("#e3f2fd", bubbles([(175, 230, 5), (200, 190, 4), (225, 215, 5), (190, 140, 3), (230, 150, 4), (210, 250, 3)]))),
}

if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    for name, svg in IMAGES.items():
        (OUT / f"{name}.svg").write_text(svg)
    (OUT / "cocktail-icon.svg").write_text(coupe_icon())
    print(f"Wrote {len(IMAGES) + 1} images to {OUT}")
