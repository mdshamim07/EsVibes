import AnimationContainer from "@/app/components/AnimationContainer";
import ProductItem from "@/app/components/ProductItem";
import SortItem from "./_components/SortItem";
import FilterItem from "./_components/FilterItem";
import { getAllProducts } from "@/app/backend/queries/ProductQuery";
import Searchbox from "./_components/Searchbox";
export const metadata = {
  title: "Esvibes - Shop",
};
export default async function Page({ searchParams }) {
  // Fetch products based on search and sort
  const { query } = await searchParams;
  const products = await getAllProducts(query);

  return (
    <AnimationContainer>
      <div className="page-title !py-[20px]">
        <button className="variable-btn  flex gap-2  items-center nav-border text-center">
          {" "}
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
          শপ
        </button>
      </div>
      <section className="min-h-screen ">
        <div className="grid grid-cols-3 gap-2 w-full">
          <Searchbox />
        </div>

        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {products.map((product) => (
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
            ))}
          </div>
        )}
        {products.length === 0 && (
          <AnimationContainer>
            <div className="min-h-[50vh] flex justify-center items-center flex-col gap-2 w-full">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                    fill="#ffffff"
                  />{" "}
                  <path
                    d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z"
                    fill="#ffffff"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62177 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62177 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM8.55339 16.3975C9.5258 15.6767 10.715 15.25 12 15.25C13.285 15.25 14.4742 15.6767 15.4466 16.3975C15.7794 16.6441 15.8492 17.1138 15.6025 17.4466C15.3559 17.7794 14.8862 17.8492 14.5534 17.6025C13.825 17.0627 12.9459 16.75 12 16.75C11.0541 16.75 10.175 17.0627 9.44661 17.6025C9.11385 17.8492 8.64413 17.7794 8.39747 17.4466C8.15082 17.1138 8.22062 16.6441 8.55339 16.3975Z"
                    fill="#ffffff"
                  />{" "}
                </g>
              </svg>
              <h2> No Products Found!</h2>
            </div>
          </AnimationContainer>
        )}
      </section>
    </AnimationContainer>
  );
}
