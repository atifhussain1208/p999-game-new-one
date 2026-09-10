"""Generate original placeholder artwork for the gaming site (no text baked in)."""
import math, random
from PIL import Image, ImageDraw, ImageFilter

OUT = "/home/claude/nova-arcade/public/images"
import os
os.makedirs(OUT, exist_ok=True)


def vgrad(size, top, bottom):
    w, h = size
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        c = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
        for x in range(w):
            px[x, y] = c
    return img


def glow(img, center, radius, color, strength=1.0):
    """Additive radial glow blended via a blurred circle."""
    layer = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = center
    d.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=tuple(int(c * strength) for c in color))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.6))
    return Image.blend(img, Image.blend(img, layer, 0), 0) if strength == 0 else _screen(img, layer)


def _screen(a, b):
    import numpy as np
    na = np.asarray(a).astype(int)
    nb = np.asarray(b).astype(int)
    out = 255 - ((255 - na) * (255 - nb) // 255)
    return Image.fromarray(out.astype("uint8"))


def add_particles(img, n, colors, rmin=1, rmax=4, seed=7):
    rnd = random.Random(seed)
    layer = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    w, h = img.size
    for _ in range(n):
        x, y = rnd.randrange(w), rnd.randrange(h)
        r = rnd.uniform(rmin, rmax)
        c = rnd.choice(colors)
        d.ellipse([x - r, y - r, x + r, y + r], fill=c)
    layer = layer.filter(ImageFilter.GaussianBlur(1.2))
    return _screen(img, layer)


def vignette(img, strength=0.55):
    import numpy as np
    w, h = img.size
    y, x = np.ogrid[:h, :w]
    cx, cy = w / 2, h / 2
    dist = np.sqrt(((x - cx) / (w * 0.62)) ** 2 + ((y - cy) / (h * 0.62)) ** 2)
    mask = np.clip(1 - strength * np.clip(dist - 0.35, 0, None), 0, 1)
    arr = np.asarray(img).astype(float) * mask[..., None]
    return Image.fromarray(arr.astype("uint8"))


def grid_lines(img, spacing=90, color=(30, 60, 45), alpha_blur=1.5):
    layer = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    w, h = img.size
    for x in range(0, w, spacing):
        d.line([(x, 0), (x, h)], fill=color, width=1)
    for y in range(0, h, spacing):
        d.line([(0, y), (w, y)], fill=color, width=1)
    layer = layer.filter(ImageFilter.GaussianBlur(alpha_blur))
    return _screen(img, layer)


def poly(img, points, color, blur=0):
    layer = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.polygon(points, fill=color)
    if blur:
        layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return _screen(img, layer)


def ring(img, center, radius, width, color, blur=2):
    layer = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = center
    d.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], outline=color, width=width)
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return _screen(img, layer)


GREEN = (57, 255, 20)
DGREEN = (0, 160, 90)
GOLD = (255, 200, 60)
CYAN = (40, 220, 255)
MAGENTA = (255, 60, 180)
RED = (255, 70, 60)
PURPLE = (150, 80, 255)
BLUE = (60, 120, 255)

# ---------- Hero background (1920x1080) ----------
w, h = 1920, 1080
img = vgrad((w, h), (6, 12, 9), (10, 24, 16))
img = grid_lines(img, 110, (14, 34, 24))
img = glow(img, (w * 0.2, h * 0.15), 420, (0, 60, 35), 1)
img = glow(img, (w * 0.85, h * 0.8), 500, (0, 45, 40), 1)
img = glow(img, (w * 0.55, h * 0.4), 300, (10, 50, 25), 1)
img = add_particles(img, 240, [(20, 120, 70), (18, 90, 90), (60, 140, 60), (120, 160, 80)], 1, 3, seed=11)
img = add_particles(img, 40, [(30, 190, 110), (40, 160, 160)], 2, 5, seed=23)
# faint circuit diagonals
img = poly(img, [(0, h), (w * 0.35, h * 0.55), (w * 0.37, h * 0.57), (0.02 * w, h)], (10, 30, 20), 6)
img = poly(img, [(w, h * 0.1), (w * 0.7, h * 0.45), (w * 0.72, h * 0.47), (w, h * 0.14)], (8, 28, 22), 6)
img = vignette(img, 0.7)
img.save(f"{OUT}/hero-bg.webp", quality=72)

# ---------- Game tiles (900x1100 portrait) ----------
TW, TH = 900, 1100


