import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    
    
    fileUrl: { type: String, default: '' }, 
    author: { type: String, default: '' },  

    // SEO (Traditional)
    targetKeyword: { type: String, default: '' },
    metaDescription: { type: String, default: '' },

    // AEO (Answer Engine Opt.)
    directAnswer: { type: String, default: '' }, 
    targetQuestion: { type: String, default: '' },

    
    coreEntities: { type: String, default: '' }, 
    citations: { type: String, default: '' }
}, { timestamps: true });

// Check if models exist, otherwise create them
export const Blog = mongoose.models.Blog || mongoose.model('Blog', DataSchema);
export const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', DataSchema);
export const Story = mongoose.models.Story || mongoose.model('Story', DataSchema);