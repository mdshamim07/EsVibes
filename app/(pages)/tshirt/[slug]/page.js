import AnimationContainer from "@/app/components/AnimationContainer";
import AlsoLikes from "./_components/AlsoLikes";
import CustomerReview from "./_components/CustomerReview";
import ProductContent from "./_components/ProductContent";
import ProductImage from "./_components/ProductImage";
import getProductBySlug from "@/app/backend/queries/getProductById";
import formatePrice from "@/helpers/formatePrice";
import getReviews from "@/app/backend/queries/getReviews";

export default async function page({ params }) {
  const param = await params;
  const product = await getProductBySlug(param?.slug);

  const price = formatePrice(product?.price, product?.discount);
  const reviews = await getReviews(product?._id);
  return (
    <AnimationContainer>
      {product.ok === false ? (
        <div className="min-h-[80vh] flex justify-center items-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6 lucide lucide-circle-off"
          >
            <path d="m2 2 20 20" />
            <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
            <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
          </svg>

          {product?.message}
        </div>
      ) : (
        <div className="pb-[50px]">
          <section className="flex justify-between flex-col md:flex-row gap-4 py-[50px]">
            <ProductImage
              thumbnail={product?.thumbnail}
              gallery={product.gallery}
              title={product?.title}
            />
            <ProductContent
              description={product?.description}
              title={product?.title}
              price={price}
              discount={product?.discount}
              originalPrice={product?.price}
              ability={product?.ability}
            />
          </section>
          <section className="py-[50px]">
            <h1>Customer Review</h1>
            {/* <div className="review-imgs mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
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
      </div> */}
            {reviews.length > 0 &&
              reviews &&
              reviews.map((review) => (
                <CustomerReview
                  key={review?._id}
                  content={review?.content}
                  userName={review?.user?.name}
                />
              ))}
          </section>

          <AlsoLikes category={product?.category} />
        </div>
      )}
    </AnimationContainer>
  );
}
