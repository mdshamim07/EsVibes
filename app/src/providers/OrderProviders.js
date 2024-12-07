"use client";

import { useState } from "react";
import { OrderContext } from "../context";

export default function OrderProviders({ children }) {
  const [order, setOrder] = useState({
    shippingOption: "dhaka",
    shippingFee: 70,
    deliveryOption: "bkash",
  });
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
