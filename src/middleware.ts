import createMiddleware from 'next-intl/middleware';
import {routing} from './navigation';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the locale of the user
    '/(ar|en|ur)/:path*',

    // Enable redirects for pathnames without a locale
    // (e.g. /about -> /en/about)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
