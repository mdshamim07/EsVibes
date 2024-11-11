export default function ActualAddress({ address }) {
  return (
    <div className="form-control">
      <label htmlFor="address">Address</label>
      <input
        name="address"
        defaultValue={address?.address}
        type="text"
        placeholder="Enter Your Full Address"
        className="p-2 border rounded mt-2"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg lucide lucide-info"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>

      <p className="text-xs mb-2 mt-2 text-yellow-500">
        Write your full address here
      </p>
    </div>
  );
}
