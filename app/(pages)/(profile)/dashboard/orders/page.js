import getOrdersQuery from "@/app/backend/queries/getOrdersQuery";
import AnimationContainer from "@/app/components/AnimationContainer";

import OrderMainItem from "./_components/OrderMainItem";

export default async function page() {
  const orders = await getOrdersQuery();

  return (
    <AnimationContainer>
      <div className="flex justify-center mt-8" />

      <section>
        {orders.map((order) => (
          <OrderMainItem
            orderId={order?.transactionId}
            status={order?.delivered}
            payment={order?.payment}
            items={order?.items}
            key={order?._id}
          />
        ))}
      </section>
    </AnimationContainer>
  );
}
