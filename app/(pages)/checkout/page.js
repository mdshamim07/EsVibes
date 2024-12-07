import getCartById from "@/app/backend/queries/getCartById";
import ShippingOption from "../cart/_components/ShippingOption";
import CheckoutItem from "./_components/CheckoutItem";
import DistrictInput from "./_components/DistrictInput";
import CartItem from "../cart/_components/CartItem";
import { minusDiscount } from "../cart/page";
import CartHeader from "../cart/_components/CartHeader";
import CheckoutAction from "./_components/CheckoutAction";
import DeliveryOptions from "./_components/DeliveryOptions";

export default async function page() {
  const carts = await getCartById();
  let totalPrice = carts.reduce((total, item) => {
    return (
      total +
      minusDiscount(item?.productId?.price, item?.productId?.discount) *
        item.quantity
    );
  }, 0);
  return (
    <section className="min-h-screen py-[50px]">
      <div className="page-title">
        <button className="btn text-center">Checkout</button>
      </div>
      <CartHeader />
      {carts.map((cartItem) => (
        <CartItem
          mode="checkout"
          stock={cartItem?.stock}
          quantity={cartItem?.quantity}
          key={cartItem?._id}
          size={cartItem?.size}
          cartId={cartItem?._id}
          cartItem={cartItem}
        />
      ))}

      <div className="w-full ">
        <div className="nav-border p-2 w-full ">
          <h2 className="text-xl font-bold">Shipping &amp; Billing</h2>
          <div className="mt-2">
            <input
              placeholder="Name"
              name="name"
              className="w-full nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
            />
            <input
              placeholder="Address"
              name="address"
              className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
            />
            <div className="flex gap-2">
              <input
                placeholder="City"
                name="city"
                className="w-full nav-border mt-2 py-[3px] px-4 outline-none bg-transparent focus:border-white"
              />
              <DistrictInput />
            </div>
            <div className="flex gap-2">
              <input
                placeholder="Postal Code (optional)"
                name="postalCode"
                className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
              />
              <input
                placeholder="Phone"
                name="Phone"
                className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
              />
            </div>
          </div>
        </div>
        <ShippingOption />
        <DeliveryOptions />

        <CheckoutAction />
      </div>
    </section>
  );
}
