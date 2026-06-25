import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // 1. Sahi naam se cookie nikalein (admin_token)
  const token = request.cookies.get('admin_token'); 

  // 2. Agar user kisi bhi /admin waale page par ja raha hai
  if (path.startsWith('/admin')) {
    
    // Agar user login ya signup page par ja raha hai
    if (path === '/admin/login' || path === '/admin/signup') {
      // Agar token PEHLE SE HAI, toh use login page mat dikhao, seedha dashboard bhej do
      if (token) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
      // Agar token nahi hai, toh use login page dekhne do
      return NextResponse.next();
    }

    // Baki saare admin pages (jaise dashboard, etc.) ke liye agar token nahi hai, toh login par bhagao
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Ab yeh matcher /admin ke andar ke saare sub-routes (paths) ko monitor karega
export const config = {
  matcher: '/admin/:path*',
};