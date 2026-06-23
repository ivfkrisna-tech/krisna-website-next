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
    try {
        const { type, id } = await params;
        await connectDB();
        
        const Model = getModel(type);
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 404 });

        const item = await Model.findById(id);
        if (!item) return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        
        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { type, id } = await params;
        await connectDB();
        const body = await req.json();
        
        const Model = getModel(type);
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 404 });

        const updatedItem = await Model.findByIdAndUpdate(id, body, { new: true });
        
        if (!updatedItem) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        
        return NextResponse.json(updatedItem);
    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { type, id } = await params;
        await connectDB();
        
        const Model = getModel(type);
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 404 });

        const deletedItem = await Model.findByIdAndDelete(id);
        if (!deletedItem) return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        
        return NextResponse.json({ message: "Item deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: 'Deletion failed' }, { status: 500 });
    }
}