import { dbConnect } from "../connection/dbConnect";
import { orderModel } from "../models/orderModel";

export default async function addPaymentQuery(orderId, transactionId) {
  await dbConnect();
  console.log(orderId);
  const response = await orderModel.updateOne(
    { _id: orderId?.orderId },
    { paymentTransactionId: transactionId, paymentStatus: "onReview" }
  );
  if (response) {
    return {
      ok: true,
      message: "successfully updated payment!",
    };
  }
}
