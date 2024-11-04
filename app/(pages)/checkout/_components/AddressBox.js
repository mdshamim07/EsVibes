export default function AddressBox() {
  return (
    <div className="nav-border p-2 w-full md:w-[70%]">
      <h2 className="text-xl font-bold">Shipping &amp; Billing</h2>
      <div className="text-sm mt-2">
        <p>
          Rakib Khan Shamim <span className="ml-2">1816628413</span>
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button className="btn">Home</button>
          <p className="ml-2">Boubazar, Army Vila, Arichpur, Tongi, Dhaka</p>
        </div>
      </div>
    </div>
  );
}
