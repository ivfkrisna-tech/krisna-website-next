import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true }, // Slug added
    content: { type: String, required: true },
    fileUrl: { type: String },
    author: { type: String, default: "" } 
}, { timestamps: true });

// Check if models exist, otherwise create them
export const Blog = mongoose.models.Blog || mongoose.model('Blog', DataSchema);
export const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', DataSchema);
export const Story = mongoose.models.Story || mongoose.model('Story', DataSchema);