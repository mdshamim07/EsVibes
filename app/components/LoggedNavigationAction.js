"use client";

import { useEffect, useState } from "react";
import useCommonState from "../src/hooks/useCommonState";

export default function LoggedNavigationAction({ children }) {
  const { common, setCommon } = useCommonState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true only after component mounts on client
  }, []);

  if (!isClient) return null; // Prevent rendering until on client side

  return (
    <>
      <div
        onClick={() =>
          setCommon({
            ...common,
            topbar: !common?.topbar,
          })
        }
        className="cursor-pointer logged-in-user flex justify-center items-center gap-2"
      >
        <div className="w-[40px] h-[40px] rounded-full bg-secondary flex justify-center items-center">
          M
        </div>
        <div>
          <h1 className="text-sm">Md Shamim Mia</h1>
          <p className="text-xs text-gray-300">Admin</p>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-chevron-down transition-transform duration-300 ${
              common?.topbar ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div
        className={`bg-secondary z-50 transition-all duration-300 fixed ${
          common?.topbar ? "top-20 opacity-100" : "top-16 opacity-0"
        } shadow-lg right-9 md:right-40 px-2 w-[200px] py-2`}
      >
        {children}
      </div>
    </>
  );
}
