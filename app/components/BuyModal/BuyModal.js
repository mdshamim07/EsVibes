"use client";

import { getProductByIdAction } from "@/app/backend/actions";
import useCommonState from "@/app/src/hooks/useCommonState";
import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import React from "react";
import AddCart from "../AddCart";
import mainPrice from "@/helpers/mainPrice";

const BuyModal = React.memo(function BuyModal() {
  const { common, setCommon } = useCommonState();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(common?.quantity ? common?.quantity : 1);

  const [activeSize, setActiveSize] = useState("");
  // Use useMemo to memoize originalPrice
  const originalPrice = useMemo(
    () => formatePrice(product?.price * count, product?.discount),
    [product, count]
  );

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      setError(null); // Reset error on each fetch

      try {
        const result = await getProductByIdAction(common?.productId);
        if (result) {
          setProduct(result);
          setActiveSize(common?.size ? common?.size : result?.sizes[0]);
        }
      } catch (err) {
        setError("Failed to fetch product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if modal is open
    if (common?.buyModal && common?.productId) {
      fetchProductById();
    }
  }, [common?.productId, common?.buyModal, common?.size]);

  const increament = () => {
    console.log(common?.quantity);
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  if (!common?.buyModal) return null; // Avoid rendering when modal is closed

  return (
    <div className="full-page-img-show fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-40 flex justify-center items-center">
      <div className="bg-secondary p-3 w-[600px] rounded-sm">
        <div className="flex justify-end w-[95%] ">
          <button
            onClick={() =>
              setCommon({
                ...common,
                buyModal: false,
                productId: "",
                mode: "",
                quantity: 0,
                size: "",
              })
            }
            className="hover:bg-black flex justify-center items-center cursor-pointer w-[25px] h-[25px] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x "
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="animate-pulse flex gap-2 flex-col md:flex-row">
            <div className="w-[100px] h-[100px] bg-gray-700 rounded-sm"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-6 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="flex gap-2 mt-2">
                <div className="w-full h-8 bg-gray-700 rounded"></div>
                <div className="w-full h-8 bg-gray-700 rounded"></div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-full h-8 bg-gray-700 rounded"></div>
                <div className="w-full h-8 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="flex gap-2 flex-col md:flex-row">
            <div>
              {product?.thumbnail && (
                <Image
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] rounded-sm"
                  src={product.thumbnail}
                  alt={product.title}
                />
              )}
            </div>
            <div>
              <h1 className="mb-2">{product?.title}</h1>
              <p>
                <del className="text-gray-300 text-sm mr-2">
                  ৳ {mainPrice(product?.price * count)}
                </del>
                ৳ {originalPrice}
              </p>
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
                <button
                  className="variable-btn nav-border"
                  onClick={increament}
                >
                  +
                </button>
              </div>
              <div className="mt-4 text-sm flex items-center gap-2">
                {product?.sizes?.map((size, index) => (
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
              <div className="mt-4 flex items-center gap-3">
                {common?.mode !== "update" && (
                  <button className="btn flex justify-between items-center gap-3 border">
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
                  </button>
                )}
                <AddCart
                  productId={common?.productId}
                  quantity={count}
                  size={activeSize}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default BuyModal;
