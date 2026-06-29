import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

   
    console.log("File received:", file.name, file.size);

    
    const fileName = `${Date.now()}-${file.name}`;

    const blob = await put(fileName, file, {
      access: 'public',
    });

    return NextResponse.json({ success: true, filename: blob.url });

  } catch (error) {
    
    console.error("Detailed Upload Error:", error);
    
    return NextResponse.json({ 
        success: false, 
        message: 'Upload failed: ' + error.message 
    }, { status: 500 });
  }
}