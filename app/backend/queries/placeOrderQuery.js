import { minusDiscount } from "@/app/(pages)/cart/page";
import { auth } from "@/auth";
import generateNumber from "@/helpers/generateNumber";
import { ProductModel } from "../models/ProductModel";
import applyDiscount from "@/helpers/applyDiscount";
import { orderModel } from "../models/orderModel";
import { cartModel } from "../models/CartModel"; // Assuming CartModel is imported here
import formateMongo from "@/helpers/formateMongo";

export default async function placeOrderQuery(formData, carts) {
  try {
    const loggedAuth = await auth();

    // Calculate the total price of the order with discount applied
    let totalPrice = carts.reduce((total, item) => {
      return (
        total +
        minusDiscount(item?.productId?.price, item?.productId?.discount) *
          item.quantity
      );
    }, 0);

    // Prepare the order items with prices and quantities
    const items = await Promise.all(
      carts.map(async (cartItem) => {
        // Fetch product details using the product ID from the cart item
        const product = await ProductModel.findById(cartItem?.productId?._id);
        const price = applyDiscount(product?.price, product?.discount);
        return {
          quantity: cartItem?.quantity,
          size: cartItem?.size,
          product: cartItem?.productId?._id,
          price: price || 0, // Ensure price is returned even if product is not found
        };
      })
    );

    // Prepare the shipping address from form data
    const address = {
      name: formData?.name.trim(),
      address: formData?.address?.trim(),
      city: formData?.city.trim(),
      district: formData?.district.trim(),
      phone: formData?.Phone.trim(),
      postalCode: formData?.postalCode?.trim(),
    };

    // Prepare the new order data
    const newOrder = {
      items,
      address,
      payment: formData?.paymentMethod,
      discount: 0,
      user: loggedAuth?.user?.id,
      transactionId: generateNumber(),
      totalPrice,
    };

    // Create the order
    const response = await orderModel.create(newOrder);

    // If order is successful, update stock and remove items from cart
    if (response) {
      // Update product stock by reducing the quantity
      await Promise.all(
        carts.map(async (cartItem) => {
          const product = await ProductModel.findById(cartItem?.productId?._id);
          if (product) {
            product.stock -= cartItem?.quantity; // Reduce stock
            await product.save();
          }
        })
      );

      // Remove items from the user's cart
      await cartModel.deleteMany({ userId: loggedAuth?.user?.id });

      // Return success response
      return { ok: true, orderId: formateMongo(response?._id) };
    }

    // In case of an error, return failure response
    return { ok: false, message: "Order placement failed" };
  } catch (err) {
    throw new Error(err);
  }
}
