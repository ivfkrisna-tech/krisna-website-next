import { NextResponse } from 'next/server';
import { put } from '@vercel/blob'; // 🔥 local fs ki jagah ab yeh cloud use hoga

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

    // 🔥 File ko seedhe Vercel Blob cloud par bhejenge (Vercel par 500 error aana band)
    const blob = await put(file.name, file, {
      access: 'public',
    });

    // Response mein vahi 'filename' key bhejenge jo aapka frontend mangta hai, bas ab usme live URL hoga
    return NextResponse.json({ success: true, filename: blob.url });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}