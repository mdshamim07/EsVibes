"use client";

import { checkoutAction } from "@/app/backend/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutForm({ children, carts }) {
  const [error, setError] = useState(null);
  const router = useRouter();
  async function handleCheckout(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget); // Use `new` keyword

      // Convert FormData into a plain object for easier handling
      const formObject = Object.fromEntries(formData.entries());

      const response = await checkoutAction(formObject, carts);
      if (response.ok === false) {
        window.scrollTo(0, 30);
        setError(response.message);
      } else {
        router.push(`/payment?orderId=${response?.orderId}`);
      }
    } catch (err) {
      throw new Error("Something went wrong!");
    }
  }

  return (
    <form onSubmit={handleCheckout} className="w-full ">
      {error && <p className="mt-2 mb-2 text-red-500 text-sm">{error}</p>}
      {children}
    </form>
  );
}
