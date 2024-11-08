import mongoose, { Schema, Types } from "mongoose";
const AbilitySchema = new Schema({
  _id: {
    type: Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  title: { type: String, required: true },
});

const productSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  discount: {
    required: true,
    type: Number,
  },
  ability: {
    required: true,
    type: [AbilitySchema],
  },
  user: {
    ref: "users",
    type: Schema.ObjectId,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  gallery: {
    required: true,
    type: [String],
  },
  stock: {
    required: true,
    type: Number,
  },
  category: {
    required: true,
    type: [String],
  },
});
export const ProductModel =
  mongoose.models.products ?? mongoose.model("products", productSchema);