def base_tile(top, bottom, seed):
    t = vgrad((TW, TH), top, bottom)
    t = grid_lines(t, 120, tuple(min(c + 8, 255) // 3 for c in bottom))
    t = add_particles(t, 130, [tuple(min(c + 60, 255) for c in bottom), (200, 200, 190)], 1, 3, seed=seed)
    return t


# 1. Sky Ace — crash/aviation, red glow plane silhouette
t = base_tile((20, 8, 12), (60, 14, 20), 3)
t = glow(t, (TW * 0.5, TH * 0.42), 330, (120, 20, 25), 1)
# stylized plane (triangle fuselage + wings)
cx, cy = TW * 0.5, TH * 0.48
t = poly(t, [(cx - 240, cy + 90), (cx + 260, cy - 40), (cx - 60, cy - 10)], (200, 60, 55), 3)
t = poly(t, [(cx - 140, cy + 10), (cx + 120, cy - 100), (cx + 30, cy - 130), (cx - 190, cy - 30)], (255, 110, 90), 2)
t = poly(t, [(cx + 100, cy - 60), (cx + 340, cy - 160), (cx + 240, cy - 40)], (160, 40, 40), 3)
# motion streaks
for i, yy in enumerate([0.62, 0.68, 0.74]):
    t = poly(t, [(TW * 0.1, TH * yy), (TW * 0.75, TH * yy - 40), (TW * 0.75, TH * yy - 34), (TW * 0.1, TH * yy + 6)], (90, 25, 25), 4)
t = vignette(t, 0.75)
t.save(f"{OUT}/games/sky-ace.webp", quality=74) if os.makedirs(f"{OUT}/games", exist_ok=True) is None else None

# 2. Neon Runner — cyberpunk road
t = base_tile((10, 8, 26), (30, 12, 50), 5)
t = glow(t, (TW * 0.5, TH * 0.35), 300, (60, 20, 90), 1)
# neon road perspective
t = poly(t, [(TW * 0.42, TH), (TW * 0.58, TH), (TW * 0.53, TH * 0.45), (TW * 0.47, TH * 0.45)], (40, 20, 70), 2)
t = poly(t, [(TW * 0.495, TH), (TW * 0.505, TH), (TW * 0.502, TH * 0.45), (TW * 0.498, TH * 0.45)], MAGENTA, 3)
# buildings
for bx, bw, bh, c in [(0.08, 0.1, 0.5, CYAN), (0.22, 0.08, 0.62, MAGENTA), (0.72, 0.09, 0.58, PURPLE), (0.85, 0.1, 0.48, CYAN)]:
    t = poly(t, [(TW * bx, TH * bh), (TW * (bx + bw), TH * bh), (TW * (bx + bw), TH), (TW * bx, TH)], (18, 12, 34), 1)
    t = poly(t, [(TW * bx, TH * bh), (TW * (bx + bw), TH * bh), (TW * (bx + bw), TH * bh + 6), (TW * bx, TH * bh + 6)], tuple(c_ // 2 for c_ in c), 2)
t = glow(t, (TW * 0.5, TH * 0.42), 140, (200, 40, 140), 0.8)
t = vignette(t, 0.7)
t.save(f"{OUT}/games/neon-runner.webp", quality=74)

# 3. Golden Fortune — gold coins / jackpot
t = base_tile((22, 14, 4), (48, 30, 8), 8)
t = glow(t, (TW * 0.5, TH * 0.45), 340, (140, 90, 20), 1)
rnd = random.Random(4)
for _ in range(26):
    x, y = rnd.uniform(0.12, 0.88) * TW, rnd.uniform(0.25, 0.85) * TH
    r = rnd.uniform(26, 70)
    t = glow(t, (x, y), r, (150, 105, 25), 0.9)
    t = ring(t, (x, y), r * 0.8, 6, (230, 175, 60), 2)
t = glow(t, (TW * 0.5, TH * 0.45), 180, (220, 160, 40), 0.9)
t = add_particles(t, 90, [(255, 210, 90), (255, 240, 160)], 1, 4, seed=9)
t = vignette(t, 0.72)
t.save(f"{OUT}/games/golden-fortune.webp", quality=74)

# 4. Cricket Clash — stadium night
t = base_tile((6, 14, 24), (12, 30, 46), 12)
t = glow(t, (TW * 0.5, TH * 0.28), 380, (30, 70, 110), 1)
# floodlights
for lx in [0.18, 0.82]:
    t = poly(t, [(TW * lx - 6, TH * 0.12), (TW * lx + 6, TH * 0.12), (TW * lx + 3, TH * 0.4), (TW * lx - 3, TH * 0.4)], (40, 70, 90), 2)
    t = glow(t, (TW * lx, TH * 0.12), 90, (180, 210, 240), 0.9)
# pitch
t = poly(t, [(TW * 0.3, TH), (TW * 0.7, TH), (TW * 0.6, TH * 0.62), (TW * 0.4, TH * 0.62)], (30, 70, 45), 3)
# ball arc
for i in range(14):
    a = i / 13
    x = TW * (0.2 + 0.6 * a)
    y = TH * (0.75 - 0.45 * math.sin(a * math.pi))
    t = glow(t, (x, y), 12 + 6 * (i == 13), (200, 60, 40), 0.8)
t = glow(t, (TW * 0.8, TH * 0.3), 26, (255, 120, 80), 1)
t = vignette(t, 0.7)
t.save(f"{OUT}/games/cricket-clash.webp", quality=74)

# 5. Dragon Reels — slots, emerald + gold
t = base_tile((8, 18, 10), (14, 40, 22), 15)
t = glow(t, (TW * 0.5, TH * 0.4), 340, (20, 90, 45), 1)
# three reels
for i, rx in enumerate([0.26, 0.5, 0.74]):
    t = poly(t, [(TW * rx - 90, TH * 0.28), (TW * rx + 90, TH * 0.28), (TW * rx + 90, TH * 0.72), (TW * rx - 90, TH * 0.72)], (10, 34, 20), 2)
    t = ring(t, (TW * rx, TH * 0.5), 70, 8, (60, 220, 120) if i != 1 else GOLD, 3)
    t = glow(t, (TW * rx, TH * 0.5), 60, (30, 130, 70) if i != 1 else (150, 110, 30), 0.9)
t = add_particles(t, 60, [(120, 255, 170), (255, 220, 120)], 1, 4, seed=19)
t = vignette(t, 0.72)
t.save(f"{OUT}/games/dragon-reels.webp", quality=74)

# 6. Ocean Hunter — fishing, deep sea
t = base_tile((4, 12, 26), (8, 30, 52), 21)
t = glow(t, (TW * 0.5, TH * 0.2), 380, (20, 70, 120), 1)
# light rays
for rx in [0.3, 0.5, 0.7]:
    t = poly(t, [(TW * rx - 30, 0), (TW * rx + 30, 0), (TW * rx + 120, TH * 0.7), (TW * rx - 120, TH * 0.7)], (10, 40, 70), 30)
# fish silhouettes
for fx, fy, s in [(0.3, 0.55, 1.0), (0.62, 0.45, 0.7), (0.5, 0.7, 1.3)]:
    cx, cy = TW * fx, TH * fy
    t = poly(t, [(cx - 70 * s, cy), (cx + 40 * s, cy - 34 * s), (cx + 40 * s, cy + 34 * s)], (30, 120, 160), 3)
    t = poly(t, [(cx + 40 * s, cy), (cx + 75 * s, cy - 26 * s), (cx + 75 * s, cy + 26 * s)], (24, 100, 140), 3)
# bubbles
t = add_particles(t, 70, [(90, 180, 220), (140, 220, 250)], 2, 5, seed=27)
t = vignette(t, 0.7)
t.save(f"{OUT}/games/ocean-hunter.webp", quality=74)

# ---------- OG image (1200x630) ----------
og = vgrad((1200, 630), (6, 12, 9), (12, 28, 18))
og = grid_lines(og, 90, (14, 34, 24))
og = glow(og, (240, 140), 260, (0, 70, 40), 1)
og = glow(og, (980, 500), 300, (0, 55, 45), 1)
og = add_particles(og, 120, [(20, 120, 70), (60, 160, 90)], 1, 3, seed=31)
og = ring(og, (600, 315), 150, 10, (57, 230, 120), 4)
og = glow(og, (600, 315), 120, (20, 110, 60), 1)
og = poly(og, [(575, 245), (575, 385), (665, 315)], (57, 255, 130), 2)  # play triangle
og = vignette(og, 0.6)
og.save(f"{OUT}/og-cover.webp", quality=80)
og.convert("RGB").save(f"{OUT}/og-cover.jpg", quality=82)

print("done")
for root, _, files in os.walk(OUT):
    for f in files:
        p = os.path.join(root, f)
        print(p, os.path.getsize(p) // 1024, "KB")
