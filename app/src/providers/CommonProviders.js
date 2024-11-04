"use client"
import { useState } from "react";
import { CommonContext } from "../context";

export default function CommonProviders({ children }) {
  const [common, setCommon] = useState({
    topbar: false,
  });
  return (
    <CommonContext.Provider value={{ common, setCommon }}>
      {children}
    </CommonContext.Provider>
  );
}
