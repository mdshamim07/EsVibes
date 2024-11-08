import { getAllProducts } from "../backend/queries/ProductQuery";
import PageTitle from "../components/PageTitle";
import ProductItem from "../components/ProductItem";

export default async function ProductsSection() {
  const products = await getAllProducts();
  return (
    <section className="min-h-screen py-[50px]">
      <PageTitle
        title="Our Products"
        subTitle="Check out our latest products"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {products.length > 0 && products
          ? products.map((product) => (
              <ProductItem
                thumbnail={product?.thumbnail}
                title={product?.title}
                description={product?.description}
                price={product?.price}
                discount={product?.discount}
                key={product?._id}
                slug={product?.slug}
              />
            ))
          : "No Products Found!"}
      </div>
    </section>
  );
}
