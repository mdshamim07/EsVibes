import formatePrice from "@/helpers/formatePrice";
import Link from "next/link";
import CartModalAction from "../components/CartModalAction";

export default function HeroContent({
  title,
  originalPrice,
  discount,
  ability,
  slug,
  id,
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
      <p className="text-sm ">
        <del className="text-gray-300 text-xs mr-2">৳ BDT {originalPrice} </del>{" "}
        ৳ {price}
      </p>
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
      <div className="mt-4 flex items-center gap-3">
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
    </div>
  );
}
