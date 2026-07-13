import connectDB from '@/lib/mongodb';
import { Story } from '@/models/Data';
import { localStories } from '@/data/stories';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    let count = 0;
    
    for (const story of localStories) {
      let baseSlug = story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      let slug = baseSlug;
      
      const existing = await Story.findOne({ slug });
      if (!existing) {
        await Story.create({
          title: story.title || '',
          content: story.content || '',
          slug: slug,
          author: story.author || ''
        });
        count++;
      }
    }
    
    return NextResponse.json({ success: true, message: `Migrated ${count} stories.` });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
