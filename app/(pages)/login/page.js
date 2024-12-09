import AnimationContainer from "@/app/components/AnimationContainer";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";
export const metadata = {
  title: "Esvibes - Login",
};
export default function page() {
  return (
    <AnimationContainer>
      <main className="w-full flex justify-center items-center">
        <section className="w-full md:w-1/2 min-h-screen py-[80px]">
          <div className="flex justify-center items-center mb-2 flex-col">
            <button className="btn">লগিন করুন</button>
            <p className="text-xs mb-2 mt-2 text-gray-300">
              এখনই যোগ দিন এবং আমাদের এক্সক্লুসিভ ডিজাইন, বিশেষ অফার এবং নতুন
              কালেকশন সম্পর্কে সবার আগে জানুন!
            </p>
          </div>

          <LoginForm>
            <p className="text-sm mt-4 text-gray-300">
              অ্যাকাউন্ট নেই? ?
              <Link href="/register" className="ml-2 mr-2 text-white underline">
                রেজিস্টার করুন
              </Link>
              এখনই
            </p>
          </LoginForm>
          <div className="mt-4 ">
            <h2 className="mb-2">Test User Credentials</h2>
            <p className="text-sm text-gray-400">Phone : 01900000000</p>
            <p className="text-sm text-gray-400">Password : 123456</p>
          </div>
        </section>
      </main>
    </AnimationContainer>
  );
}
