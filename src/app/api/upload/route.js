import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image'); 

    if (!file) {
      return NextResponse.json({ success: false, message: 'File nahi mili' }, { status: 400 });
    }

    
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");

    
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await writeFile(path.join(uploadDir, filename), buffer);

   
    return NextResponse.json({ success: true, filename: filename });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}