"use client";
import useOrder from "@/app/src/hooks/useOrder";
import mainPrice from "@/helpers/mainPrice";

export const shippingOptions = [
  {
    id: 1,
    title:
      "ঢাকার ভিতরে (70 টাকা অগ্রিম পেমেন্ট করতে হবে) বিকাশ, নগদ, রকেট এর মাধ্যমে",
    shippingFee: 70,
    location: "dhaka",
  },
  {
    id: 2,
    title:
      "ঢাকার বাইরে (130 টাকা অগ্রিম পেমেন্ট করতে হবে) বিকাশ, নগদ, রকেট এর মাধ্যমে",
    shippingFee: 130,
    location: "outOfdhaka",
  },
];
export default function ShippingOption() {
  const { order, setOrder } = useOrder();

  return (
    <div className="nav-border p-3 mt-4">
      <div className="flex items-center gap-6 ">
        <h1 className="font-medium ">Shipping Option</h1>
        <p className="text-xs text-blue-500 underline cursor-pointer">কেন অগ্রিম পেমেন্ট করতে হবে ?</p>
      </div>
      <div className="text-sm mt-2">
        <ul className="space-y-2">
          {shippingOptions.map((shipItem) => (
            <li
              onClick={() =>
                setOrder({
                  ...order,
                  shippingOption: shipItem?.location,
                  shippingFee: shipItem?.shippingFee,
                })
              }
              key={shipItem?.id}
              className={`${
                shipItem?.location === order?.shippingOption && "bg-secondary"
              } flex justify-between  items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                {shipItem?.location === order?.shippingOption ? (
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
                    className="lucide lucide-circle-check"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ) : (
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
                    className="lucide lucide-circle"
                  >
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                )}

                <span>{shipItem?.title}</span>
              </div>
              <span>৳ {mainPrice(shipItem?.shippingFee)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
