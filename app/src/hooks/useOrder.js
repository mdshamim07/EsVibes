import { useContext } from "react";
import { OrderContext } from "../context";

export default function useOrder() {
  const { order, setOrder } = useContext(OrderContext);
  return { order, setOrder };
}
