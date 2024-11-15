import { auth } from "@/auth";
import { dbConnect } from "../connection/dbConnect";
import { orderModel } from "../models/orderModel";

export default async function placeOrderQuery(params) {
  await dbConnect();
  const loggedAuth = await auth();
  const updatedObject = {
    ...params,
    user: loggedAuth?.user?.id,
  };

  const response = await orderModel.create(updatedObject);
  console.log(response);
}
