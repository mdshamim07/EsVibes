import AnimationContainer from "@/app/components/AnimationContainer";
import AlsoLikes from "./_components/AlsoLikes";
import CustomerReview from "./_components/CustomerReview";
import ProductContent from "./_components/ProductContent";
import ProductImage from "./_components/ProductImage";

export default function page() {
  return (
    <AnimationContainer>
      <div className="pb-[50px]">
        <section className="flex justify-between flex-col md:flex-row gap-4 py-[50px]">
          <ProductImage />
          <ProductContent />
        </section>
        <CustomerReview />

        <AlsoLikes />
      </div>
    </AnimationContainer>
  );
}
