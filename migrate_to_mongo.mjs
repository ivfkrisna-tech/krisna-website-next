import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const MONGODB_URI = "mongodb://ivfkrisna_db_user:4ATyrK7dVMuujmyC@ac-wdoxqjh-shard-00-00.3knwey6.mongodb.net:27017/krisna_admin?ssl=true&authSource=admin&retryWrites=true&w=majority";

const DataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    fileUrl: { type: String, default: '' }, 
    author: { type: String, default: '' },  
    targetKeyword: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    directAnswer: { type: String, default: '' }, 
    targetQuestion: { type: String, default: '' },
    coreEntities: { type: String, default: '' }, 
    citations: { type: String, default: '' }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', DataSchema);

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  // Read blogs from file using simple regex/eval or dynamically if possible
  // To avoid import issues with ES modules, let's read the files and evaluate them
  const blogsContent = readFileSync('./src/data/blogs.js', 'utf8');
  const seoBlogsContent = readFileSync('./src/data/new_seo_blogs.js', 'utf8');

  // Strip exports
  let code = blogsContent.replace(/export\s+const\s+blogs\s*=\s*/, 'const blogs = ') + '\n' +
             seoBlogsContent.replace(/export\s+const\s+newSeoBlogs\s*=\s*/, 'const newSeoBlogs = ') + '\n' +
             'return { blogs, newSeoBlogs };';
  
  const getBlogs = new Function(code);
  const { blogs, newSeoBlogs } = getBlogs();

  const allBlogs = [...blogs, ...newSeoBlogs];

  let added = 0;
  for (const blog of allBlogs) {
    const existing = await Blog.findOne({ slug: blog.slug });
    if (!existing) {
      await Blog.create({
        title: blog.title || '',
        content: blog.content || '',
        slug: blog.slug,
        fileUrl: blog.image ? blog.image : '',
        metaDescription: blog.metaDescription || '',
        targetKeyword: blog.metaKeywords || '',
        targetQuestion: blog.targetQuestion || '',
        directAnswer: blog.directAnswer || ''
      });
      added++;
      console.log("Added:", blog.slug);
    } else {
      console.log("Skipped (already exists):", blog.slug);
    }
  }

  console.log(`Finished migrating ${added} blogs.`);
  process.exit(0);
}

run().catch(console.error);
