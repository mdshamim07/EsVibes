import EditAddresButton from "./EditAddresButton";

export default function AddressBox({ address, user }) {
  return (
    <div className="w-full mt-4">
      <div className="nav-border p-2 w-full">
        <div className="flex justify-between items-center">
          <h2>Shipping &amp; Billing</h2>
          <EditAddresButton />
        </div>

        <div className="text-sm mt-2 text-gray-300">
          <p>
            {user?.name} <span className="ml-2">{user?.phone}</span>
          </p>
          <p>
            {" "}
            {address?.city}, {address?.area},
          </p>
          <div className="flex items-center gap-2 mt-2">
            <button className="btn capitalize">{address?.location}</button>
            <p className="ml-2">{address?.address} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
