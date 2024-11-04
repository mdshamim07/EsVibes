export default function ProductImage() {
  return (
    <div className="w-full md:w-[40%]">
      <img
        className="w-full h-[350px] object-cover"
        src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
        alt=""
      />
      <div className="flex items-center gap-2 mt-2">
        <img
          className="cursor-pointer p-[1px] bg-green-500 w-[80px] h-[80px] object-cover"
          src="https://fabrilife.com/products/643106a391a9e-square.jpg?v=20"
          alt=""
        />
        <img
          className="cursor-pointer p-[1px] w-[80px] h-[80px] object-cover"
          src="https://fabrilife.com/products/643106a36dd2f-square.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
