"""Create a printable QR card that opens the drinks menu.

Usage:
  .venv/bin/python tools/make_qr.py https://<user>.github.io/drinks-menu/

Writes print/qr-card.png and print/qr-card.pdf (about 10 x 14 cm at 300 dpi),
plus print/qr.png (QR code only).
"""
import sys
from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "print"
DPI = 300
W, H = 1181, 1654  # 10 x 14 cm at 300 dpi
BG, FG, ACCENT, MUTED = "#16110d", "#f3e9dc", "#e0a458", "#b9a893"


def font(size, bold=False):
    names = (["DejaVuSerif-Bold.ttf", "DejaVuSans-Bold.ttf"] if bold
             else ["DejaVuSans.ttf"])
    for n in names:
        for d in ("/usr/share/fonts/truetype/dejavu/", ""):
            try:
                return ImageFont.truetype(d + n, size)
            except OSError:
                pass
    return ImageFont.load_default()


def centered(draw, y, text, f, fill):
    w = draw.textlength(text, font=f)
    draw.text(((W - w) / 2, y), text, font=f, fill=fill)


def main(url):
    OUT.mkdir(exist_ok=True)
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=20, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    code = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    code.save(OUT / "qr.png")

    card = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(card)
    d.rounded_rectangle((30, 30, W - 30, H - 30), radius=50, outline=ACCENT, width=6)

    centered(d, 110, "Drinks Menu", font(110, bold=True), ACCENT)
    centered(d, 250, "Karta napojów", font(70, bold=True), FG)

    size = 780
    code = code.resize((size, size), Image.NEAREST)
    pad = 30
    x, y = (W - size) // 2, 400
    d.rounded_rectangle((x - pad, y - pad, x + size + pad, y + size + pad), radius=30, fill="white")
    card.paste(code, (x, y))

    centered(d, 1270, "Scan me with your phone camera", font(48), FG)
    centered(d, 1340, "Zeskanuj aparatem w telefonie", font(48), FG)
    centered(d, 1470, url.replace("https://", "").rstrip("/"), font(34), MUTED)

    card.save(OUT / "qr-card.png", dpi=(DPI, DPI))
    card.save(OUT / "qr-card.pdf", resolution=DPI)
    print(f"Wrote {OUT/'qr-card.png'}, {OUT/'qr-card.pdf'}, {OUT/'qr.png'} -> {url}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
