import AnimationContainer from "@/app/components/AnimationContainer";
import { auth } from "@/auth";
import PersonalInfo from "./_components/PersonalInfo";

export default async function page() {
  const loggedAuth = await auth();
  const user = loggedAuth
    ? loggedAuth?.user
    : {
        name: "No Name",
        phone: "No Phone",
      };
  return (
    <AnimationContainer>
      <section>
        <PersonalInfo userId={user?.id} name={user?.name} phone={user?.phone} />
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
