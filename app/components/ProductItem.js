import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";
import Link from "next/link";
import CartModalAction from "./CartModalAction";
import BuyNowButton from "./BuyNowButton";

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
            <BuyNowButton stock={stock} id={id} />
            <CartModalAction stock={stock} id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
