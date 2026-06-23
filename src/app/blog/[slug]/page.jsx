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
    
    if (!blog) return null;
    
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    console.error("Database fetch failed:", error);
    return null;
  }
}

//slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) return { title: 'Blog Not Found | Krishna IVF' };

  return {
    title: `${blog.title} | Krishna IVF`,
    description: blog.content?.replace(/<[^>]+>/g, '').substring(0, 150) || 'Read more at Krishna IVF',
    alternates: {
      canonical: `https://krishnaivf.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) notFound();

  // Cheerio se headings process karna aur IDs inject karna
  const $ = cheerio.load(blog.content || '');
  const headings = [];
  $('h2, h3').each((i, el) => {
    const text = $(el).text();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    $(el).attr('id', id);
    headings.push({ id, text, level: el.tagName });
  });
  const processedContent = $.html();

  return (
    <main>
      {/* Google Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "author": { "@type": "Organization", "name": "Krishna IVF Group" },
        "datePublished": blog.createdAt
      })}} />

      <div className="blog-detail-hero">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{blog.title}</h1>
      </div>

      <div className="blog-detail-container">
        <article className="blog-detail-content">
          <h2 className="detail-main-title">{blog.title}</h2>
          <div className="title-underline"></div>
          
          <div dangerouslySetInnerHTML={{ __html: processedContent }} />
        </article>

        <aside className="blog-detail-sidebar">
          {blog.fileUrl && (
            <img 
              src={blog.fileUrl?.startsWith('http') ? blog.fileUrl : `/uploads/${blog.fileUrl}`} 
              alt={blog.title} 
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