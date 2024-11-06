import AnimationContainer from "@/app/components/AnimationContainer";
import ProductItem from "@/app/components/ProductItem";
import SortItem from "./_components/SortItem";
import FilterItem from "./_components/FilterItem";

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
            <SortItem />
            <FilterItem />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <ProductItem />
        </div>
      </section>
    </AnimationContainer>
  );
}
