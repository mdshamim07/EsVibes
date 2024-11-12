import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, ROOT } from "@/routes";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  // Redirect to home page if the user is logged in and tries to access the login page
  if (isAuthenticated && nextUrl.pathname === LOGIN) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }

  // Redirect to login page if not authenticated and trying to access a protected route
  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
