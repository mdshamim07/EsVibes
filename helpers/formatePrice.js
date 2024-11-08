export default function formatePrice(originalPrice, discountPercentage) {
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(discountedPrice);
}
