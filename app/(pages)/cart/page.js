import AnimationContainer from "@/app/components/AnimationContainer";
import getCartById from "@/app/backend/queries/getCartById";
import CartSection from "./_components/CartSection";

export const metadata = {
  title: "Esvibes - Cart",
};
export function minusDiscount(price, discount) {
  const getDiscount = (price / 100) * discount;
  return price - getDiscount;
}
export default async function page() {
  const carts = await getCartById();
  let totalPrice = carts.reduce((total, item) => {
    return (
      total +
      minusDiscount(item?.productId?.price, item?.productId?.discount) *
        item.quantity
    );
  }, 0);

  return (
    <AnimationContainer>
      <CartSection carts={carts} totalPrice={totalPrice} />
    </AnimationContainer>
  );
}
