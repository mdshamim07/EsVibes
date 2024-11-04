export default function AlsoLikeItem() {
  return (
    <div className="relative mt-4">
      <img
        className="w-full h-[200px] object-cover"
        src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
        alt=""
      />
      <div className="flex justify-center">
        <button className="variable-btn bg-black nav-border absolute top-[-10px]">
          <del className="text-gray-500">৳ 485.00</del> ৳ 435.00
        </button>
      </div>
      <div>
        <button className="btn w-full mt-2">Buy Now</button>
      </div>
    </div>
  );
}
