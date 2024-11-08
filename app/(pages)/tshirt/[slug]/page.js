import AnimationContainer from "@/app/components/AnimationContainer";
import AlsoLikes from "./_components/AlsoLikes";
import CustomerReview from "./_components/CustomerReview";
import ProductContent from "./_components/ProductContent";
import ProductImage from "./_components/ProductImage";
import getProductBySlug from "@/app/backend/queries/getProductById";
import formatePrice from "@/helpers/formatePrice";

export default async function page({ params }) {
  const param = await params;
  const product = await getProductBySlug(param?.slug);
  const price = formatePrice(product?.price, product?.discount);
  return (
    <AnimationContainer>
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
        <CustomerReview />

        <AlsoLikes category={product?.category} />
      </div>
    </AnimationContainer>
  );
}
