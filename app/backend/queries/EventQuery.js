import formateMongo from "@/helpers/formateMongo";
import { EventsModel } from "../models/EventsModel";
import { ProductModel } from "../models/ProductModel";

export default async function EventQuery() {
  try {
    const response = await EventsModel.find({}).populate({
      path: "product",
      model: ProductModel,
      select: ["title", "price", "discount", "ability", "thumbnail", "slug"],
    });
    return formateMongo(response[0]);
  } catch (err) {
    throw new Error(err.message);
  }
}
