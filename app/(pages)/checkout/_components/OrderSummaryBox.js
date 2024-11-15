import { minusCoupon } from "@/app/backend/actions";
import mainPrice from "@/helpers/mainPrice";
import Link from "next/link";

let coupon = 0;
let price = 0;
export default function OrderSummaryBox({ totalPrice, items }) {
  const shipping = 40;
  const discountAction = async (e) => {
    "use server";
    const response = await minusCoupon(e);
    coupon = response?.discount;
    price = totalPrice - coupon;
  };
  return (
    <div className="w-full h-[270px] md:w-[40%] bg-secondary p-4 mt-6">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Subtotal ({items} items)</p>
        <p>৳ {mainPrice(totalPrice)}</p>
      </div>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Shipping Fee</p>
        <p>৳ {mainPrice(shipping)}</p>
      </div>
      <div>
        <form
          className="w-full flex justify-between gap-2 mt-4"
          action={discountAction}
        >
          <input
            type="text"
            name="coupon"
            placeholder="Enter your voucher code"
            className="outline-none py-[4px] px-4 bg-transparent nav-border focus:border-white w-[85%]"
          />
          <button className="btn border ">Apply</button>
        </form>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-200">
        <p>Total</p>
        <p>৳ {mainPrice(price + shipping)}</p>
      </div>
      <div className="mt-2">
        <Link href="/order-success" className="btn w-full !py-2">
          Place Order({items})
        </Link>
      </div>
    </div>
  );
}
