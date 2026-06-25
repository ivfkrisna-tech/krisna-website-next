import { NextResponse } from 'next/server';
import { put } from '@vercel/blob'; // 🔥 fs ki jagah ab yeh use hoga

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

    // 1. 🔥 Seedhe Vercel Blob Cloud par upload karein
    const blob = await put(file.name, file, {
      access: 'public',
    });

    // 2. Response mein ab local filename ki jagah live image URL (`blob.url`) bhejenge
    // Isse aapke database mein image ka live link save ho jayega jo har jagah dikhega
    return NextResponse.json({ success: true, filename: blob.url });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}