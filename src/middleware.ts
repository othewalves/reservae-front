import { NextResponse, type MiddlewareConfig, type NextRequest } from 'next/server'

const PUBLIC_ROUTES = [
    { path: '/sign-in', whenAuthenticate: 'redirect' },
    { path: '/sign-up', whenAuthenticate: 'redirect' },
    { path: '/home', whenAuthenticate: 'next' },
]

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/home';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const public_route = PUBLIC_ROUTES.find((route) => path === route.path);
    const authToken = request.cookies.get('@reservae:token');

    if (!authToken && public_route) {
        return NextResponse.next()
    }

    if (!authToken && !public_route) {
        const redirectUrl = request.nextUrl.clone();

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

        return NextResponse.redirect(redirectUrl);
    };

    if (authToken && public_route && public_route.whenAuthenticate === 'redirect') {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = '/home';
        return NextResponse.redirect(redirectUrl);
    }

    if (authToken && !public_route) {
        return NextResponse.next();
    };

    return NextResponse.next();


}
export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}