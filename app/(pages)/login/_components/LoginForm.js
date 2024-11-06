"use client";
import { ceredntialLogin } from "@/app/backend/actions";
import { useState } from "react";

export default function LoginForm({ children }) {
  const [error, setError] = useState(null);

  const [loginState, setLoginState] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here
    try {
      const response = await ceredntialLogin(loginState);
      console.log(response);
    } catch (err) {
      setError("Incorrect User and Password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <p className="text-red-600">{error}</p>
      <div className="form-control">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          onChange={handleChange}
          value={loginState.phone}
          type="text"
          placeholder="Enter Your Phone"
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
          className="svg lucide lucide-book-user"
        >
          <path d="M15 13a3 3 0 1 0-6 0" />
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
          <circle cx={12} cy={8} r={2} />
        </svg>
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={handleChange}
          value={loginState.password}
          type="password"
          placeholder="Enter Your Password"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="svg lucide lucide-lock-keyhole"
        >
          <circle cx={12} cy={16} r={1} />
          <rect x={3} y={10} width={18} height={12} rx={2} />
          <path d="M7 10V7a5 5 0 0 1 10 0v3" />
        </svg>
      </div>
      <div>{children}</div>
      <button className="btn mt-4">Login</button>
    </form>
  );
}
