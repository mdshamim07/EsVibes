import Link from "next/link";

export default function OrderSummary() {
  return (
    <div className="w-full bg-secondary p-4 mt-6">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Subtotal (0 items)</p>
        <p>৳ 758</p>
      </div>
      <div className="flex justify-between items-center mt-2 text-gray-200">
        <p>Shipping Fee</p>
        <p>৳ 450</p>
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
        <p>৳ 7854</p>
      </div>
      <div className="mt-2">
        <Link href="/checkout" className="btn w-full !py-2">
          Proceed To Checkout (0)
        </Link>
      </div>
    </div>
  );
}
