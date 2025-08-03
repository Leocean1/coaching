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

// Function to verify JWT token
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

  // Check if the path is in protectedRoutes
  const isProtectedRoute = Object.keys(protectedRoutes).some(route => 
    path.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return redirectToLogin(request);
  }

  const payload = await verifyToken(token);
  if (!payload || !payload.role) {
    return redirectToLogin(request);
  }

  // Check if user role has permission for this route
  const hasPermission = Object.entries(protectedRoutes).some(([route, allowedRoles]) => {
    if (path.startsWith(route)) {
      return allowedRoles.includes(payload.role as string);
    }
    return false;
  });

  if (!hasPermission) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return NextResponse.next();
}

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/login', request.url);
  return NextResponse.redirect(loginUrl);
}

// Configure which routes should be handled by this middleware
export const config = {
  matcher: [
    '/admin/:path*',
    '/teacher/:path*',
    '/student/:path*',
    '/api/admin/:path*',
    '/api/teacher/:path*',
    '/api/student/:path*',
  ],
};
