import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";
import Link from "next/link";

export default function AlsoLikeItem({ price, discount, slug, thumbnail }) {
  const originalPrice = formatePrice(price, discount);
  return (
    <div className="relative mt-4">
      <Link href={`/tshirt/${slug}`} className="cursor-pointer">
        <Image
          className="w-full h-[200px] object-cover"
          width={1200}
          height={1200}
          src={thumbnail}
          alt={thumbnail}
        />
      </Link>
      <Link href={`/tshirt/${slug}`} className="flex justify-center">
        <button className="variable-btn !text-sm bg-black nav-border absolute top-[-10px]">
          <del className="text-gray-500 !text-xs">৳ BDT {price}</del> ৳{" "}
          {originalPrice}
        </button>
      </Link>
      <div>
        <button className="btn w-full mt-2">Buy Now</button>
      </div>
    </div>
  );
}
