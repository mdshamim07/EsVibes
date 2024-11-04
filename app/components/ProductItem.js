import Link from "next/link";

export default function ProductItem() {
  return (
    <div>
      <img
        className="w-full h-[300px] object-cover"
        src="https://fabrilife.com/products/6382185fc301d-square.jpg?v=20"
        alt=""
      />
      <div className="p-4 border">
        <Link href="/tshirt/mens-premium-tshirt">
          <h1 className="font-medium">
            Fabrilife Mens Premium Designer Edition Full Sleeve T Shirt -
            Endeavour
          </h1>
          <p className="text-gray-300 text-xs mt-2">
            Ringspum Combed Compact 100% Cotton, Organic Fabric Color:
          </p>
          <p className="mt-2">
            <del className="text-gray-300 text-sm mr-2">৳ 785 </del> ৳ 640
          </p>
        </Link>
        <div className="mt-4 flex flex-col md:flex-row items-center gap-3">
          <button className="btn flex justify-between items-center gap-3 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Buy now</span>
          </button>
          <button className="variable-btn flex items-center justify-between gap-2 border hover:bg-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx={8} cy={21} r={1} />
              <circle cx={19} cy={21} r={1} />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span> Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
