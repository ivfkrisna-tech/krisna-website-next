import BlogCard from '@/components/BlogCard';
import connectDB from '@/lib/mongodb';
import { Blog } from '@/models/Data';

// 🔥 MAGIC LINE: Isse Next.js har request par database se naya data fetch karega (Static cache issue fix)
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Fertility Insights & IVF Blogs | Krishna IVF Jaipur',
  description: 'Explore expert fertility advice, latest medical breakthroughs in IVF, and success stories at Krishna IVF Group, Jaipur.',
};

// 1. Data fetch karne ke liye async function
async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    
    // Convert ObjectIds to strings and clean up the object for Next.js Client Components
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Database fetch failed:", error);
    return []; // Database connect na ho to UI crash nahi hoga
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Fertility Insights & Stories",
    "description": "Expert advice and articles on IVF and fertility treatments.",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <main>
        <section className="blog-page-header"> 
          <h1 style={{ fontWeight: '800' }}>Fertility Insights & Stories</h1>
          <p style={{ maxWidth: '700px', margin: '15px auto 0' }}>
            Expert advice, latest medical breakthroughs, and heartwarming success stories to guide you on your journey to parenthood.
          </p>
        </section>

        <section className="blog-container">
          <div className="blog-grid">
            {/* 3. Database blogs ko map karein */}
            {blogs.map((blog) => (
              <BlogCard key={blog.slug || blog._id} blog={blog} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}