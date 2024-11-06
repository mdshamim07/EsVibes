import AnimationContainer from "@/app/components/AnimationContainer";
import LogInWithGoogle from "@/app/components/LogInWithGoogle";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export default function page() {
  return (
    <AnimationContainer>
      <main className="w-full flex justify-center items-center">
        <section className="w-full md:w-1/2 min-h-screen py-[80px]">
          <div className="flex justify-center items-center mb-2 flex-col">
            <button className="btn">Login Now</button>
            <p className="text-xs mb-2 mt-2 text-gray-300">
              Join now and be the first to discover our exclusive designs,
              special deals, and new arrivals!
            </p>
          </div>
          <LogInWithGoogle />
          <LoginForm>
            <p className="text-sm mt-4 text-gray-300">
              New Here ?
              <Link href="/register" className="ml-2 mr-2 text-white underline">
                Register
              </Link>
              Now
            </p>
          </LoginForm>
        </section>
      </main>
    </AnimationContainer>
  );
}
