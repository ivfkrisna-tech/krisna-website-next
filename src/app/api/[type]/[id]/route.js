import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';

const getModel = (type) => { /* ... same as above ... */ };

export async function GET(req, { params }) {
    const { type, id } = await params;
    await connectDB();
    const item = await getModel(type).findById(id);
    return NextResponse.json(item);
}

export async function DELETE(req, { params }) {
    const { type, id } = await params;
    await connectDB();
    await getModel(type).findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" });
}