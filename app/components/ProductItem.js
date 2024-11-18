import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";
import Link from "next/link";
import CartModalAction from "./CartModalAction";

export default function ProductItem({
  title,
  description,
  thumbnail,
  price,
  discount,
  slug,
  stock,
  id,

}) {
  const originalPrice = formatePrice(price, discount);

  return (
    <div>
      <Link href={`/tshirt/${slug}`}>
        <Image
          className="w-full h-[300px] object-cover"
          src={thumbnail}
          alt={title}
          width={1200}
          height={1200}
        />
      </Link>
      <div className="p-4 border">
        <Link href={`/tshirt/${slug}`}>
          <h1 className="font-medium hover:underline">{title}</h1>
          <p className="text-gray-300 text-xs mt-2">{description}</p>
          <p className="mt-2 text-sm">
            <del className="text-gray-300 text-xs mr-2">৳ BDT {price} </del> ৳{" "}
            {originalPrice}
          </p>
        </Link>
        {stock <= 10 && (
          <>
            {stock === 0 || (
              <span className="text-sm text-red-600 ml-2">
                Only {stock} {stock > 1 ? "Items" : "Item"} Avalible
              </span>
            )}
          </>
        )}
        {stock === 0 ? (
          <div>
            {" "}
            <button
              disabled
              className="text-red-500 variable-btn nav-border mt-2"
            >
              Out of stock
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
            <button className="btn flex justify-between items-center gap-3 border">
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
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Buy now</span>
            </button>
            <CartModalAction id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
