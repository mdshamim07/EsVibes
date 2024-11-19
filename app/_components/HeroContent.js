import formatePrice from "@/helpers/formatePrice";
import Link from "next/link";
import CartModalAction from "../components/CartModalAction";
import BuyNowButton from "../components/BuyNowButton";

export default function HeroContent({
  title,
  originalPrice,
  discount,
  ability,
  slug,
  id,
  stock,
}) {
  const price = formatePrice(originalPrice, discount);
  return (
    <div className="hero-content w-full md:w-[60%]">
      <button className="btn">{discount}% Discount</button>
      <h1 className="mt-2 mb-2 text-2xl font-bold">
        <Link href={`/tshirt/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h1>

      <div className="mt-4">
        <h2 className="text-2xl font-bold">Fabric</h2>
        {ability && (
          <ul className="list-disc text-sm text-gray-300 ml-6">
            {ability.map((abl) => (
              <li key={abl?._id}>{abl?.title}</li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-sm mt-2">
        <del className="text-gray-300 text-xs mr-2">৳ BDT {originalPrice} </del>{" "}
        ৳ {price}
      </p>
      {stock <= 10 && (
        <>
          {stock === 0 || (
            <p className="text-red-500 mt-2 text-sm">
              (Only {stock} {stock > 1 ? "Items" : "Item"} Availible)
            </p>
          )}
        </>
      )}
      <div className="mt-2 flex items-center gap-3">
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
