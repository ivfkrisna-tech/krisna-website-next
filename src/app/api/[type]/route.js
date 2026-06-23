import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';

const getModel = (type) => {
    const models = {
        'blogs': Blog,
        'faqs': FAQ,
        'success_stories': Story
    };
    return models[type] || null;
};

export async function GET(req, { params }) {
    try {
    
        const { type } = await params;
        
        
        await connectDB();
        
        
        const Model = getModel(type);
        if (!Model) {
            return NextResponse.json({ error: 'Invalid collection type' }, { status: 404 });
        }

        // 3. Data fetch karein
        const data = await Model.find({}).sort({ createdAt: -1 }).lean(); // .lean() performance fast karta hai
        
        return NextResponse.json(data);
    } catch (error) {
        console.error("API DATABASE ERROR:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}