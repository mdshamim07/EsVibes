import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, ROOT } from "@/routes";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth; // Check if the user is authenticated
  const currentPath = nextUrl.pathname;

  // Check if the current route is public
  const isPublicRoute =
    PUBLIC_ROUTES.some((route) => currentPath.startsWith(route)) ||
    currentPath === ROOT;

  // Redirect authenticated users from login or register pages to the home page
  if (
    isAuthenticated &&
    (currentPath === LOGIN || PUBLIC_ROUTES.includes(currentPath))
  ) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }

  // Redirect unauthenticated users from protected routes to the login page
  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
