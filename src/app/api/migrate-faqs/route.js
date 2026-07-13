import connectDB from '@/lib/mongodb';
import { FAQ } from '@/models/Data';
import { localFaqs } from '@/data/faqs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    let count = 0;
    
    for (const faq of localFaqs) {
      // Create a slug from the title since FAQs might not have one in local data
      let baseSlug = faq.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      let slug = baseSlug;
      
      const existing = await FAQ.findOne({ slug });
      if (!existing) {
        await FAQ.create({
          title: faq.title || '',
          content: faq.content || '',
          slug: slug,
          category: faq.category || ''
        });
        count++;
      }
    }
    
    return NextResponse.json({ success: true, message: `Migrated ${count} FAQs.` });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
