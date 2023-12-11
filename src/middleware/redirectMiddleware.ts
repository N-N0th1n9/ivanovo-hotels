// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
//
// export function redirectMiddleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/subdomain')) {
//     const redirectUrl = new URL('https://domain.sub.com');
//     return NextResponse.redirect(redirectUrl);
//   }
//
//   return null;
// }