export default function CheckoutItem() {
  return (
    <div className="mt-4">
      <div className="grid nav-border grid-cols-12 gap-4 shadow-lg p-2">
        <img
          className="col-span-12 md:col-span-1 w-[80px] h-[80px] object-cover"
          src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
          alt=""
        />
        <div className="col-span-12 md:col-span-5 flex items-center">
          <h1>
            Fabrilife Mens Premium Designer Edition Full Sleeve T Shirt - 786
          </h1>
        </div>
        <div className="col-span-6 md:col-span-1 flex items-center">
          <span className="md:hidden"> Price :</span>
          <p className="text-gray-300 text-sm ml-2">৳ 750</p>
        </div>
        <div className="col-span-6 md:col-span-1 flex items-center">
          <span className="md:hidden"> Quantity :</span>
          <p className="text-gray-300 text-sm ml-2">40</p>
        </div>
        <div className="col-span-12 md:col-span-1 flex items-center">
          <span className="md:hidden"> Total Price :</span>
          <p className="text-gray-300 text-sm ml-2">৳ 780</p>
        </div>
        <div className="col-span-12 md:col-span-3 flex items-center gap-2">
          <button className="btn">Edit</button>
          <button className="variable-btn bg-red-600 hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
