import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Define protected routes and their allowed roles
const protectedRoutes = [
  { path: '/admin', roles: ['admin'] },
  { path: '/teacher', roles: ['teacher', 'admin'] },
  { path: '/student', roles: ['student', 'admin', 'teacher'] },
];

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const route = protectedRoutes.find(r => pathname.startsWith(r.path));
  if (!route) return NextResponse.next(); // Not a protected route

  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!route.roles.includes(decoded.role)) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/admin', '/teacher', '/student'],
};
