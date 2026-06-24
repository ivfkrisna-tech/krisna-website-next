import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog, FAQ, Story } from '@/models/Data';
import mongoose from 'mongoose';

const getModel = (type) => {
    
    const models = { 'blogs': Blog, 'faqs': FAQ, 'success_stories': Story };
    return models[type] || null;
};

export async function GET(req, { params }) {
    try {
        const { type } = await params;
        await connectDB();
        const Model = getModel(type); // getModel function check karein
        
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 404 });

        const items = await Model.find({}).sort({ createdAt: -1 }); // Yahan se data fetch ho raha hai
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: 'Database fetch failed' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { type, slug } = await params;
        await connectDB();
        const body = await req.json();
        const Model = getModel(type);
        
        if (!Model) return NextResponse.json({ error: 'Invalid type' }, { status: 404 });

        const query = mongoose.Types.ObjectId.isValid(slug) ? { _id: slug } : { slug: slug };
        
        // Saare fields jo dashboard se aa rahe hain unhein update karein
        const updatedItem = await Model.findOneAndUpdate(query, { $set: body }, { new: true });
        
        return updatedItem 
            ? NextResponse.json(updatedItem) 
            : NextResponse.json({ error: 'Not found' }, { status: 404 });
    } catch (error) {
        console.error("PUT Error:", error);
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { type, slug } = await params;
        await connectDB();
        const Model = getModel(type);
        
        const query = mongoose.Types.ObjectId.isValid(slug) ? { _id: slug } : { slug: slug };
        const deletedItem = await Model.findOneAndDelete(query);
        
        return deletedItem 
            ? NextResponse.json({ message: "Item deleted successfully" }) 
            : NextResponse.json({ error: 'Not found' }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Deletion failed' }, { status: 500 });
    }
}