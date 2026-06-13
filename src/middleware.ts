import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(en|ar|ur)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};