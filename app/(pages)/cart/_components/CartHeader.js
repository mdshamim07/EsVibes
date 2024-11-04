export default function CartHeader() {
  return (
    <div className="hidden md:grid bg-secondary p-1 mt-2 mb-2 grid-cols-12 gap-4">
      <div className="col-span-1">Thumbnail</div>
      <div className="col-span-5">Info</div>
      <div className="col-span-1">Price</div>
      <div className="col-span-1">Quantity</div>
      <div className="col-span-3 text-center">Action</div>
    </div>
  );
}
