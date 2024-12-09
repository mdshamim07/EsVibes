import Link from "next/link";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";

export default async function CartSection({ carts, totalPrice }) {

  return (
    <div className="flex  flex-col gap-4 min-h-screen">
      {carts.length > 0 ? (
        <>
          <CartHeader />
          {carts.map((cartItem) => (
            <CartItem
              stock={cartItem?.stock}
              quantity={cartItem?.quantity}
              key={cartItem?._id}
              size={cartItem?.size}
              cartId={cartItem?._id}
              cartItem={cartItem}
            />
          ))}

          <OrderSummary carts={carts} total={totalPrice} items={carts.length} />
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
    </div>
  );
}
