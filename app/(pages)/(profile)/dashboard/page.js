import AnimationContainer from "@/app/components/AnimationContainer";

export default function page() {
  return (
    <AnimationContainer>
      <section>
        <form action="" className="nav-border p-3 mt-4">
          <h1 className="font-medium">Update Personal Information</h1>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" />
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
            <label htmlFor="name">Phone</label>
            <input type="text" placeholder="Enter Your Name" />
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
          <button className="btn mt-4">Save Changes</button>
        </form>
        <form action="" className="nav-border p-3 mt-4">
          <h1 className="font-medium">Change Your Password</h1>
          <div className="form-control">
            <label htmlFor="name">Old Password</label>
            <input type="password" placeholder="Enter Your Old Password" />
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
            <label htmlFor="name">New Password</label>
            <input type="password" placeholder="Enter Your New Password" />
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
            <label htmlFor="name">Confirm Password</label>
            <input type="password" placeholder="Enter Your Confrim Password" />
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
          <button className="btn mt-4">Save Changes</button>
        </form>
        <form action="" className="border border-red-500 p-3 mt-4">
          <h2>Delete Account</h2>
          <p className="text-xs text-gray-300">
            Permanently remove your Personal Account and all of its contents
            from the platform. This action is not reversible, so please continue
            with caution.
          </p>
          <button className="variable-btn mt-4 bg-red-500">Delete</button>
        </form>
      </section>
    </AnimationContainer>
  );
}
