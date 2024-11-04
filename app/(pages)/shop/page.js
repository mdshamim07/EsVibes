import AnimationContainer from "@/app/components/AnimationContainer";
import ProductItem from "@/app/components/ProductItem";

export default function Page() {
  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="relative col-span-3 md:col-span-2">
            <input
              className="outline-none focus:border-white py-[4px] rounded-sm w-full px-8 bg-transparent nav-border"
              type="text"
              placeholder="Search your exciting tshirt..."
            />
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
              className="lucide lucide-search absolute left-2 top-[10px]"
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className="gap-2 flex md:justify-end col-span-3 md:col-span-1 items-center">
            <div className="relative">
              <button className="variable-btn flex items-center gap-2 nav-border">
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
                  className="lucide lucide-arrow-up-down"
                >
                  <path d="m21 16-4 4-4-4" />
                  <path d="M17 20V4" />
                  <path d="m3 8 4-4 4 4" />
                  <path d="M7 4v16" />
                </svg>
                Sort
              </button>
              <ul className="text-sm absolute hidden">
                <li className="variable-btn bg-black nav-border mt-2 cursor-pointer">
                  A-Z
                </li>
                <li className="variable-btn bg-black nav-border mt-2 cursor-pointer">
                  Z-A
                </li>
              </ul>
            </div>
            <div className="relative">
              <button className="variable-btn flex items-center gap-2 nav-border">
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
                  className="lucide lucide-sliders-horizontal"
                >
                  <line x1={21} x2={14} y1={4} y2={4} />
                  <line x1={10} x2={3} y1={4} y2={4} />
                  <line x1={21} x2={12} y1={12} y2={12} />
                  <line x1={8} x2={3} y1={12} y2={12} />
                  <line x1={21} x2={16} y1={20} y2={20} />
                  <line x1={12} x2={3} y1={20} y2={20} />
                  <line x1={14} x2={14} y1={2} y2={6} />
                  <line x1={8} x2={8} y1={10} y2={14} />
                  <line x1={16} x2={16} y1={18} y2={22} />
                </svg>
                Filter
              </button>
              <ul className="text-sm absolute hidden">
                <li className="variable-btn bg-black nav-border mt-2 cursor-pointer">
                  A-Z
                </li>
                <li className="variable-btn bg-black nav-border mt-2 cursor-pointer">
                  Z-A
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <ProductItem />
        </div>
      </section>
    </AnimationContainer>
  );
}
