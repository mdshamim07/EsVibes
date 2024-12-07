import mainPrice from "@/helpers/mainPrice";
import Image from "next/image";
import DeleteCartButton from "./DeleteCartButton";

import EditCartButton from "./EditCartButton";
import getProdcutById from "@/app/backend/queries/getProdcutById";
import formatePrice from "@/helpers/formatePrice";
import { minusDiscount } from "../page";

export default async function CartItem({
  mode,
  cartItem,
  size,
  quantity,
  cartId,
  stock,
}) {
  const { product } = await getProdcutById(cartItem?.productId?._id);

  return (
    <div className="grid mt-1 nav-border grid-cols-12 gap-4 shadow-lg p-2 mb-1">
      <Image
        width={80}
        height={80}
        src={product?.thumbnail}
        alt={product?.title}
        className="col-span-12 md:col-span-1 w-[80px] h-[80px] object-cover"
      />
      <div className="col-span-12 md:col-span-3 flex items-center justify-center">
        <h1 className="text-center ">{product?.title}</h1>
      </div>
      <div className="col-span-6 md:col-span-2 flex text-center justify-center items-center">
        <span className="md:hidden text-xs"> Price :</span>
        <p className="text-gray-300 text-xs ml-2">
          ৳ {formatePrice(product?.price, product?.discount)}
        </p>
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
        <p className="text-gray-300  ml-2 text-xs">
          ৳{" "}
          {mainPrice(
            minusDiscount(product?.price, product?.discount) * quantity
          )}
        </p>
      </div>
      {mode === "checkout" || (
        <div className="col-span-12 md:col-span-2 flex items-center gap-2">
          <EditCartButton
            quantity={quantity}
            size={size}
            cartId={cartId}
            stock={stock}
            productId={product?._id}
          />
          <DeleteCartButton cartId={cartId} />
        </div>
      )}
    </div>
  );
}
