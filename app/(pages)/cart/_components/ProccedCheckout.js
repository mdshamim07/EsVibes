import Link from "next/link";

export default function ProccedCheckout({ items }) {
  return (
    <Link href="/checkout" className="btn !w-full !py-2">
      চেকআউট করতে এগিয়ে যান ({items})
    </Link>
  );
}
