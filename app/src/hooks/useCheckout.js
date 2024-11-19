import { useContext } from "react";
import { CheckoutContext } from "../context";

export default function useCheckout() {
  const { checkout, setCheckout } = useContext(CheckoutContext);
  return { checkout, setCheckout };
}
