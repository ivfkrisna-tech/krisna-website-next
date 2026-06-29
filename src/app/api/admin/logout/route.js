import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Response object banayein
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' }, { status: 200 });
    
    // Cookie ko delete karne ke liye expires setting ko purani date par set kar dein
    response.cookies.set('admin_token', '', {
      httpOnly: true,
      expires: new Date(0), 
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Logout error' }, { status: 500 });
  }
}