import mainPrice from "@/helpers/mainPrice";
import OrderItem from "./OrderItem";

export default function OrderMainItem({ items, payment, orderId, status }) {
  let totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="mt-4 nav-border p-3">
      <div className="flex items-center gap-2">
        <h1>Delivered</h1>
        <button
          className={`${
            status === "Pending" ? "bg-red-500" : "bg-[#0da487]"
          } variable-btn `}
        >
          {status}
        </button>
      </div>
      <div className="flex flex-col md:flex-row  justify-between">
        <p>
          Order ID : <span className="text-gray-300">{orderId}</span>
        </p>
        {/* <button className="variable-btn bg-red-600 hover:bg-red-500">
          Cancel Order
        </button> */}
      </div>
      <p className="text-sm">
        Payment Method :
        <span className="text-gray-300 ml-2 capitalize">
          {payment === "cod" ? "Cash on delivery" : payment}
        </span>
      </p>
      <p className="text-sm">
        Total Amount :
        <span className="text-gray-300 ml-2 capitalize">
          {mainPrice(totalPrice + 40)}
        </span>
      </p>
      {items.map((item, index) => (
        <OrderItem
          index={index}
          payment={item}
          quantity={item?.quantity}
          product={item?.product}
          key={item?.product}
        />
      ))}
    </div>
  );
}
