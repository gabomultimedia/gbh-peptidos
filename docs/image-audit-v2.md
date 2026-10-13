# Q-PEPTIDES image audit V2

Images were inspected individually before assigning assets. Original files are
preserved outside the repository. WebP outputs retain the full artwork and its
illustrative-reference notice.

| Source suffix | Identified product | Optimized asset | Assignment |
| --- | --- | --- | --- |
| 01 | GHK-Cu | `/products/v2/ghk-cu.webp` | Existing GHK-Cu page and cards |
| 02 | GLOW blend | `/products/v2/glow.webp` | Pending product information; no existing catalog entry |
| 03 | Ipamorelina + CJC no DAC | `/products/v2/ipamorelin-cjc.webp` | Existing combination page and cards |
| 04 | Retatrutida | `/products/v2/retatrutide.webp` | Existing Retatrutida page and cards |
| 05 | Semaglutide | `/products/v2/semaglutide.webp` | Existing Semaglutida page and cards |
| 06 | Tesamorelina | `/products/v2/tesamorelin.webp` | Existing Tesamorelina page and cards |
| 07 | Tirzepatida | `/products/v2/tirzepatide.webp` | Existing Tirzepatida page and cards |

No replacement for Melanotano-2 was supplied; its original asset remains.

## Artwork observations

- Tesamorelina artwork includes a nicotinamide dinucleotide subtitle. This is
  inconsistent with its product name and needs a corrected source from design.
- GLOW artwork contains inconsistent ingredient spellings. No clinical product
  description, protocol or new catalog page was inferred from this label.
- Banners contain illustrative label text and quantities. These were not copied
  into clinical content, metadata or structured data.

## Delivery

- Products: 1200 x 1200 WebP, quality 84, about 63-66 KB each.
- Banners: 1920 x 1080 WebP, quality 82, about 66 KB and 37 KB.
- Shared image map updates cards, product pages and social images together.
- Product metadata describes actual image dimensions; Product and BreadcrumbList
  JSON-LD identify content without inventing prices, ratings or approval status.
- Carousel preserves one server-rendered H1 and crawlable links. It supports
  pause, manual selection, focus pause and reduced-motion preference.
- Existing canonical URLs, sitemap entries and robots rules remain unchanged.

Regenerate optimized assets with `bash scripts/optimize-brand-images.sh` while
the supplied source images remain in their original Downloads locations.
