#!/usr/bin/env python3
"""
Generates the light-palette placeholder plates in public/images.

These are intentionally NOT stock photography. Each one is a drafting plate
drawn from the same lattice logic as the WebGL layer, so the site holds its
art direction even before real imagery exists. Replace any file in place —
keep the filename and the aspect ratio and nothing else needs to change.

    python3 scripts/generate-placeholders.py
"""
import math
import random
from PIL import Image, ImageDraw, ImageFont

IVORY = (246, 244, 239)
BONE = (251, 249, 245)
LINE = (227, 222, 212)
GRAPHITE = (20, 22, 26)
MIST = (108, 112, 119)
COBALT = (30, 58, 255)

OUT = "public/images"

# filename -> (width, height, label, seed, mode)
PLATES = [
    ("hero.jpg", 1920, 1080, "HERO PLATE", 11, "lattice"),
    ("og-image.jpg", 1200, 630, "BUILDRON — DIGITAL SYSTEMS", 3, "wordmark"),
    ("contact-bg.jpg", 1600, 900, "CONTACT", 21, "radial"),
    ("ai-automation.jpg", 1400, 900, "AI AUTOMATION", 31, "network"),
    ("erp-software.jpg", 1400, 900, "ERP SOFTWARE", 41, "grid"),
    ("service-website.jpg", 1200, 800, "SERVICE — WEBSITES", 51, "slabs"),
    ("service-webapp.jpg", 1200, 800, "SERVICE — WEB APPS", 52, "slabs"),
    ("service-ecommerce.jpg", 1200, 800, "SERVICE — E-COMMERCE", 53, "grid"),
    ("service-erp.jpg", 1200, 800, "SERVICE — ERP", 54, "grid"),
    ("service-automation.jpg", 1200, 800, "SERVICE — AUTOMATION", 55, "network"),
    ("service-aiagent.jpg", 1200, 800, "SERVICE — AI AGENTS", 56, "network"),
    ("service-seo.jpg", 1200, 800, "SERVICE — SEO", 57, "radial"),
    ("service-social.jpg", 1200, 800, "SERVICE — SOCIAL", 58, "radial"),
    ("industry-textile.jpg", 1200, 800, "INDUSTRY — TEXTILE", 61, "lattice"),
    ("industry-ecommerce.jpg", 1200, 800, "INDUSTRY — E-COMMERCE", 62, "grid"),
    ("industry-realestate.jpg", 1200, 800, "INDUSTRY — REAL ESTATE", 63, "slabs"),
    ("industry-restaurant.jpg", 1200, 800, "INDUSTRY — HOSPITALITY", 64, "radial"),
    ("industry-startup.jpg", 1200, 800, "INDUSTRY — STARTUPS", 65, "network"),
    ("industry-professional.jpg", 1200, 800, "INDUSTRY — PROFESSIONAL", 66, "lattice"),
    ("project-devkitlab.jpg", 1600, 900, "DEVKITLAB", 71, "slabs"),
    ("project-fashion.jpg", 1600, 900, "PROJECT — FASHION COMMERCE", 72, "slabs"),
    ("project-realestate.jpg", 1600, 900, "PROJECT — REAL ESTATE", 73, "grid"),
    ("project-restaurant.jpg", 1600, 900, "PROJECT — HOSPITALITY", 74, "radial"),
    ("project-saas.jpg", 1600, 900, "PROJECT — SAAS DASHBOARD", 75, "network"),
    ("project-erp.jpg", 1600, 900, "PROJECT — ERP", 76, "grid"),
    ("project-store.jpg", 1600, 900, "PROJECT — DTC STORE", 77, "slabs"),
    ("project-corporate.jpg", 1600, 900, "PROJECT — CORPORATE", 78, "lattice"),
    ("project-aiflow.jpg", 1600, 900, "PROJECT — AI WORKFLOW", 79, "network"),
]


