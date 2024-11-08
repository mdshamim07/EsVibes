import { auth } from "@/auth";
import { dbConnect } from "../connection/dbConnect";
import { UserModel } from "./UserModel";

export default async function updateUserInfo(userId, userInfo) {
  await dbConnect();

  const response = await UserModel.updateOne(
    { _id: userId },
    {
      name: userInfo?.name.trim(),
      phone: userInfo?.phone.trim(),
    }
  );
  if (response) {
    return {
      ok: true,
      message: "Successfully updated your personal information!",
    };
  } else {
    return {
      ok: false,
      message: "Something went wrong while updating your information",
    };
  }
}
