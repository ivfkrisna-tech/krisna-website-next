import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

    // Blob upload
    const blob = await put(file.name, file, {
      access: 'public',
      
    });

    return NextResponse.json({ success: true, filename: blob.url });

  } catch (error) {
    
    console.error("Upload error details:", error);
    return NextResponse.json({ 
        success: false, 
        message: error.message || 'Unknown error' 
    }, { status: 500 });
  }
}