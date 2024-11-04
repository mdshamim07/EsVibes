import AnimationContainer from "@/app/components/AnimationContainer";
import LogInWithGoogle from "@/app/components/LogInWithGoogle";
import Link from "next/link";

export default function page() {
  return (
    <AnimationContainer>
      <main className="w-full flex justify-center items-center">
        <section className="w-full md:w-1/2 min-h-screen py-[50px]">
          <div className="flex justify-center items-center mb-2 flex-col">
            <button className="btn">Create Account</button>
            <p className="text-xs mb-2 mt-2 text-gray-300">
              Join now and be the first to discover our exclusive designs,
              special deals, and new arrivals!
            </p>
          </div>
          <LogInWithGoogle />
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">Phone</label>
            <input type="text" placeholder="Enter Your Name" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-user"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx={12} cy={8} r={2} />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">Password</label>
            <input type="text" placeholder="Enter Your Name" />
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
              className="lucide lucide-lock-keyhole"
            >
              <circle cx={12} cy={16} r={1} />
              <rect x={3} y={10} width={18} height={12} rx={2} />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
          </div>
          <div>
            <p className="text-sm mt-4 text-gray-300">
              If you already have an account to
              <Link href="/login" className="ml-2 text-white underline">
                Login
              </Link>
            </p>
          </div>
          <button className="btn mt-4 ">Register</button>
        </section>
      </main>
    </AnimationContainer>
  );
}
