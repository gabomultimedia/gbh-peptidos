#!/bin/bash
set -euo pipefail

source_dir="/Users/qretariamarketing/Downloads/Nuevas Imagenes V2"
mkdir -p public/products/v2 public/images/hero
names=(ghk-cu glow ipamorelin-cjc retatrutide semaglutide tesamorelin tirzepatide)
for i in "${!names[@]}"; do
  number=$(printf '%02d' "$((i + 1))")
  cwebp -quiet -q 84 -m 6 -resize 1200 1200 "$source_dir/07 Julio 2026 - GBH - Pagina web Q-Peptides imagenes botellas flotando-$number.png" -o "public/products/v2/${names[$i]}.webp"
done
for number in 07 09; do
  cwebp -quiet -q 82 -m 6 -resize 1920 0 "/Users/qretariamarketing/Downloads/07 Julio 2026 - GBH - Pagina web Q-Peptides Imagenes Banners-$number.png" -o "public/images/hero/banner-$number.webp"
done
