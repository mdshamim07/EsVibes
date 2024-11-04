export default function CustomerReview() {
  return (
    <section className="py-[50px]">
      <h1>Customer Review</h1>
      <div className="mt-4 flex gap-2">
        <div className="w-[40px] bg-secondary h-[40px] rounded-full flex justify-center items-center">
          R
        </div>
        <div className="content-user w-[85%]">
          <h1>Md Shamim Mia</h1>
          <p className="text-xs text-gray-400">
            Event T-shirt T-shirt/Clothing with your brand logo or design? We
            are delivering worldwide at unbeatable prices. Click here
          </p>
        </div>
      </div>
      <div className="review-imgs mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
        <div className="w-full h-full overflow-hidden transition-all duration-150">
          <img
            className="cursor-pointer w-full h-full object-cover hover:scale-110 transition-all duration-150"
            src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
            alt=""
          />
        </div>
        <div className="w-full h-full overflow-hidden transition-all duration-150">
          <img
            className="cursor-pointer w-full h-full object-cover transition-all duration-150 hover:scale-110"
            src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
