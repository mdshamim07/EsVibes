import AnimationContainer from "@/app/components/AnimationContainer";
import CartHeader from "./_components/CartHeader";
import CartItem from "./_components/CartItem";
import OrderSummary from "./_components/OrderSummary";

export default function page() {
  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="page-title">
          <button className="btn text-center">Carts</button>
          <p className="mt-2 text-sm">You Have Total 4 Items</p>
        </div>
        <CartHeader />
        {/* products cart section  */}
        <div className="mt-4">
          <CartItem />
        </div>
        {/* products cart section end */}
        <OrderSummary />
      </section>
    </AnimationContainer>
  );
}
