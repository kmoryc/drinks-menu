"""Create printable QR cards for the drinks menu.

Usage:
  .venv/bin/python tools/make_qr.py https://<user>.github.io/drinks-menu/

Writes two cards (about 10 x 14 cm at 300 dpi) to print/:
  qr-card.png / qr-card.pdf    guest menu (index.html)
  bar-card.png / bar-card.pdf  bartender recipes (bar.html)
plus qr.png and bar-qr.png with just the QR codes, and qr-sheet.pdf:
A4 pages (one per code) with the card in several sizes, ready to cut.
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


def make_card(url, name, title, subtitle, lines):
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=20, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    code = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    code.save(OUT / f"{name}.png")

    card = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(card)
    d.rounded_rectangle((30, 30, W - 30, H - 30), radius=50, outline=ACCENT, width=6)

    centered(d, 110, title, font(110, bold=True), ACCENT)
    centered(d, 250, subtitle, font(70, bold=True), FG)

    size = 780
    code = code.resize((size, size), Image.NEAREST)
    pad = 30
    x, y = (W - size) // 2, 400
    d.rounded_rectangle((x - pad, y - pad, x + size + pad, y + size + pad), radius=30, fill="white")
    card.paste(code, (x, y))

    for i, line in enumerate(lines):
        centered(d, 1270 + 70 * i, line, font(48), FG)
    centered(d, 1470, url.replace("https://", "").rstrip("/"), font(34), MUTED)

    card_name = "qr-card" if name == "qr" else f"{name.removesuffix('-qr')}-card"
    card.save(OUT / f"{card_name}.png", dpi=(DPI, DPI))
    card.save(OUT / f"{card_name}.pdf", resolution=DPI)
    print(f"Wrote {OUT / card_name}.png/.pdf -> {url}")
    return card


# Card widths in cm (height keeps the 10 x 14 ratio) and positions on an
# A4 page, in cm from the top-left corner.
SHEET = [
    (10, 1, 1),
    (7, 12, 1),
    (3.5, 12, 11.3), (3.5, 15.5, 11.3),
    (5, 1, 15.6), (5, 6.5, 15.6), (5, 12, 15.6),
    (3.5, 1, 23.1), (3.5, 4.9, 23.1), (3.5, 8.8, 23.1),
    (3.5, 12.7, 23.1), (3.5, 16.6, 23.1),
]


def make_sheet(cards):
    cm = DPI / 2.54
    pages = []
    for card in cards:
        page = Image.new("RGB", (round(21 * cm), round(29.7 * cm)), "white")
        for w, x, y in SHEET:
            img = card.resize((round(w * cm), round(w * 1.4 * cm)), Image.LANCZOS)
            page.paste(img, (round(x * cm), round(y * cm)))
        pages.append(page)
    pages[0].save(OUT / "qr-sheet.pdf", resolution=DPI, save_all=True, append_images=pages[1:])
    print(f"Wrote {OUT / 'qr-sheet.pdf'}")


def main(base):
    base = base.rstrip("/") + "/"
    OUT.mkdir(exist_ok=True)
    guest = make_card(base, "qr", "Drinks Menu", "Karta napojów",
              ["Scan me with your phone camera", "Zeskanuj aparatem w telefonie"])
    bar = make_card(base + "bar.html", "bar-qr", "Bar", "Recipes · Przepisy",
              ["Bartender recipes", "Przepisy dla barmana"])
    make_sheet([guest, bar])


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
