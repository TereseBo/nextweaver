import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes:  ['/api/:path*', '/weaver/draft/:path*'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],

/*     afterAuth(auth, req, evt){
        return NextResponse.next();
    } */
/*     afterAuth(auth, req, evt) {
      // Handle users who aren't authenticated
      if (!auth.userId && !auth.isPublicRoute) {
        return redirectToSignIn({ returnBackUrl: req.url });
      }
      // Redirect logged in users to organization selection page if they are not active in an organization
      if (
        auth.userId &&
        !auth.orgId &&
        req.nextUrl.pathname !== "/org-selection"
      ) {
        const orgSelection = new URL("/org-selection", req.url);
        return NextResponse.redirect(orgSelection);
      }
      // If the user is logged in and trying to access a protected route, allow them to access route
      if (auth.userId && !auth.isPublicRoute) {
        return NextResponse.next();
      }
      // Allow users visiting public routes to access them
      return NextResponse.next();
    }, */

});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};