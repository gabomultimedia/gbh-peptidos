const productImageMap: Record<string, string> = {
  semaglutide: "/products/optimized/semaglutide.webp",
  tirzepatide: "/products/optimized/tirzepatide.webp",
  retatrutide: "/products/optimized/retatrutide.webp",
  tesamorelin: "/products/optimized/tesamorelin.webp",
  "ipamorelin-cjc": "/products/optimized/ipamorelin-cjc.webp",
  "ghk-cu": "/products/optimized/ghk-cu.webp",
  "melanotan-2": "/products/optimized/melanotan-2.webp",
};

export function getProductImagePath(productId: string) {
  return productImageMap[productId] || "/products/optimized/semaglutide.webp";
}

