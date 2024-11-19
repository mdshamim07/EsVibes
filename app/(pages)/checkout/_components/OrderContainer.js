"use client";
import { useState } from "react";
import OrderSummaryBox from "./OrderSummaryBox";

export default function OrderContainer({
  children,
  totalPrice,
  items,
  orderObject,
  cartIds,
  mode,
}) {
  const [payment, setPayment] = useState("bkash");
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
      <div className="w-full md:w-[60%]">
        {children}

        <div className="nav-border p-2 w-full md:w-[70%] mt-2">
          <h2 className="text-xl font-bold">Delivery Option</h2>
          <div className="text-sm mt-2">
            <ul className="space-y-2">
              <li
                onClick={() => setPayment("bkash")}
                className={`${
                  payment === "bkash" && "bg-secondary"
                } flex items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
              >
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
                  <polyline
                    className="a"
                    points="8.455 8.997 5 8.997 16.044 19.15"
                  />
                </svg>
                <span>Bkash</span>
              </li>
              <li
                onClick={() => setPayment("nagad")}
                className={`${
                  payment === "nagad" && "bg-secondary"
                } flex items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
              >
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
                <span>Nagad</span>
              </li>
              <li
                onClick={() => setPayment("cod")}
                className={`${
                  payment === "cod" && "bg-secondary"
                } flex items-center gap-2 nav-border w-full px-2 py-[4px] cursor-pointer`}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 12.8302 22 11.8419 21.965 11M20.8284 7.17157C19.6569 6 17.7712 6 14 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 15.1698 2 16.1581 2.03496 17"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 2C13.8856 2 14.8284 2 15.4142 2.58579C16 3.17157 16 4.11438 16 6M8.58579 2.58579C8 3.17157 8 4.11438 8 6"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <span>Cash On Delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* products cart section end */}
      <OrderSummaryBox
        cartIds={cartIds}
        orderObject={orderObject}
        payment={payment}
        totalPrice={totalPrice}
        items={items}
        mode={mode}
      />
    </div>
  );
}
