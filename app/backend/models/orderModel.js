import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: { type: Number, required: true },
        size: {
          type: String,
          required: true,
        },
      },
    ],
    address: {
      type: Object,
      required: true,
    },
    payment: { type: String, required: true },
    discount: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  },
  { timestamps: true }
);

export const orderModel =
  mongoose.models.orders ?? mongoose.model("orders", orderSchema);
