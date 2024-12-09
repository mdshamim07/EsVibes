import getOrderQuery from "@/app/backend/queries/getOrderQuery";
import DeliveryOptions from "../checkout/_components/DeliveryOptions";
import OurNumber from "./_components/OurNumber";
import mainPrice from "@/helpers/mainPrice";
import SubmitPayment from "./_components/SubmitPayment";
import Link from "next/link";

export default async function page({ searchParams }) {
  const params = await searchParams;
  const getOrder = await getOrderQuery(params?.orderId);
  return (
    <>
      <div className="page-title py-[20px]">
        <button className="variable-btn flex gap-2 items-center nav-border text-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-dollar-sign"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
          পেমেন্ট
        </button>
      </div>
      {getOrder?.paymentStatus === "Pending" ? (
        <div className="min-h-screen pb-[40px] py-[20px">
          <div>
            <h1 className="text-xl font-bold text-center">
              আপনার পেমেন্ট সম্পন্ন করুন
            </h1>
            <div className="flex flex-col lg:flex-row gap-2 mt-6">
              <div className="w-full lg:w-[70%] flex flex-col md:flex-row gap-2">
                <DeliveryOptions payment={getOrder?.payment}>
                  <p className="mt-2 text-sm">
                    কোর্স ফি পরিশোধ করতে আমাদের বিকাশ মার্চেন্ট একাউন্টে সরাসরি
                    পেমেন্ট করতে পারেন। ম্যানুয়ালি বিকাশ পেমেন্ট করে নিচের
                    ফর্মের মাধ্যমে বিকাশ থেকে প্রাপ্ত ট্রানজেকশন আইডি জমা দিন।
                    ট্রানজেকশন আইডিটি সঠিক হলে স্বয়ংক্রিয়ভাবে আপনার কোর্স
                    এনরোলমেন্ট সম্পন্ন হয়ে যাবে। যদি আপনার কোন কনফিউশন থাকে বা
                    বুঝতে না পারেন, আমাদের সাপোর্ট সেন্টারে যোগাযোগ করুন।
                  </p>
                  <h3 className="text-sm mt-2 font-bold">
                    {" "}
                    আমাদের বিকাশ মার্চেন্ট একাউন্ট নাম্বার
                  </h3>
                  <OurNumber />
                  <div>
                    <div className="mt-4">
                      <label className="text-sm font-bold" htmlFor="">
                        আপনার মোবাইল নাম্বার *
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        যে মোবাইল নাম্বারটি দিয়ে আপনি নিবন্ধন করেছিলেন (আগের ধাপ
                        থেকে অটো ফিল আপ করে দেয়া হয়েছে)
                      </p>
                      <div className="mt-2 w-full py-[4px] px-2 bg-transparent nav-border outline-none relative">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="absolute left-2 top-[8px] iconify iconify--twemoji"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path
                            fill="#006A4D"
                            d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                          />
                          <circle fill="#F42A41" cx={16} cy="17.5" r={7} />
                        </svg>

                        <input
                          placeholder={`+88 ${getOrder?.address?.phone}`}
                          disabled
                          className=" outline-none px-6  w-full h-full bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="text-sm font-bold" htmlFor="">
                        বিকাশ ট্রানজেকশন আইডি *
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        পেমেন্ট বিকাশ করার পর বিকাশ থেকে আপনি যে ট্রানজেকশন আইডি
                        পেয়েছেন
                      </p>
                      <SubmitPayment orderId={params?.orderId} />
                    </div>
                  </div>
                </DeliveryOptions>

                <div className="w-full md:w-[50%]">
                  <img
                    height={541}
                    className="mt-4 h-[541px]"
                    src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqr-code.0aa23b39.png&w=640&q=75"
                  />
                </div>
              </div>
              <div className="flex-col gap-2 w-full md:w-[220px] md:h-[220px] rounded-md bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx={8} cy={21} r={1} />
                  <circle cx={19} cy={21} r={1} />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <h1 className="text-xl font-bold">
                  {mainPrice(getOrder?.totalPrice)} টাকা
                </h1>
                <p>আপনার বিল পরিশোধ করুন </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] flex gap-2 justify-center items-center flex-col ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-frown"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1={9} x2="9.01" y1={9} y2={9} />
            <line x1={15} x2="15.01" y1={9} y2={9} />
          </svg>
          <p>আপনি যেই পন্যের জন্য পেমেন্ট করতে ইচ্ছুক সেটি এখন আর নেই !</p>
          <div className="flex gap-2 items-center">
            {" "}
            <Link href="/" className="btn">
              হোম
            </Link>
            <Link href="/shop" className="variable-btn nav-border">
              শপ
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
