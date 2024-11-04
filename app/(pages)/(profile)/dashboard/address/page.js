import AnimationContainer from "@/app/components/AnimationContainer";

export default function page() {
  return (
    <AnimationContainer>
      <section>
        <form action="" className="nav-border p-3 mt-4">
          <h1 className="font-medium">Update Your Address</h1>
          <div className="form-control">
            <label htmlFor="name">Building / House No / Floor / Street</label>
            <input
              type="text"
              placeholder="Enter Your Building / House No / Floor / Street"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-receipt-text"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">Region</label>
            <input type="text" placeholder="Enter Your Region" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-user"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx={12} cy={8} r={2} />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">City</label>
            <input type="text" placeholder="Enter Your City" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-user"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx={12} cy={8} r={2} />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">Area</label>
            <input type="text" placeholder="Enter Your Area" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-user"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx={12} cy={8} r={2} />
            </svg>
          </div>
          <div className="form-control">
            <label htmlFor="name">Address</label>
            <input type="text" placeholder="Enter Your Address" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-user"
            >
              <path d="M15 13a3 3 0 1 0-6 0" />
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <circle cx={12} cy={8} r={2} />
            </svg>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <button className="btn">Home</button>
            <button className="variable-btn nav-border">Office</button>
          </div>
          <button className="btn mt-4">Save Changes</button>
        </form>
        <div className="w-full mt-4">
          <div className="nav-border p-2 w-full">
            <div className="flex justify-between items-center">
              <h2>Shipping &amp; Billing</h2>
              <button className="btn">Edit</button>
            </div>
            <div className="text-sm mt-2">
              <p>
                Rakib Khan Shamim <span className="ml-2">1816628413</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button className="btn">Home</button>
                <p className="ml-2">
                  Boubazar, Army Vila, Arichpur, Tongi, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
}
