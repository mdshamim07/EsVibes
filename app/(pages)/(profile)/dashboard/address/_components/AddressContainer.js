"use client";

import { useState } from "react";
export default function AddressContainer({ children }) {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    error: "",
    message: "",
  });
  let payment = false;
  return (
    <>
      <div className="nav-border p-3 mt-4">
        <h1 className="font-medium">Shipping Address</h1>
        {error?.error && (
          <p className="text-xs mt-2 mb-2 text-red-600 ">{error?.message}</p>
        )}
        <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
          <input
            placeholder="Name"
            name="name"
            className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
          />
          <input
            placeholder="Address"
            name="Address"
            className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
          />
          <div className="flex gap-2">
            <input
              placeholder="City"
              name="city"
              className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
            />{" "}
            <input
              placeholder="District"
              name="district"
              className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
            />
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Postal Code (Optional)"
              name="postCode"
              className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
            />{" "}
            <input
              placeholder="Phone"
              name="Phone"
              className="py-[3px] focus:border-white mt-2 px-2 outline-none nav-border w-full bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="nav-border p-3 mt-4">
        <h1 className="font-medium">Shipping Option</h1>
        {error?.error && (
          <p className="text-xs mt-2 mb-2 text-red-600 ">{error?.message}</p>
        )}
        <div className="text-sm mt-2">
          <ul className="space-y-2">
            <li
              className={`${
                payment === "bkash" && "bg-secondary"
              } flex justify-between items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
            >
              <span>ঢাকার ভিতরে</span>
              <span>70.00৳ </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
