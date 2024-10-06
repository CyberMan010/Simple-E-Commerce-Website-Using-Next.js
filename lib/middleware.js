import { NextResponse } from 'next/server';
import { verifyToken } from '../utils/jwt';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/'];

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  
  
  // Redirect logged-in users away from login/signup pages
  if ((pathname === '/login' || pathname === '/signup') && token && verifyToken(token)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/','/login','/signup'],
};