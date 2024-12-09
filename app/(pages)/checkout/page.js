import getCartById from "@/app/backend/queries/getCartById";
import ShippingOption from "../cart/_components/ShippingOption";
import DistrictInput from "./_components/DistrictInput";
import CartItem from "../cart/_components/CartItem";
import { minusDiscount } from "../cart/page";
import CartHeader from "../cart/_components/CartHeader";
import CheckoutAction from "./_components/CheckoutAction";
import PaymentOptions from "./_components/PaymentOptions";
import { checkoutAction } from "@/app/backend/actions";
import AddressBox from "./_components/AddressBox";
import CheckoutForm from "./_components/CheckoutForm";
import Link from "next/link";

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
    <section className="min-h-screen py-[20px]">
      <div className="page-title">
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
          চেকআউট
        </button>
      </div>
      {carts.length > 0 ? (
        <>
          {" "}
          <CartHeader />
          {carts.map((cartItem) => (
            <CartItem
              mode="checkout"
              stock={cartItem?.stock}
              quantity={cartItem?.quantity}
              key={cartItem?._id}
              size={cartItem?.size}
              cartId={cartItem?._id}
              cartItem={cartItem}
            />
          ))}
          <CheckoutForm carts={carts}>
            <AddressBox />
            <ShippingOption />
            <PaymentOptions customClass="w-full" />
            <CheckoutAction totalItem={carts.length} total={totalPrice} />
          </CheckoutForm>
        </>
      ) : (
        <div className="min-h-[50vh] flex gap-2 justify-center items-center flex-col ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-frown"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1={9} x2="9.01" y1={9} y2={9} />
            <line x1={15} x2="15.01" y1={9} y2={9} />
          </svg>
          <p>আপনার শপিং কার্টে এই মুহুর্তে কিছু নেই!</p>
          <div className="flex gap-2 items-center">
            {" "}
            <Link href="/" className="btn">
              হোম
            </Link>
            <Link href="/shop" className="variable-btn nav-border">
              শপ
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
