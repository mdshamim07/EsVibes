import Link from "next/link";

export default function ProccedCheckout({ items, carts }) {
  return (
    <Link href="/checkout" className="btn w-full !py-2">
      Proceed To Checkout ({items})
    </Link>
  );
}
