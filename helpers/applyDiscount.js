export default function applyDiscount(price, discountPercentage) {
  // Calculate the discount amount
  const discountAmount = (price * discountPercentage) / 100;

  // Calculate the final price after applying the discount
  const finalPrice = price - discountAmount;

  return finalPrice;
}
