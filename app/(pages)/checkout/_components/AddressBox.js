import DistrictInput from "./DistrictInput";

export default function AddressBox() {
  return (
    <div className="nav-border p-2 w-full ">
      <h2 className="text-xl font-bold">Shipping &amp; Billing</h2>
      <div className="mt-2">
        <input
          placeholder="Name"
          name="name"
          className="w-full nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
        />
        <input
          placeholder="Address"
          name="address"
          className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
        />
        <div className="flex gap-2">
          <input
            placeholder="City"
            name="city"
            className="w-full nav-border mt-2 py-[3px] px-4 outline-none bg-transparent focus:border-white"
          />
          <DistrictInput />
        </div>
        <div className="flex gap-2">
          <input
            placeholder="Postal Code (optional)"
            name="postalCode"
            className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
          />
          <input
            placeholder="Phone"
            name="Phone"
            className="w-full mt-2 nav-border py-[3px] px-4 outline-none bg-transparent focus:border-white"
          />
        </div>
      </div>
    </div>
  );
}
