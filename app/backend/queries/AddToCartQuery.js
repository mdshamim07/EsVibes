import formatePrice from "@/helpers/formatePrice";
import { cartModel } from "../models/CartModel";
import { ProductModel } from "../models/ProductModel";
import { dbConnect } from "../connection/dbConnect";
import { auth } from "@/auth";

export default async function AddToCartQuery(productId, quantity) {
  const loggedAuth = await auth();
  const userId = loggedAuth?.user?.id;
  try {
    await dbConnect();
    const createCart = await cartModel.find({ productId: productId });
    if (createCart.length > 0) {
      return {
        ok: false,
        message: "Your Product Already in your cart!",
      };
    } else {
      const getProductInfo = ProductModel.findById(productId).select("price");
      const originalPrice = formatePrice(
        getProductInfo?.price,
        getProductInfo?.discount
      );
      const newCartItem = {
        productId,
        userId,
        quantity,
        price: originalPrice,
      };
      const response = await cartModel.create(newCartItem);
      if (response) {
        return {
          ok: true,
          message: "Successfully add cart item",
        };
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}
