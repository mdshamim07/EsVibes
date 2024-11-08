import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserModel } from "./app/backend/models/UserModel";
import { dbConnect } from "./app/backend/connection/dbConnect";
import bcrypt from "bcrypt";

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
      credentials: {
        phone: { label: "Phone", type: "number" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        await dbConnect();

        try {
          const user = await UserModel.findOne({ phone: credentials.phone });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              return {
                id: user._id,
                phone: user.phone,
                name: user.name,
                role: user.role,
              };
            } else {
              throw new Error("Incorrect Password");
            }
          } else {
            throw new Error("User not found.");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = user.phone;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { id: token.id, phone: token.phone, name: token.name };
      }
      return session;
    },
  },
});
