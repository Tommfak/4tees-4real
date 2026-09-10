# 4Tees 4Real

Lagos drinks shop. Mix cans, bottles, and crates. Retail by the piece, wholesale by the pack.

Live shop: use the Grok preview. Staff PIN is in the shop admin (not committed).

## What’s in here

- Catalog of Nigerian SKUs (Coca-Cola, Pepsi, Heineken, Trophy, stout, CWAY, Eva, Cascade, …)
- Cart: pieces 1–99 at retail, crates/packs at wholesale
- Name + area (no password). Delivery fee by area
- Order codes like `4T-4821`, tracking timeline, WhatsApp checkout
- Staff desk: prices, stock, open/closed toggle, orders, CSV
- PWA install for iPhone home screen

## Hours

Usual hours **7am–6pm**. Open/closed is a **button** staff tap — the clock does not shut the shop.

## Product photos

Photos are packshots on warm paper.

Real photos pulled from:

- [Open Food Facts](https://world.openfoodfacts.org) (Nigerian Pepsi 50cl barcode `6034000005004`, Coca-Cola, CWAY, Malta)
- [Nigerian Breweries](https://www.nbplc.com) official Heineken bottle

Replace any remaining generated shots by dropping a `.jpg` named after the product id into `public/products/` (e.g. `pepsi-pet-50.jpg`).

## Staff

Open `/admin`. Toggle **Open / Closed** at the top. Customers still see the shop; checkout turns off when you close.

## Stack

TanStack Start, React 19, PGLite, Zustand cart.
