import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Please provide email and password' }, { status: 400 });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // 1. Token Generate Karein
    const secret = process.env.JWT_SECRET || 'fallback_secret_for_dev_only';
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      secret,
      { expiresIn: '1d' }
    );

    // 2. Response Object Banayein
    const response = NextResponse.json(
      { success: true, token, message: 'Logged in successfully' }, 
      { status: 200 }
    );

    // 3. 🔥 Cookie Set Karein (Yeh line missing thi!)
    response.cookies.set('admin_token', token, {
      httpOnly: true,                                // Security ke liye taaki frontend JS ise read na kar sake
      secure: process.env.NODE_ENV === 'production', // Vercel (HTTPS) par automatically true ho jayega
      sameSite: 'lax',                               // Redirects ke sath ache se kaam karta hai
      path: '/',                                     // Poori website par cookie accessible rahegi
      maxAge: 60 * 60 * 24,                          // 1 din tak valid rahegi
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}