import HeroContent from "./_components/HeroContent";
import HeroImage from "./_components/HeroImage";
import EventQuery from "./backend/queries/EventQuery";
import AnimationContainer from "./components/AnimationContainer";
import ProductsSection from "./sections/ProductsSection";

export default async function HomePage() {
  const events = await EventQuery();
  const event = events?.product;

  return (
    <AnimationContainer>
      <section className="flex justify-between flex-col md:flex-row items-center gap-4 py-[50px]">
        <HeroContent
          originalPrice={event?.price}
          discount={event?.discount}
          title={event?.title}
          slug={event?.slug}
          ability={event?.ability}
          id={event?._id}
          stock={event?.stock}
        />
        <HeroImage
          slug={event?.slug}
          title={event?.title}
          thumbnail={event?.thumbnail}
        />
      </section>
      <main>
        <ProductsSection />
      </main>
    </AnimationContainer>
  );
}
