import AnimationContainer from "@/app/components/AnimationContainer";
import AddressBox from "./_components/AddressBox";
import CheckoutItem from "./_components/CheckoutItem";
import DeliveryOption from "./_components/DeliveryOption";
import OrderSummaryBox from "./_components/OrderSummaryBox";

export default function page() {
  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="page-title">
          <button className="btn text-center">Checkout</button>
        </div>

        <CheckoutItem />
        <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
          <div className="w-full md:w-[60%]">
            <AddressBox />
            <DeliveryOption />
          </div>
          {/* products cart section end */}
          <OrderSummaryBox />
        </div>
      </section>
    </AnimationContainer>
  );
}
