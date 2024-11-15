import AnimationContainer from "@/app/components/AnimationContainer";
import AddressBox from "./_components/AddressBox";

import DeliveryOption from "./_components/DeliveryOption";
import OrderSummaryBox from "./_components/OrderSummaryBox";
import getCartById from "@/app/backend/queries/getCartById";
import CartItem from "../cart/_components/CartItem";
import CartHeader from "../cart/_components/CartHeader";
import { auth } from "@/auth";
import UserCredentials from "@/app/src/UserCredentials";
import AddressContent from "../(profile)/dashboard/address/_components/AddressContent";
import AddressContainer from "../(profile)/dashboard/address/_components/AddressContainer";
import AddressField from "../(profile)/dashboard/address/_components/AddressField";
import ActualAddress from "../(profile)/dashboard/address/_components/ActualAddress";

export default async function page() {
  const { user } = await auth();
  const getUser = await UserCredentials(user?.id);
  const carts = await getCartById();
  let totalPrice = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="page-title">
          <button className="btn text-center">Checkout</button>
        </div>
        <CartHeader mode="checkout" />

        <div className="mt-4">
          {carts.length > 0 &&
            carts &&
            carts.map((cartItem) => (
              <CartItem
                mode="checkout"
                productId={cartItem?.productId}
                cartId={cartItem?._id}
                size={cartItem?.size}
                title={cartItem?.productId?.title}
                thumbnail={cartItem?.productId?.thumbnail}
                price={cartItem?.price}
                quantity={cartItem?.quantity}
                key={cartItem?._id}
              />
            ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
          <div className="w-full md:w-[60%]">
            <AddressContent user={getUser} address={getUser?.address}>
              <AddressContainer>
                <AddressField mode="city" />
                <AddressField />
                <ActualAddress address={getUser?.address} />
              </AddressContainer>
            </AddressContent>
            <DeliveryOption />
          </div>
          {/* products cart section end */}
          <OrderSummaryBox totalPrice={totalPrice} items={carts.length} />
        </div>
      </section>
    </AnimationContainer>
  );
}
