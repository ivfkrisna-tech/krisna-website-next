import connectDB from '@/lib/mongodb';
import { Blog } from '@/models/Data';
import { blogs as localBlogs } from '@/data/blogs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    let count = 0;
    
    for (const blog of localBlogs) {
      // Check if it already exists
      const existing = await Blog.findOne({ slug: blog.slug });
      if (!existing) {
        // Create new
        await Blog.create({
          title: blog.title || '',
          content: blog.content || '',
          slug: blog.slug,
          fileUrl: blog.image ? blog.image : '',
          // If we want it to map to our new image paths in public/img/blogs, we can just save it EXACTLY as it is in blogs.js (which is '/img/blogs/image.png'). 
          // Since it starts with '/', the BlogCard ternary will just use it directly!
          // So let's keep it exactly as it is in blog.image.
        });
        count++;
      } else {
        // Just in case it exists, we could update it? The prompt implies they aren't there. 
        // We will just skip.
      }
    }
    
    return NextResponse.json({ success: true, message: `Migrated ${count} blogs.` });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
