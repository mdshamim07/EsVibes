"use client";

import useCommonState from "../src/hooks/useCommonState";

export default function CartModalAction({ id }) {
  const { common, setCommon } = useCommonState();
  const handleAdd = () => {
   
    setCommon({
      ...common,
      buyModal: true,
      productId: id,
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="variable-btn flex items-center justify-between gap-2 border hover:bg-secondary"
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
        className="lucide lucide-shopping-cart"
      >
        <circle cx={8} cy={21} r={1} />
        <circle cx={19} cy={21} r={1} />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <span> Add to cart</span>
    </button>
  );
}
