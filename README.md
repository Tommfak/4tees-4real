# 4Tees 4Real

Lagos drinks shop. Mix cans, bottles, and crates. Retail by the piece, wholesale by the pack.

## Hours

Usual hours **7am–6pm**. Open/closed is a **button** staff tap — the clock does not shut the shop.

## Visual system

See [docs/UI.md](docs/UI.md).

Dark mode is charcoal chrome around **cream studio wells**. Product photos never invert, so a Pepsi bottle still looks like a Pepsi bottle at night.

The Coca-Cola 33cl can is a real red aluminium can packshot — not a floor photo.

## Product photos

Packshots live in `public/products/{id}.jpg` on warm paper `#ebe7de`.

Replace any remaining generated shots by dropping a `.jpg` named after the product id.

## Staff

Open `/admin`. Toggle **Open / Closed** at the top. Customers still see the shop; checkout turns off when you close.

## Stack

TanStack Start, React 19, PGLite, Zustand cart.
