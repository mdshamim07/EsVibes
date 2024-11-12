export default function CartHeader() {
  return (
    <div className="hidden md:grid text-center bg-secondary p-1 mt-2 mb-2 grid-cols-12 gap-4">
      <div className="col-span-1">Thumbnail</div>
      <div className="col-span-3">Info</div>
      <div className="col-span-2">Price</div>
      <div className="col-span-1">Quantity</div>
      <div className="col-span-1">Size</div>
      <div className="col-span-2">Total Price</div>
      <div className="col-span-2 text-center">Action</div>
    </div>
  );
}
