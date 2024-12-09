"use client";

import useOrder from "@/app/src/hooks/useOrder";
import { useState } from "react";
const deliveryOptins = [
  {
    id: 1,
    title: "বিকাশ",
    svg: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                          .a {\n                            fill: none;\n                            stroke: #fff;\n                            stroke-linecap: round;\n                            stroke-linejoin: round;\n                          }\n                        ",
            }}
          />
        </defs>
        <path
          className="a"
          d="M22.9814,8.6317s-4.1632,14.704-3.8089,14.704,16.4755,2.923,16.4755,2.923Z"
        />
        <polyline
          className="a"
          points="22.981 8.632 6.329 6.152 19.172 23.336 21.387 33.522 35.648 26.259 39.368 17.445 30.393 18.946"
        />
        <polyline
          className="a"
          points="37.929 20.855 43 20.855 39.368 17.445"
        />
        <polyline
          className="a"
          points="21.387 33.522 21.741 35.427 13.725 41.848 19.172 23.336"
        />
        <polyline
          className="a"
          points="35.648 26.259 35.117 29.138 22.848 32.778"
        />
        <polyline className="a" points="8.455 8.997 5 8.997 16.044 19.15" />
      </svg>
    ),
    objective: "bkash",
  },
  {
    id: 2,
    title: "নগদ",
    svg: (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                            .a {\n                              fill: none;\n                              stroke: #ffffff;\n                              stroke-linecap: round;\n                              stroke-linejoin: round;\n                            }\n                          ",
              }}
            />
          </defs>
          <path
            className="a"
            d="M18.8808,6.3975A19.3468,19.3468,0,1,0,42.3963,19.3847"
          />
          <path
            className="a"
            d="M14.9194,25.893C14.8584,21.68,17.4842,13.8021,26.4,9.955L22.7968,3.5432C17.4231,6.169,10.2174,15.2066,14.9194,25.893Z"
          />
          <path
            className="a"
            d="M22.136,12.4087a16.7784,16.7784,0,0,0-2.9215,8.8424c1.8394-3.7912,7.7259-9.6477,17.4192-9.0767l-.3362-7.347A17.9936,17.9936,0,0,0,25.6848,8.683"
          />
          <path
            className="a"
            d="M34.4651,12.1527A16.506,16.506,0,0,0,23.896,20.28c3.3473-2.56,11.238-5.1453,19.64-.2781l3.0022-6.7141a17.7464,17.7464,0,0,0-9.9239-1.5322"
          />
          <path
            className="a"
            d="M13.4377,20.0692a11.6039,11.6039,0,1,0,19.0467-2.7711"
          />
        </g>
      </svg>
    ),
    objective: "nagad",
  },
  {
    id: 3,
    title: "ক্যশ অন ডেলিভারী",
    objective: "cod",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-dollar-sign"
      >
        <line x1={12} x2={12} y1={2} y2={22} />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];
export default function PaymentOptions({ children, mode, customClass }) {
  const { order, setOrder } = useOrder();
  const [payment, setPayment] = useState(order?.deliveryOption);
  return (
    <div className={`w-[50%] nav-border p-2  mt-2 ${customClass}`}>
      <h2 className="text-xl font-bold">Payment Option</h2>
      <input
        name="paymentMethod"
        value={payment}
        type="hidden"
        onChange={(e) => setPayment(e.target.value)}
        className="bg-black"
      />
      <div className="text-sm mt-2">
        <ul>
          {deliveryOptins.map((item) => (
            <li
              key={item?.id}
              onClick={() => {
                setOrder({
                  ...order,
                  deliveryOption: item?.objective,
                });
                setPayment(item?.objective);
              }}
              className={`mt-2 ${
                order?.deliveryOption === item?.objective && "bg-secondary"
              } flex items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
            >
              {item?.svg}
              <span>{item?.title}</span>
            </li>
          ))}
        </ul>
      </div>
      {mode === "checkout" || children}
    </div>
  );
}
