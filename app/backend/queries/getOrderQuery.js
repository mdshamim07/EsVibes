import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../connection/dbConnect";
import { orderModel } from "../models/orderModel";

export default async function getOrderQuery(orderId) {
  try {
    await dbConnect();
    const response = await orderModel
      .findById(orderId)
      .select(["payment", "address.phone", "totalPrice", "paymentStatus"]);
    return formateMongo(response);
  } catch (err) {
    throw new Error(err);
  }
}
