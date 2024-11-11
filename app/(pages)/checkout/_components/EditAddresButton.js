"use client";

import useCommonState from "@/app/src/hooks/useCommonState";

export default function EditAddresButton() {
  const { common, setCommon } = useCommonState();
  return (
    <button
      className="btn"
      onClick={() =>
        setCommon({
          ...common,
          addressContent: true,
        })
      }
    >
      Edit
    </button>
  );
}
