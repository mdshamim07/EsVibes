"use client";

import LoadingBtn from "@/app/_components/LoadingBtn";
import useOrder from "@/app/src/hooks/useOrder";
import mainPrice from "@/helpers/mainPrice";
import PlaceOrderButton from "./PlaceOrderButton";

export default function CheckoutAction({ total, totalItem }) {
  const { order } = useOrder();
  return (
    <div className="w-full bg-secondary p-4 mt-6">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Subtotal ({totalItem} items)</p>
        <p> {mainPrice(total)}</p>
      </div>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Shipping Fee</p>
        <p> {mainPrice(order?.shippingFee)}</p>
      </div>
      {/* <div className="w-full flex justify-between gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter your voucher code"
          className="outline-none py-[4px] px-4 bg-transparent nav-border focus:border-white w-[85%]"
        />
        <button className="btn border">Apply</button>
      </div> */}
      <div className="flex justify-between items-center mt-4 text-gray-200">
        <p>Total</p>
        <p>{mainPrice(total + order?.shippingFee)}</p>
      </div>
      <div className="mt-2">
        <PlaceOrderButton className="btn w-full !py-2">
          Place Order ({totalItem})
        </PlaceOrderButton>
      </div>
    </div>
  );
}
