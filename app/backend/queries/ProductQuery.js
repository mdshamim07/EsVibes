import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../connection/dbConnect";
import { ProductModel } from "../models/ProductModel";

export async function ProductQuery() {
  try {
    await dbConnect();
    const response = await ProductModel.find({});
    const result = formateMongo(response);
    return result;
  } catch (err) {
    throw new Error("Something went wrong while fetching products");
  }
}
