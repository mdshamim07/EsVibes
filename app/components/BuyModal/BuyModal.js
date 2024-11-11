"use client";

import { getProductByIdAction } from "@/app/backend/actions";
import useCommonState from "@/app/src/hooks/useCommonState";
import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import React from "react";

const BuyModal = React.memo(function BuyModal() {
  const { common, setCommon } = useCommonState();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use useMemo to memoize originalPrice
  const originalPrice = useMemo(
    () => formatePrice(product?.price, product?.discount),
    [product]
  );

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      setError(null); // Reset error on each fetch

      try {
        const result = await getProductByIdAction(common?.productId);
        if (result) {
          setProduct(result);
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
  }, [common?.productId, common?.buyModal]);

  if (!common?.buyModal) return null; // Avoid rendering when modal is closed

  return (
    <div className="full-page-img-show fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-50 flex justify-center items-center">
      <div className="bg-secondary p-3 w-[600px] rounded-sm">
        <div className="flex justify-end w-[95%] ">
          <button
            onClick={() =>
              setCommon({
                ...common,
                buyModal: false,
                productId: "",
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
                  priority // Set priority to avoid lazy loading
                />
              )}
            </div>
            <div>
              <h1 className="mb-2">{product?.title}</h1>
              <p>
                <del className="text-gray-300 text-sm mr-2">
                  ৳ BDT {product?.price}
                </del>
                ৳ {originalPrice}
              </p>
              <div className="flex gap-2 mt-2">
                <button className="variable-btn nav-border">-</button>
                <input
                  type="text"
                  defaultValue={1}
                  className="text-center bg-transparent border px-4 w-[60px] h-[30px] outline-none"
                  readOnly
                />
                <button className="variable-btn nav-border">+</button>
              </div>
              <div className="mt-4 text-sm flex items-center gap-2">
                Size : <button className="btn">S</button>
                {product?.sizes?.map((size, index) => (
                  <button className="variable-btn border" key={index}>
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
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
                <button className="variable-btn flex items-center justify-between gap-2 border hover:bg-secondary">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default BuyModal;
