import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';

const getModel = (type) => {
    if (type === 'blogs') return Blog;
    if (type === 'faqs') return FAQ;
    if (type === 'success_stories') return Story;
    return null;
};

export async function GET(req, { params }) {
    await connectDB();
    const { type } = await params;
    const Model = getModel(type);
    const data = await Model.find().sort({ createdAt: -1 });
    return NextResponse.json(data);
}

export async function POST(req, { params }) {
    await connectDB();
    const { type } = await params;
    const body = await req.json();
    const Model = getModel(type);
    const item = await Model.create(body);
    return NextResponse.json(item);
}