import { auth } from "@/auth";
import { dbConnect } from "../connection/dbConnect";
import { orderModel } from "../models/orderModel";
import { cartModel } from "../models/CartModel";
import { ProductModel } from "../models/ProductModel";

export default async function placeOrderQuery(params, cartIds) {
  try {
    // Connect to the database
    await dbConnect();

    // Authenticate the user
    const loggedAuth = await auth();
    if (!loggedAuth?.user?.id) {
      throw new Error("User not authenticated.");
    }

    // Process items to include price
    const itemsWithPrice = await Promise.all(
      params.items.map(async (item) => {
        const product = await ProductModel.findById(item.product).select(
          "price"
        );
        if (!product) {
          throw new Error(`Product with ID ${item.product} not found.`);
        }
        return {
          ...item,
          price: product.price, // Add the price to the item
        };
      })
    );
  

    // Update the params object with the processed items
    const updatedObject = {
      ...params,
      items: itemsWithPrice,
      user: loggedAuth?.user?.id,
    };
   

    // Create the order
    const response = await orderModel.create(updatedObject);

    // If the order is successfully created, delete cart items
    if (response) {
      const deleteQuery = await cartModel.deleteMany({ _id: { $in: cartIds } });
      if (deleteQuery.deletedCount === cartIds.length) {
        return {
          ok: true,
          message: "Successfully placed order!",
        };
      } else {
        throw new Error("Some cart items could not be deleted.");
      }
    } else {
      throw new Error("Failed to create order.");
    }
  } catch (err) {
    console.error("Error in placeOrderQuery:", err.message || err);
    throw new Error(
      err.message || "An error occurred while placing the order."
    );
  }
}
