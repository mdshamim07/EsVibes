export default function ProductContent() {
  return (
    <div className="hero-content w-full md:w-[60%]">
      <button className="btn">50% Discount</button>
      <h1 className="mt-2 mb-2 text-2xl font-bold">
        Fabrilife Mens Premium Designer Edition Full Sleeve T Shirt - Endeavour
      </h1>
      <p className="text-sm text-gray-300 mb-2">
        Ringspum Combed Compact 100% Cotton, Organic Fabric Color: Reactive Dye,
        Enzyme and Silicon washed Fabric Color: Reactive Dye, Enzyme and Silicon
        washed Typography &amp; artworks are normal/ high density screenprint
      </p>
      <p>
        <del className="text-gray-300 text-sm mr-2">৳ 785 </del> ৳ 640
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Fabric</h2>
        <ul className="list-disc text-sm text-gray-300 ml-6">
          <li>Ringspum Combed Compact 100% Cotton, Organic</li>
          <li>Fabric Color: Reactive Dye, Enzyme and Silicon washed</li>
          <li>Design panels all are fabric ; cut and sew</li>
          <li>
            Typography &amp; artworks are normal/ high density screenprint
          </li>
        </ul>
      </div>
      <div className="mt-4 flex items-center gap-3">
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
  );
}
