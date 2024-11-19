import AnimationContainer from "@/app/components/AnimationContainer";
import ProductItem from "@/app/components/ProductItem";
import SortItem from "./_components/SortItem";
import FilterItem from "./_components/FilterItem";
import { getAllProducts } from "@/app/backend/queries/ProductQuery";

export default async function Page({ searchParams }) {
  const search = searchParams?.search || "";
  const sort = searchParams?.sort || "A-Z";

  // Fetch products based on search and sort
  const products = await getAllProducts(search, sort);

  return (
    <AnimationContainer>
      <section className="min-h-screen py-[50px]">
        <div className="grid grid-cols-3 gap-2 w-full">
          <div className="relative col-span-3 md:col-span-2">
            <form method="GET">
              <input
                className="outline-none focus:border-white py-[4px] rounded-sm w-full px-8 bg-transparent nav-border"
                type="text"
                name="search"
                placeholder="Search your exciting tshirt..."
                defaultValue={search}
              />
              <button type="submit" className="absolute left-2 top-[10px]">
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
                  className="lucide lucide-search"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {products.length > 0
            ? products.map((product) => (
                <ProductItem
                  id={product._id}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  discount={product.discount}
                  key={product._id}
                  slug={product.slug}
                  stock={product.stock}
                  quantity={product.quantity}
                />
              ))
            : "No Products Found!"}
        </div>
      </section>
    </AnimationContainer>
  );
}
