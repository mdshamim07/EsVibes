import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { UserModel } from "./app/backend/models/UserModel";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          const user = await UserModel.findOne({ phone: credentials?.phone });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              return user;
            } else {
              return {
                error: "password-error",
                message: "Invalid password",
              };
            }
          } else {
            return {
              error: "phone-error",
              message: "Invalid phone number!",
            };
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});
