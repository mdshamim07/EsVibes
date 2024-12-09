"use client";
import { useFormStatus } from "react-dom";
export default function PlaceOrderButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`!py-2 w-full anim-btn bg-white text-black ${
        pending || "hover:bg-[#cacaca] "
      }`}
    >
      {pending && (
        <span className="mr-2 inline-block w-[10px] h-[10px] border border-black rounded-full anim border-r-transparent" />
      )}
      {pending ? "লোডিং..." : "অর্ডার করুন"}
    </button>
  );
}
