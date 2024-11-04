import HeroContent from "./_components/HeroContent";
import HeroImage from "./_components/HeroImage";
import AnimationContainer from "./components/AnimationContainer";
import ProductsSection from "./sections/ProductsSection";

export default function HomePage() {
  return (
    <AnimationContainer>
      <section className="flex justify-between flex-col md:flex-row items-center gap-4 py-[50px]">
        <HeroContent />
        <HeroImage />
      </section>
      <main>
        <ProductsSection />
      </main>
    </AnimationContainer>
  );
}
