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
  // Authenticate the user and get their ID
  const loggedAuth = await auth();
  const userId = loggedAuth?.user?.id;

  if (!userId) {
    return {
      ok: false,
      message: "User not authenticated.",
    };
  }

  try {
    // Connect to the database
    await dbConnect();

    // Check if the product already exists in the user's cart
    const existingCartItem = await cartModel.findOne({
      productId: productId,
      userId: userId, // Only check for this specific user's cart
    });

    if (existingCartItem) {
      // If found, return an error message specific to this user
      return {
        ok: false,
        message: "Sorry, this item is already in your cart.",
      };
    }

    // Fetch product information for price and discount
    const getProductInfo = await ProductModel.findById(productId).select([
      "price",
      "discount",
    ]);

    if (!getProductInfo) {
      return {
        ok: false,
        message: "Product not found.",
      };
    }

    // Format and clean up the price
    const originalPrice = formatePrice(
      getProductInfo.price,
      getProductInfo.discount
    );
    const cleanedStr = originalPrice.replace("BDT", "").trim();
    const getPrice = parseFloat(cleanedStr);

    // Create a new cart item for this user
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
    } else {
      return {
        ok: false,
        message: "Failed to add item to the cart.",
      };
    }
  } catch (err) {
    console.error("Error adding to cart:", err);
    return {
      ok: false,
      message: "An error occurred while adding to the cart.",
    };
  }
}
