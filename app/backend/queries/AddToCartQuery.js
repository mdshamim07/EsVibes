import formatePrice from "@/helpers/formatePrice";
import { cartModel } from "../models/CartModel";
import { ProductModel } from "../models/ProductModel";
import { dbConnect } from "../connection/dbConnect";
import { auth } from "@/auth";

export default async function AddToCartQuery(
  productId,
  quantity,
  userActiveSize
) {
  const loggedAuth = await auth();
  const userId = loggedAuth?.user?.id;
  try {
    await dbConnect();
    const createCart = await cartModel.find({ productId: productId });
    if (createCart.length > 0) {
      return {
        ok: false,
        message: "Sorry, This item is already added to your cart.",
      };
    } else {
      const getProductInfo = await ProductModel.findById(productId).select([
        "price",
        "discount",
      ]);
      const originalPrice = formatePrice(
        getProductInfo?.price,
        getProductInfo?.discount
      );

      let cleanedStr = originalPrice.replace("BDT", "").trim();

      // Convert the remaining part to a number
      let getPrice = parseFloat(cleanedStr);

      const newCartItem = {
        productId,
        userId,
        quantity,
        size: userActiveSize,
        price: getPrice,
      };
      const response = await cartModel.create(newCartItem);
      if (response) {
        return {
          ok: true,
          message: "Item successfully added to the cart.",
        };
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}
