"use client";

import useCommonState from "@/app/src/hooks/useCommonState";

export default function EditCartButton({ productId, quantity, size }) {
  const { common, setCommon } = useCommonState();
  const handleEdit = () => {
    setCommon({
      ...common,
      buyModal: true,
      productId: productId,
      mode: "update",
      quantity: quantity,
      size: size,
    });
    console.log(quantity);
  };
  return (
    <button onClick={handleEdit} className="btn">
      Edit
    </button>
  );
}
