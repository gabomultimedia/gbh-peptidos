const productImageMap: Record<string, string> = {
  semaglutide: "/products/v2/semaglutide.webp",
  tirzepatide: "/products/v2/tirzepatide.webp",
  retatrutide: "/products/v2/retatrutide.webp",
  tesamorelin: "/products/v2/tesamorelin.webp",
  "ipamorelin-cjc": "/products/v2/ipamorelin-cjc.webp",
  "ghk-cu": "/products/v2/ghk-cu.webp",
  "melanotan-2": "/products/optimized/melanotan-2.webp",
};

export function getProductImagePath(productId: string) {
  return productImageMap[productId] || "/products/optimized/semaglutide.webp";
}

export function getProductImageDimensions(productId: string) {
  return productId === "melanotan-2"
    ? { width: 1100, height: 1375 }
    : { width: 1200, height: 1200 };
}
