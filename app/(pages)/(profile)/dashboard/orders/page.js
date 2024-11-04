import AnimationContainer from "@/app/components/AnimationContainer";

export default function page() {
  return (
    <AnimationContainer>
      <div className="flex justify-center mt-8" />

      <section>
        <div className="mt-4 nav-border p-3">
          <div className="flex items-center gap-2">
            <h1>Delivered</h1>
            <button className="variable-btn bg-[#0da487]">Success</button>
          </div>
          <div className="flex flex-col md:flex-row  justify-between">
            <p>
              Order ID : <span className="text-gray-300">1708031724431131</span>
            </p>
            <button className="variable-btn bg-red-600 hover:bg-red-500">
              Cancel Order
            </button>
          </div>
          <div className="md:ml-4 mt-4 order-item">
            <button className="btn mb-2 mt-2">Item - 1</button>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <div className="w-full md:w-[15%]">
                <img
                  src="https://fabrilife.com/products/657af61f853f8-square.jpeg?v=20"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" font-medium">
                  Mens Metro Edition Premium T-shirt - Wanderlust
                </h1>
                <p className="text-sm">
                  Price :<span className="text-gray-300"> $20.68</span>
                </p>
                <p className="text-sm">
                  Quantity : <span className="text-gray-300"> 10</span>
                </p>
                <p className="text-sm">
                  Payment Method :
                  <span className="text-gray-300">Cash On Delivery</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
}
