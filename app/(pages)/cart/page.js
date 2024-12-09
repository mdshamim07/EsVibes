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
      <div className="page-title py-[20px]">
        <button className="variable-btn flex gap-2 items-center nav-border text-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx={8} cy={21} r={1} />
            <circle cx={19} cy={21} r={1} />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          কার্ট
        </button>
      </div>
      <CartSection carts={carts} totalPrice={totalPrice} />
    </AnimationContainer>
  );
}
