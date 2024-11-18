import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../connection/dbConnect";
import { ProductModel } from "../models/ProductModel";

export async function getAllProducts() {
  try {
    await dbConnect();
    const response = await ProductModel.find({}).select({
      title: 1,
      price: 1,
      discount: 1,
      thumbnail: 1,
      description: 1,
      _id: 1,
      slug: 1,

      stock: 1,
    });
    const result = formateMongo(response);
    return result;
  } catch (err) {
    throw new Error("Something went wrong while fetching products");
  }
}
