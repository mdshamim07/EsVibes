"use client";

import AddCart from "@/app/components/AddCart";
import BuyNowButton from "@/app/components/BuyNowButton";
import Link from "next/link";
import { useState } from "react";

export default function ProductOrder({ stock, sizes, productId }) {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [count, setCount] = useState(1);
  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="mt-4 text-sm flex items-center gap-2">
        {sizes?.map((size, index) => (
          <button
            className={`nav-border ${
              activeSize === size ? "btn" : " variable-btn"
            }`}
            onClick={() => setActiveSize(size)}
            key={index}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <button className="variable-btn nav-border" onClick={decrement}>
          -
        </button>
        <input
          type="text"
          value={count}
          className="text-center bg-transparent border px-4 w-[60px] h-[30px] outline-none"
          readOnly
        />
        <button className="variable-btn nav-border" onClick={increament}>
          +
        </button>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {stock === 0 ? (
          <button className="variable-btn nav-border text-red-600">Out Of Stock</button>
        ) : (
          <>
            <Link
              href={`/checkout?size=${activeSize}&quantity=${count}&product=${productId}`}
              className="btn flex justify-between items-center gap-3 border"
            >
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
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Buy now</span>
            </Link>
            <AddCart size={activeSize} quantity={count} productId={productId} />
          </>
        )}
      </div>
    </>
  );
}
