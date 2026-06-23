import mongoose from 'mongoose';
const DataSchema = new mongoose.Schema({ 
    title: String, content: String, fileUrl: String, author: { type: String, default: "" } 
}, { timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model('Blog', DataSchema);
export const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', DataSchema);
export const Story = mongoose.models.Story || mongoose.model('Story', DataSchema);