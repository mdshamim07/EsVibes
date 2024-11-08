import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../connection/dbConnect";
import { ProductModel } from "../models/ProductModel";

export default async function getProductBySlug(productSlug) {
  try {
    await dbConnect();

    const response = await ProductModel.find({ slug: productSlug });
    const convert = formateMongo(response[0]);
    return convert;
  } catch (err) {
    throw new Error(err);
  }
}
