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
    '/success',
    '/best-ivf-center-in-jaipur',
    '/best-ivf-center-in-jodhpur',
    '/best-ivf-center-in-udaipur',
    '/best-ivf-center-in-kota',
    '/best-ivf-center-in-ajmer',
    '/best-ivf-center-in-bikaner',
    '/best-ivf-center-in-alwar',
    '/best-ivf-center-in-bharatpur',
    '/best-ivf-center-in-sikar',
    '/best-ivf-center-in-bhilwara',
    '/best-ivf-center-in-pali',
    '/best-ivf-center-in-sri-ganganagar',
    '/best-ivf-center-in-hanumangarh',
    '/best-ivf-center-in-barmer',
    '/best-ivf-center-in-chittorgarh',
    '/best-ivf-center-in-nagaur',
    '/best-ivf-center-in-jhunjhunu',
    '/best-ivf-center-in-tonk',
    '/best-ivf-center-in-sawai-madhopur',
    '/best-ivf-center-in-jaisalmer'
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

  // Excluded / redirected blog slugs
  const excludedSlugs = new Set([
    'why-do-couples-choose-krisna-ivf-as-the-best-ivf-centre-in-jaipur',
    'why-is-krisna-ivf-the-best-fertility-centre-in-jaipur-for-couples-planning-parenthood',
    'best-ivf-center-jaipur-smart-fertility',
    'why-is-krisna-ivf-considered-the-best-fertility-hospital-in-rajasthan',
  ]);

  // Dynamic blog routes
  const blogRoutes = allBlogs
    .filter((blog) => !excludedSlugs.has(blog.slug || blog._id))
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug || blog._id}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  return [...staticRoutes, ...blogRoutes];
}
