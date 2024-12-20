"use client";
import { useState } from "react";
import { CommonContext } from "../context";

export default function CommonProviders({ children }) {
  const [common, setCommon] = useState({
    topbar: false,
    toast: false,
    toastMessage: "",
    modal: false,
    modalContent: null,
    addressContent: false,
    buyModal: false,
    productId: "",
    toastSuccess: true,
    mode: "",
    quantity: 0,
  });

  return (
    <CommonContext.Provider value={{ common, setCommon }}>
      {children}
    </CommonContext.Provider>
  );
}
