import { auth } from "@/auth";
import { dbConnect } from "../connection/dbConnect";
import { orderModel } from "../models/orderModel";
import { cartModel } from "../models/CartModel";

export default async function placeOrderQuery(params, cartIds) {
  try {
    await dbConnect();
    const loggedAuth = await auth();
    const updatedObject = {
      ...params,
      user: loggedAuth?.user?.id,
    };

    const response = await orderModel.create(updatedObject);
    if (response) {
      const deleteQuery = await cartModel.deleteMany({ _id: { $in: cartIds } });
      if (deleteQuery) {
        return {
          ok: true,
          message: "Successfully placed order !",
        };
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}
