"use client";
import LoadingBtn from "@/app/_components/LoadingBtn";
import { addPayment } from "@/app/backend/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubmitPayment(orderId) {
  const [code, setCode] = useState(""); // State to hold the input value
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      setError(null);
      e.preventDefault(); // Prevent the default form submission

      if (code.trim() === "") {
        setError("আপনার ট্রান্সাকশন আইডি লিখুন");
      }

      const response = await addPayment(orderId, code);
      if (response) {
        router.push("/order-success");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div
        className={`mt-2 w-full py-[4px] px-2 bg-transparent nav-border outline-none relative ${
          error && "!border-red-600"
        }`}
      >
        <input
          type="text"
          placeholder="যেমন BEU14DSK32"
          className={`outline-none px-2 w-full h-full bg-transparent `}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError(null);
          }} // Update the state on input change
        />
      </div>
      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
      <LoadingBtn loading={loading}>পেমেন্ট করুন</LoadingBtn>
    </form>
  );
}
