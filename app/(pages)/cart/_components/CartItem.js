import formatePrice from "@/helpers/formatePrice";
import mainPrice from "@/helpers/mainPrice";
import Image from "next/image";
import DeleteCartButton from "./DeleteCartButton";

export default function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  size,
  cartId,
}) {
  const originalPrice = mainPrice(price);
  const totalPrice = mainPrice(price * quantity);

  return (
    <div className="grid mt-2 nav-border grid-cols-12 gap-4 shadow-lg p-2">
      <Image
        width={80}
        height={80}
        className="col-span-12 md:col-span-1 w-[80px] h-[80px] object-cover"
        src={thumbnail}
        alt={title}
      />
      <div className="col-span-12 md:col-span-3 flex items-center justify-center">
        <h1 className="text-center ">{title}</h1>
      </div>
      <div className="col-span-6 md:col-span-2 flex text-center justify-center items-center">
        <span className="md:hidden text-xs"> Price :</span>
        <p className="text-gray-300 text-xs ml-2">৳ {originalPrice}</p>
      </div>
      <div className="col-span-6 md:col-span-1 text-center flex items-center">
        <span className="md:hidden"> Quantity :</span>
        <p className="text-gray-300 text-xs ml-2">{quantity}</p>
      </div>
      <div className="col-span-6 md:col-span-1  text-center flex justify-center items-center">
        <span className="md:hidden"> Size :</span>
        <p className="text-gray-300 text-xs ml-2">{size}</p>
      </div>
      <div className="col-span-12 md:col-span-2 flex text-center justify-center items-center">
        <span className="md:hidden text-xs"> Total Price :</span>
        <p className="text-gray-300  ml-2 text-xs">৳ {totalPrice}</p>
      </div>
      <div className="col-span-12 md:col-span-2 flex items-center gap-2">
        <button className="btn">Edit</button>
        <DeleteCartButton cartId={cartId} />
      </div>
    </div>
  );
}