def font(size):
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def nodes(mode, n, w, h, rng):
    """Positions echoing the shader formations, so plates feel like stills."""
    pts = []
    cx, cy = w / 2, h / 2
    for i in range(n):
        if mode == "lattice":
            g = int(math.sqrt(n)) or 1
            x = (i % g) / max(1, g - 1) - 0.5
            y = (i // g) / max(1, g - 1) - 0.5
            pts.append((cx + x * w * 0.62, cy + y * h * 0.62))
        elif mode == "grid":
            cols = 26
            x = (i % cols) / (cols - 1) - 0.5
            y = ((i // cols) % 18) / 17 - 0.5
            pts.append((cx + x * w * 0.7, cy + y * h * 0.66))
        elif mode == "slabs":
            plane = i % 3
            k = i // 3
            cols = 20
            x = (k % cols) / (cols - 1) - 0.5
            y = (k // cols) / 14 - 0.5
            pts.append((cx + x * w * 0.66 + (plane - 1) * w * 0.035,
                        cy + y * h * 0.6 + (plane - 1) * h * 0.02))
        elif mode == "network":
            a = i * 2.399963
            r = (0.25 + 0.75 * rng.random()) * min(w, h) * 0.38
            pts.append((cx + math.cos(a) * r, cy + math.sin(a) * r * 0.85))
        else:  # radial
            a = i * 2.399963
            t = i / max(1, n - 1)
            r = math.pow(t, 0.6) * min(w, h) * 0.44
            pts.append((cx + math.cos(a) * r, cy + math.sin(a) * r * 0.8))
    return pts


def plate(name, w, h, label, seed, mode):
    rng = random.Random(seed)
    img = Image.new("RGB", (w, h), IVORY)
    d = ImageDraw.Draw(img, "RGBA")

    # Drafting ground.
    step = max(48, w // 26)
    for x in range(0, w, step):
        d.line([(x, 0), (x, h)], fill=LINE + (140,), width=1)
    for y in range(0, h, step):
        d.line([(0, y), (w, y)], fill=LINE + (140,), width=1)

    pts = nodes(mode, 520, w, h, rng)

    # Normalise the point cloud into a consistent compositional window, so
    # every plate is framed the same way regardless of which formation drew it.
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    sx, sy = (max(xs) - min(xs)) or 1, (max(ys) - min(ys)) or 1
    tw, th = w * 0.78, h * 0.5
    ox, oy = (w - tw) / 2, h * 0.14
    pts = [
        (ox + (x - min(xs)) / sx * tw, oy + (y - min(ys)) / sy * th)
        for x, y in pts
    ]

    # Struts.
    for i in range(len(pts) - 1):
        if i % 3 == 0:
            continue
        a, b = pts[i], pts[i + 1]
        if math.dist(a, b) < w * 0.16:
            d.line([a, b], fill=GRAPHITE + (26,), width=1)
    for i in range(0, len(pts) - 14, 7):
        a, b = pts[i], pts[i + 13]
        if math.dist(a, b) < w * 0.2:
            d.line([a, b], fill=GRAPHITE + (16,), width=1)

    # Nodes — a small minority activated in cobalt.
    for i, (x, y) in enumerate(pts):
        hot = rng.random() < 0.09
        r = 2.6 if hot else 1.6
        col = COBALT + (215,) if hot else GRAPHITE + (110,)
        d.ellipse([x - r, y - r, x + r, y + r], fill=col)

    # Ivory scrim so any overlaid type stays readable.
    scrim = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(scrim)
    for i in range(70):
        alpha = int(150 * (i / 70) ** 2)
        sd.rectangle([0, h - (h * 0.55) * (i / 70) - 1, w, h], fill=BONE + (alpha // 12,))
    img = Image.alpha_composite(img.convert("RGBA"), scrim).convert("RGB")
    d = ImageDraw.Draw(img, "RGBA")

    # Plate identification.
    pad = int(w * 0.045)
    f_small = font(max(13, w // 90))
    f_label = font(max(26, w // 26))
    d.line([(pad, h - pad - int(w * 0.055)), (w - pad, h - pad - int(w * 0.055))],
           fill=LINE, width=2)
    d.text((pad, h - pad - int(w * 0.045)), label, font=f_label, fill=GRAPHITE)
    d.text((pad, pad), "BUILDRON — PLACEHOLDER PLATE", font=f_small, fill=MIST)
    d.text((pad, pad + int(w * 0.022)), f"replace: /images/{name}", font=f_small, fill=MIST)
    d.text((w - pad - int(w * 0.09), pad), f"{w}×{h}", font=f_small, fill=MIST)

    img.save(f"{OUT}/{name}", "JPEG", quality=82, optimize=True, progressive=True)
    print(f"  {name}  {w}x{h}")


if __name__ == "__main__":
    print("Generating BUILDron placeholder plates…")
    for args in PLATES:
        plate(*args)
    print("Done. Replace any file in place, keeping the filename.")
