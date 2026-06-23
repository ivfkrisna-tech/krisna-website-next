// src/app/api/all-data/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';

export async function GET() {
    try {
        await connectDB();
        
        // Count fetch karna (Efficient way)
        const blogCount = await Blog.countDocuments();
        const faqCount = await FAQ.countDocuments();
        const storyCount = await Story.countDocuments();

        return NextResponse.json({
            blogs: { length: blogCount },
            faqs: { length: faqCount },
            stories: { length: storyCount }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}