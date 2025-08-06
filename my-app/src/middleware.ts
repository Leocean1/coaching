import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Define protected routes and their allowed roles
const protectedRoutes = {
  '/admin': ['admin'],
  '/teacher': ['teacher'],
  '/student': ['student'],
  '/api/admin': ['admin'],
  '/api/teacher': ['teacher', 'admin'],
  '/api/student': ['student', 'teacher', 'admin'],
};

// Verify the JWT token
async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;

  // ✅ If visiting /login and token is valid, redirect to dashboard
  if (path === '/login' && token) {
    const payload = await verifyToken(token);
    if (payload?.role) {
      let redirectPath = '/';

      if (payload.role === 'admin') redirectPath = '/admin/home';
      else if (payload.role === 'teacher') redirectPath = '/teacher/home';
      else if (payload.role === 'student') redirectPath = '/student/home';

      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  // ✅ Check if the current path is protected
  const isProtectedRoute = Object.keys(protectedRoutes).some(route =>
    path.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next(); // Allow public route
  }

  // ✅ If no token, redirect to login
  if (!token) {
    return redirectToLogin(request);
  }

  // ✅ Verify token
  const payload = await verifyToken(token);
  if (!payload || !payload.role) {
    return redirectToLogin(request);
  }

  // ✅ Check if user's role is allowed on this path
  const hasPermission = Object.entries(protectedRoutes).some(
    ([route, allowedRoles]) => {
      if (path.startsWith(route)) {
        return allowedRoles.includes(payload.role as string);
      }
      return false;
    }
  );

  if (!hasPermission) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next(); // ✅ All good
}

// Helper to redirect to /login
function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/login', request.url);
  return NextResponse.redirect(loginUrl);
}

// ✅ Run this middleware on these routes
export const config = {
  matcher: [
    '/admin/:path*',
    '/teacher/:path*',
    '/student/:path*',
    '/api/admin/:path*',
    '/api/teacher/:path*',
    '/api/student/:path*',
    '/login',
  ],
};
