import { NextResponse } from 'next/server';
import { put } from '@vercel/blob'; // 🔥 Local file ki jagah seedhe Cloud storage use karein

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

    // 1. 🔥 Yeh file ko seedhe cloud par bhej dega (Vercel par 500 error aana band)
    const blob = await put(file.name, file, {
      access: 'public',
    });

    // 2. Response mein hum local name ki jagah live URL (blob.url) bhej rahe hain
    // Aapka frontend automatic is URL ko 'finalFileUrl' banakar database mein bhej dega!
    return NextResponse.json({ success: true, filename: blob.url });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}