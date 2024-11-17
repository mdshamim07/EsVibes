import getSingleProductbyid from "@/app/backend/queries/getSingleProductbyid";
import formatePrice from "@/helpers/formatePrice";
import Image from "next/image";

export default async function OrderItem({ quantity, payment, index, product }) {
  const singleProduct = await getSingleProductbyid(product);
  const price = formatePrice(
    singleProduct?.product?.price,
    singleProduct?.product?.discount
  );
 
  
  return (
    <div className="md:ml-4 mt-4 order-item">
      <button className="btn mb-2 mt-2">Item - {index + 1}</button>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="w-full md:w-[15%]">
          <Image
            width={1200}
            height={1200}
            src={singleProduct?.product?.thumbnail}
            alt={singleProduct?.product?.title}
          />
        </div>
        <div>
          <h1 className=" font-medium">{singleProduct?.product?.title}</h1>
          <p className="text-sm">
            Price :<span className="text-gray-300"> {price}</span>
          </p>
          <p className="text-sm">
            Quantity : <span className="text-gray-300"> {quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
