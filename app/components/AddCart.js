"use client";

import { useState } from "react";
import { addTocartAction, updateCart } from "../backend/actions";
import useCommonState from "../src/hooks/useCommonState";
import SecondaryLoadingBtn from "./SecondaryLoadingBtn";

export default function AddCart({ quantity, productId, size }) {
  const { common, setCommon } = useCommonState();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    try {
      setCommon({
        ...common,
        toast: false,
        toastMessage: "",
      });
      setLoading(true);
      const response = await addTocartAction({ quantity, productId, size });
      if (response.ok) {
        setCommon({
          ...common,
          toast: true,
          buyModal: false,
          toastMessage: response?.message,
          toastSuccess: true,
          quantity: 1,
        });
      } else {
        setCommon({
          ...common,
          toastSuccess: false,
          toast: true,
          buyModal: false,
          quantity: 1,
          toastMessage: response?.message,
        });
      }
    } catch (err) {
      setCommon({
        ...common,
        toast: true,
        toastSuccess: false,
        toastMessage: "Something went wrong while adding product in Cart !",
      });
    } finally {
      setLoading(false);
    }
  };
  let handler;
  if (common?.mode === "update") {
    handler = async () => {
      try {
        setLoading(true);
        const result = await updateCart(common?.cartId, { quantity, size });
        if (result.ok) {
          setCommon({
            ...common,
            toast: true,
            buyModal: false,
            productId: "",
            mode: "",
            quantity: 1,
            toastMessage: result?.message,
          });
        }
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };
  } else {
    handler = handleAddToCart;
  }

  return (
    <SecondaryLoadingBtn
      loading={loading}
      onClick={handler}
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
      <span>
        {common?.mode === "update" ? "Update to Cart" : " Add to cart"}
      </span>
    </SecondaryLoadingBtn>
  );
}
