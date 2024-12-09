"use client";
import { useState } from "react";

export default function OurNumber() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "01816628413";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="mt-2 mb-2 gap-2 flex items-center">
      <input
        readOnly
        className="w-full nav-border outline-none py-[4px] px-4 bg-transparent"
        placeholder={phoneNumber}
        value={phoneNumber}
      />
      <button className="btn !py-[4px]" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
