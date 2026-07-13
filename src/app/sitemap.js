import connectDB from '@/lib/mongodb';
import { Blog } from '@/models/Data';
import { blogs as localBlogs } from '@/data/blogs';

export default async function sitemap() {
  const baseUrl = 'https://www.krisnaivfgroup5.com';
  
  // Static routes
  const staticRoutes = [
    '',
    '/ivf',
    '/iui',
    '/aboutus',
    '/icsi',
    '/faq',
    '/contact',
    '/blog',
    '/certificates',
    '/donor',
    '/equipment',
    '/fertility_surgery',
    '/infertility-assessment',
    '/lab-gallery',
    '/our-team',
    '/success'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch dynamic blogs
  let dbBlogsParsed = [];
  try {
    await connectDB();
    const dbBlogs = await Blog.find({}).lean();
    if (dbBlogs && dbBlogs.length > 0) {
      dbBlogsParsed = JSON.parse(JSON.stringify(dbBlogs));
    }
  } catch (error) {
    console.error("Sitemap: Database fetch failed, falling back to local data:", error);
  }

  // Merge DB blogs with local blogs, avoiding duplicates by slug
  const allBlogs = [...dbBlogsParsed];
  for (const localBlog of localBlogs) {
    if (!allBlogs.some(dbBlog => dbBlog.slug === localBlog.slug)) {
      allBlogs.push(localBlog);
    }
  }

  // Dynamic blog routes
  const blogRoutes = allBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug || blog._id}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
