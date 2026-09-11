# 4Tees 4Real — visual system

Shop chrome is built like an Apple product page sitting on Aesop paper, not a grocery app.

## Why dark mode used to look cheap

Product photos are shot on warm cream paper. Dropping those rectangles onto near-black made every tile look like a sticker. The sticky header was translucent, so it ate the first row. Add-to-cart buttons were restyled in dark mode into muddy pills.

## Rules

1. **Product photography never inverts.** The studio well (`--color-photo: #ebe7de`) is the same in light and dark. Dark mode only restyles chrome: page, type, buttons, cart.
2. **Header is solid.** No backdrop-blur. It has a hairline border and respects the iPhone safe area. It does not overlay the grid.
3. **Pills are for chips and the cart bar only.** Product cards, fields, and primary actions use 12px radius (`rounded-md`). Nested radii step down.
4. **One accent.** Coca-Cola red on the “4”s, sold-out, and the closed dot. Primary actions are ink (black in light, cream in dark).
5. **Photo well is the card.** Cream tile, product contained, type and price sit on the page below — The Whisky Exchange / Apple Store grid.
6. **Packshots only.** `public/products/{id}.jpg` must be the actual drink (bottle, can, pack, dispenser, ice). Never use owner QA screenshots of the shop, Google/Instagram collages, logos, or a can for a bottle SKU. Bump `productImage` `?v=` after replacing files.

## Tokens

| Token | Light | Dark |
| --- | --- | --- |
| `--4t-bg` | `#f4f1ea` | `#0c0c0b` |
| `--4t-surface` | `#fffcf6` | `#161513` |
| `--4t-photo` | `#ebe7de` | `#ebe7de` (locked) |
| `--4t-fg` | `#1c1b18` | `#f3f0e8` |
| `--4t-ink` | `#1c1b18` | `#f3f0e8` |
| `--4t-accent` | `#c8102e` | `#ff4d62` |

Type: Sora, weight 400/500. Prices use `tabular-nums`.

## References

- Apple Store product grids — photography lives in its own field
- The Whisky Exchange — consistent studio tiles, price under the shot
- Aesop — warm paper, hairline borders, no pill soup
