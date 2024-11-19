import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../connection/dbConnect";
import { ProductModel } from "../models/ProductModel";
export async function getAllProducts(search = "", sort = "A-Z") {
  try {
    await dbConnect();

    // Build query for search
    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    // Build sorting logic
    const sortOrder =
      sort === "A-Z" ? { title: 1 } : sort === "Z-A" ? { title: -1 } : {};

    const response = await ProductModel.find(query)
      .select({
        title: 1,
        price: 1,
        discount: 1,
        thumbnail: 1,
        description: 1,
        _id: 1,
        slug: 1,
        stock: 1,
      })
      .sort(sortOrder);

    return formateMongo(response);
  } catch (err) {
    throw new Error("Something went wrong while fetching products");
  }
}
