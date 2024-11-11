import mongoose, { Schema } from "mongoose";
const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
export const cartModel = mongoose.models.carts ?? mongoose.model("carts", cartSchema);
