import getOrdersQuery from "@/app/backend/queries/getOrdersQuery";
import AnimationContainer from "@/app/components/AnimationContainer";

import OrderMainItem from "./_components/OrderMainItem";
export const metadata = {
  title: "Esvibes - Orders",
};
export default async function page() {
  const orders = await getOrdersQuery();

  return (
    <AnimationContainer>
      <div className="flex justify-center mt-8" />

      <section>
        {orders.length > 0 && orders ? (
          orders.map((order) => (
            <OrderMainItem
              orderId={order?.transactionId}
              status={order?.delivered}
              payment={order?.payment}
              items={order?.items}
              key={order?._id}
            />
          ))
        ) : (
          <h2 className="text-center text-2xl mt-4 text-gray-500">
            No Orders Availible
          </h2>
        )}
      </section>
    </AnimationContainer>
  );
}
