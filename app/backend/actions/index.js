"use server";
import bcrypt from "bcrypt";
import { CreateUserQuery } from "../queries/CreateUserQuery";
import { signIn } from "@/auth";

export async function createUserAction(userObject) {
  try {
    const { fName, phone, password } = userObject;
    const trimmedName = fName.trim();
    const trimmedPhone = phone.trim();
    if (fName.length === 0) {
      return {
        error: "name-error",
        message: "Please provide your name",
      };
    } else if (phone.length === 0) {
      return {
        error: "phone-error",
        message: "Please provide your phone number",
      };
    } else if (password.length < 6) {
      return {
        error: "password-error",
        message: "Please provide your password",
      };
    } else if (typeof Number(phone) === "string") {
      return {
        error: "phone-error",
        message: "Please provide only number",
      };
    }
    const hashedPassword = await bcrypt.hash(password.trim(), 8);
    const newUser = {
      name: trimmedName,
      phone: trimmedPhone,
      password: hashedPassword,
      role: "user",
    };
    const response = await CreateUserQuery(newUser);
    if (response?.ok) {
      // Automatically log the user in upon successful registration
      const loginResponse = await ceredntialLogin({
        phone: trimmedPhone,
        password,
      });
      if (loginResponse?.ok) {
        return {
          ok: true,
          message: "User registered and logged in successfully!",
        };
      } else {
        return {
          error: "login-error",
          message: "User registered but login failed.",
        };
      }
    } else {
      return response; // Pass along any registration error
    }
  } catch (err) {
    throw new Error(err);
  }
}
export async function ceredntialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      phone: formData.phone,
      password: formData.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
