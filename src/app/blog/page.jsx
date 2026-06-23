import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Fertility Insights & IVF Blogs | Krishna IVF Jaipur',
  description: 'Explore expert fertility advice, latest medical breakthroughs in IVF, and success stories at Krishna IVF Group, Jaipur.',
};

// 1. Data fetch karne ke liye async function
async function getBlogs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/blogs`, { cache: 'no-store' });
    
    if (!res.ok) return []; // Error throw karne ke bajaye empty array return karein
    
    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
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