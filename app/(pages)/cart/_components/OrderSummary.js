import mainPrice from "@/helpers/mainPrice";

import ProccedCheckout from "./ProccedCheckout";

export default function OrderSummary({ total, items, carts }) {
  const totalPrice = mainPrice(total);
  const alltotal = mainPrice(total);

  return (
    <div className="w-full bg-secondary p-4 mt-2">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Subtotal ({items} items)</p>
        <p>৳ {totalPrice}</p>
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
