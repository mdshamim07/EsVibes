import PageTitle from "../components/PageTitle";
import ProductItem from "../components/ProductItem";

export default function ProductsSection() {
  return (
    <section className="min-h-screen py-[50px]">
      <PageTitle
        title="Our Products"
        subTitle="Check out our latest products"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <ProductItem />
      </div>
    </section>
  );
}
