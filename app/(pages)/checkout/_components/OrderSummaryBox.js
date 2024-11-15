"use client";
import LoadingBtn from "@/app/_components/LoadingBtn";
import { minusCoupon, orderAction } from "@/app/backend/actions";
import mainPrice from "@/helpers/mainPrice";
import Link from "next/link";
import { useState } from "react";

export default function OrderSummaryBox({
  totalPrice,
  items,
  orderObject,
  payment,
}) {
  const shipping = 40;
  const [coupon, setCoupon] = useState("");
  const [total, setTotal] = useState(totalPrice);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const discountAction = async () => {
    try {
      setLoading(true);
      const response = await minusCoupon(coupon);
      if (response?.discount > 0) {
        const discount = totalPrice / 100;
        const withoutDis = totalPrice - discount;
        setDiscount(discount);
        setError(null);
        setTotal(withoutDis);
      } else {
        setError("Invalid Coupon Code!");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handlePlaceOrder = async () => {
    const response = await orderAction({ ...orderObject, payment, discount });
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
      {discount > 0 && (
        <div className="flex justify-between items-center mt-2 text-gray-200">
          <p>Discount</p>
          <p> (- ৳ {mainPrice(discount)})</p>
        </div>
      )}
      <div className="flex  mt-2 gap-2">
        <input
          type="text"
          name="coupon"
          onChange={(e) => {
            setCoupon(e.target.value);
            setError(null);
          }}
          value={coupon}
          placeholder="Enter your voucher code"
          className="outline-none py-[4px] px-4 bg-transparent nav-border focus:border-white w-[60%]"
        />

        <LoadingBtn loading={loading} onEvent={discountAction}>
          Apply
        </LoadingBtn>
      </div>
      {error && <p className="text-xs mt-2 mb-2 text-red-600">{error}</p>}
      <div className="flex justify-between items-center mt-4 text-gray-200">
        <p>Total</p>
        <p>৳ {mainPrice(total + shipping)}</p>
      </div>
      <div className="mt-2">
        <button onClick={handlePlaceOrder} className="btn w-full !py-2">
          Place Order({items})
        </button>
      </div>
    </div>
  );
}
