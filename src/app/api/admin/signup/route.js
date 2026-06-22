import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();
    
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Please provide all fields' }, { status: 400 });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json({ message: 'Admin already exists with this email' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    return NextResponse.json({ success: true, message: 'Admin created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
