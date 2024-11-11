"use client";
import { getDivisions } from "@/app/backend/actions";
import { useEffect, useState } from "react";

export default function AddressContainer() {
  const [divisions, setDivisions] = useState([]);
  const [address, setAddress] = useState({
    division: "",
    city: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchDivisions = async () => {
      setLoading(true); // Set loading to true while data is being fetched
      const div = await getDivisions();
      setDivisions(div);
      setLoading(false); // Set loading to false once data is fetched
    };
    fetchDivisions();
  }, []);

  return (
    <form action="" className="nav-border p-3 mt-4">
      <h1 className="font-medium">Update Your Address</h1>

      <div className="form-control">
        <label htmlFor="region">Region</label>
        <select
          name="division"
          value={address.division}
          onChange={handleChange}
          disabled={loading} // Disable the select box when loading
          className={`bg-transparent border p-2 rounded mt-2 ${
            loading ? "opacity-50" : ""
          }`}
        >
          <option value="" disabled>
            {loading ? "Loading regions..." : "Select Your Region"}
          </option>
          {divisions.map((div, index) => (
            <option
              key={index}
              value={div.division}
              className="!bg-secondary text-white"
            >
              {div.division}
            </option>
          ))}
        </select>
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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Enter Your Address"
          className="p-2 border rounded mt-2"
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <button type="button" className="btn">
          Home
        </button>
        <button type="button" className="variable-btn nav-border">
          Office
        </button>
      </div>

      <button className="btn mt-4">Save Changes</button>
    </form>
  );
}
