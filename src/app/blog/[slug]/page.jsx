import { notFound } from 'next/navigation';
import Link from 'next/link';
import TOC from '@/components/TOC';
import * as cheerio from 'cheerio';
import connectDB from '@/lib/mongodb';
import { Blog } from '@/models/Data';
import mongoose from 'mongoose';

async function getBlog(slug) {
  try {
    await connectDB();
    let blog = null;
    if (mongoose.Types.ObjectId.isValid(slug)) {
        blog = await Blog.findById(slug).lean();
    }
    if (!blog) {
        blog = await Blog.findOne({ slug: slug }).lean();
    }
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
  } catch (error) {
    console.error("Database fetch failed:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return {
    title: blog?.metaTitle || `${blog?.title} | Krishna IVF`,
    description: blog?.metaDescription || 'Default description',
    keywords: blog?.metaKeywords,
    alternates: { canonical: `https://krishnaivf.com/blog/${slug}` }
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) notFound();

  // JSON-LD Schema: AEO & GEO support ke saath
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription,
    "author": { "@type": "Organization", "name": "Krishna IVF Group" },
    "datePublished": blog.createdAt,
    // AEO support: Direct Answer ko FAQ style mein inject karna
    "mainEntity": blog.directAnswer ? {
      "@type": "Question",
      "name": blog.targetQuestion || "Related Question",
      "acceptedAnswer": { "@type": "Answer", "text": blog.directAnswer }
    } : undefined
  };

  const $ = cheerio.load(blog.content || '');
  const headings = [];
  $('h2, h3').each((i, el) => {
    const text = $(el).text();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    $(el).attr('id', id);
    headings.push({ id, text, level: el.tagName });
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="blog-detail-hero">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{blog.title}</h1>
      </div>

      <div className="blog-detail-container">
        <article className="blog-detail-content">
          {/* AEO: Direct Answer display agar available ho */}
          {blog.directAnswer && (
            <div className="direct-answer-box" style={{ padding: '20px', background: '#f0f7f7', borderRadius: '10px', marginBottom: '20px' }}>
              <p><strong>{blog.targetQuestion}</strong></p>
              <p>{blog.directAnswer}</p>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: $.html() }} />
        </article>

        <aside className="blog-detail-sidebar">
           {/* Image Alt Text update kiya gaya */}
          {blog.fileUrl && (
            <img 
              src={blog.fileUrl?.startsWith('http') ? blog.fileUrl : `/uploads/${blog.fileUrl}`} 
              alt={blog.imageAlt || blog.title} 
              className="sidebar-featured-img" 
            />
          )}
          {headings.length > 0 && <TOC headings={headings} />}
        </aside>
      </div>
 

      <div style={{ textAlign: 'center', padding: '20px 0 60px' }}>
        <Link href="/blog" style={{ color: 'var(--brand-teal)', fontWeight: '600' }}>
          ← Back to All Blogs
        </Link>
      </div>
    </main>
  );
}