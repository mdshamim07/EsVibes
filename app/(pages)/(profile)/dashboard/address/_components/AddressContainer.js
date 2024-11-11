"use client";

import LoadingBtn from "@/app/_components/LoadingBtn";
import { updateAddressAction } from "@/app/backend/actions";
import useCommonState from "@/app/src/hooks/useCommonState";
import { useState } from "react";

export default function AddressContainer({ children }) {
  const [location, setLocation] = useState("home");
  const [loading, setLoading] = useState(false);
  const { common, setCommon } = useCommonState();
  const [error, setError] = useState({
    error: "",
    message: "",
  });
  const handleUpdateAddress = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const formData = new FormData(e.target); // Collect form data
      const addressData = {};
      addressData.location = location;
      formData.forEach((value, key) => {
        addressData[key] = value;
      });
      const response = await updateAddressAction(addressData);
      if (response.error) {
        setError({
          ...error,
          ...response,
        });
      } else {
        setCommon({
          ...common,
          toast: true,
          toastMessage: "Successfully updated your address !",
        });
        setCommon({
          ...common,
          addressContent: false,
        });
      }
    } catch (err) {
      setError({
        ...err,
        error: "all-error",
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleUpdateAddress} className="nav-border p-3 mt-4">
        <h1 className="font-medium">Update Your Address</h1>
        {error?.error && (
          <p className="text-xs mt-2 mb-2 text-red-600 ">{error?.message}</p>
        )}
        <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
          {children}
        </div>

        <div className="mt-4 mb-4 flex items-center gap-4">
          <button
            onClick={() => setLocation("home")}
            type="button"
            className={`${
              location === "home" ? "btn" : "variable-btn nav-border"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setLocation("office")}
            type="button"
            className={`${
              location === "office" ? "btn" : "variable-btn nav-border"
            }`}
          >
            Office
          </button>
        </div>

        <LoadingBtn loading={loading} className="mt-4">
          Save Changes
        </LoadingBtn>
        <button
          className="ml-2 variable-btn nav-border"
          onClick={() =>
            setCommon({
              ...common,
              addressContent: false,
            })
          }
        >
          Cancel
        </button>
      </form>
    </>
  );
}
