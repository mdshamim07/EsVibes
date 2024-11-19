import AnimationContainer from "@/app/components/AnimationContainer";
import CartHeader from "../cart/_components/CartHeader";
import CheckoutItem from "./_components/CheckoutItem";
import CartItem from "../cart/_components/CartItem";
import OrderContainer from "./_components/OrderContainer";
import AddressContent from "../(profile)/dashboard/address/_components/AddressContent";
import AddressContainer from "../(profile)/dashboard/address/_components/AddressContainer";
import AddressField from "../(profile)/dashboard/address/_components/AddressField";
import ActualAddress from "../(profile)/dashboard/address/_components/ActualAddress";
import { auth } from "@/auth";
import getProdcutById from "@/app/backend/queries/getProdcutById";
import UserCredentials from "@/app/src/UserCredentials";
import getCartById from "@/app/backend/queries/getCartById";

export default async function page({ searchParams }) {
  const parameter = await searchParams;
  const { user } = await auth();
  const isBuy = parameter?.size && parameter?.quantity && parameter?.product;

  // Fetch product data only when isBuy is true
  let product = null;
  if (isBuy) {
    const productData = await getProdcutById(parameter?.product);
    product = productData?.product || null;
  }

  // Fetch user credentials and cart data
  const getUser = await UserCredentials(user?.id);
  const carts = await getCartById();

  // Handle items for the order
  const items = carts.map((item) => ({
    product: item.productId?._id,
    quantity: item.quantity,
    size: item?.size,
  }));
  const newItem = product
    ? [
        {
          product: product?._id,
          quantity: parameter?.quantity,
          size: parameter?.size,
        },
      ]
    : [];

  // Calculate total prices
  let totalPrice = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const discountedPrice = product?.price * (1 - product?.discount / 100);

  // Construct order object
  const orderObject = {
    items: isBuy ? newItem : items,
    address: getUser?.address,
  };
  const cartIds = carts.map((cartItem) => cartItem?._id);

  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="page-title">
          <button className="btn text-center">Checkout</button>
        </div>

        {(isBuy || carts.length > 0) && <CartHeader mode="checkout" />}

        {isBuy ? (
          product ? (
            <div className="mt-4">
              <CheckoutItem
                totalPrice={discountedPrice * parameter?.quantity}
                thumbnail={product?.thumbnail}
                title={product?.title}
                quantity={parameter?.quantity}
                price={product?.price}
                size={parameter?.size}
                discount={product?.discount}
              />
            </div>
          ) : (
            <div className="mt-4 text-center text-red-500">
              Product not found.
            </div>
          )
        ) : carts.length > 0 ? (
          <div className="mt-4">
            {carts.map((cartItem) => (
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
        ) : (
          <div className="mt-4 text-center text-gray-500">
            No checkout items found.
          </div>
        )}

        {isBuy || carts.length > 0 ? (
          <OrderContainer
            cartIds={cartIds}
            mode={isBuy ? "direct" : "indirect"}
            orderObject={orderObject}
            totalPrice={
              isBuy ? discountedPrice * parameter?.quantity : totalPrice
            }
            items={isBuy ? 1 : carts.length}
          >
            <AddressContent user={getUser} address={getUser?.address}>
              <AddressContainer>
                <AddressField mode="city" />
                <AddressField />
                <ActualAddress address={getUser?.address} />
              </AddressContainer>
            </AddressContent>
          </OrderContainer>
        ) : null}
      </section>
    </AnimationContainer>
  );
}
