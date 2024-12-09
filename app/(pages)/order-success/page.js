import AnimationContainer from "@/app/components/AnimationContainer";
import Link from "next/link";
export const metadata = {
  title: "Esvibes - Order Success",
};
export default async function page({ searchParams }) {
  const params = await searchParams;
  return (
    <AnimationContainer>
      <div className="flex justify-center items-center flex-col min-h-[70vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={150}
          height={150}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00fa9a"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-badge-check"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <div className="flex justify-center items-center flex-col mt-4">
          <h1 className="text-2xl font-medium">অর্ডার সফল</h1>
          <p>আপনার পেমেন্ট সফল হয়েছে। শীঘ্রই আপনার অর্ডার পাঠানো হবে।</p>
          <p>
            Transaction ID :{" "}
            <span className="text-gray-300">{params?.transactionId}</span>
          </p>
          <div className="flex items-center gap-2 mt-2">
            {" "}
            <Link href="/" className="btn ">
              হোম
            </Link>
            <Link href="/dashboard/orders" className="variable-btn nav-border ">
              আমার অর্ডারসমুহ
            </Link>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
