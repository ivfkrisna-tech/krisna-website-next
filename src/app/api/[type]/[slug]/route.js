import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';
import mongoose from 'mongoose';

const getModel = (type) => {
    const models = { 'blogs': Blog, 'faqs': FAQ, 'success_stories': Story };
    return models[type] || null;
};

// Helper: Check agar input ID hai ya Slug
const findByAny = async (Model, identifier) => {
    if (mongoose.Types.ObjectId.isValid(identifier)) {
        return await Model.findById(identifier);
    }
    return await Model.findOne({ slug: identifier });
};

export async function GET(req, { params }) {
    try {
        const { type, slug } = await params;
        await connectDB();
        const Model = getModel(type);
        if (!Model) return NextResponse.json({ error: 'Invalid' }, { status: 404 });

        const item = await findByAny(Model, slug);
        if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        
        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json({ error: 'Error' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { type, slug } = await params;
        await connectDB();
        const body = await req.json();
        const Model = getModel(type);
        
        const query = mongoose.Types.ObjectId.isValid(slug) ? { _id: slug } : { slug: slug };
        const updatedItem = await Model.findOneAndUpdate(query, body, { new: true });
        
        return updatedItem ? NextResponse.json(updatedItem) : NextResponse.json({ error: 'Not found' }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

// DELETE aur PUT mein bhi same logic use karein
export async function DELETE(req, { params }) {
    try {
        const { type, slug } = await params;
        await connectDB();
        const Model = getModel(type);
        
        const query = mongoose.Types.ObjectId.isValid(slug) ? { _id: slug } : { slug: slug };
        const deletedItem = await Model.findOneAndDelete(query);
        
        return deletedItem ? NextResponse.json({ message: "Deleted" }) : NextResponse.json({ error: 'Not found' }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}