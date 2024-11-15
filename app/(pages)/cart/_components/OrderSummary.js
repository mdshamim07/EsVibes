import mainPrice from "@/helpers/mainPrice";

import ProccedCheckout from "./ProccedCheckout";

export default function OrderSummary({ total, items, carts }) {
  const shippingFee = 40;
  const totalPrice = mainPrice(total);
  const alltotal = mainPrice(shippingFee + total);

  return (
    <div className="w-full bg-secondary p-4 mt-6">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Subtotal ({items} items)</p>
        <p>৳ {totalPrice}</p>
      </div>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Shipping Fee</p>
        <p>৳ BDT {shippingFee}</p>
      </div>
      <div className="w-full flex justify-between gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter your voucher code"
          className="outline-none py-[4px] px-4 bg-transparent nav-border focus:border-white w-[85%]"
        />
        <button className="btn border">Apply</button>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-200">
        <p>Total</p>
        <p>৳ {alltotal}</p>
      </div>
      <div className="mt-4">
        <ProccedCheckout items={items} carts={carts} />
      </div>
    </div>
  );
}
