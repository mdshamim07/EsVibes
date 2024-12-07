"use client";
import { useEffect, useState } from "react";

export default function DistrictInput() {
  const [districts, setDistrict] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    const fetchDistrict = async () => {
      try {
        setLoading(true);
        const response = await fetch(process.env.NEXT_PUBLIC_DISTRICT_API);
        const json = await response.json();
        if (!ignore) {
          setDistrict(json?.data);
        }
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistrict();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <select
      placeholder="District"
      name="district"
      disabled={loading}
      className={`w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white ${
        loading ? "opacity-70" : "opacity-100"
      }`}
    >
      <option className="bg-black text-white">{loading ? "Loading..." : districts[17]?.district}</option>
      {districts.map((item) => (
        <option className="bg-black text-white" key={item?.coordinates}>
          {item?.district}
        </option>
      ))}
    </select>
  );
}
