"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    // Log the error to an error reporting service
    setErrors(errors);
  }, [errors]);

  return (
    <div>
      <h2>Something went wrong! {errors}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
