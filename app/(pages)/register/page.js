import AnimationContainer from "@/app/components/AnimationContainer";

import Link from "next/link";
import RegisterForm from "./_components/RegisterForm";
export const metadata = {
  title: "Esvibes - Register",
};
export default function page() {
  return (
    <AnimationContainer>
      <main className="w-full flex justify-center items-center">
        <section className="w-full md:w-1/2 min-h-screen py-[50px]">
          <div className="flex justify-center items-center mb-2 flex-col">
            <button className="btn">অ্যাকাউন্ট তৈরি করুন</button>
            <p className="text-xs mb-2 mt-2 text-gray-300">
              এখনই যোগ দিন এবং আমাদের এক্সক্লুসিভ ডিজাইন, বিশেষ অফার এবং নতুন
              কালেকশন সম্পর্কে সবার আগে জানুন!
            </p>
          </div>

          <RegisterForm>
            <div>
              <p className="text-sm mt-4 text-gray-300">
                আপনার যদি ইতিমধ্যেই একটি অ্যাকাউন্ট থাকে তবে
                <Link href="/login" className="ml-2 text-white underline">
                  লগিন
                </Link> করুন
              </p>
            </div>
          </RegisterForm>
        </section>
      </main>
    </AnimationContainer>
  );
}
