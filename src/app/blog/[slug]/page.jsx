import { notFound } from 'next/navigation';
import Link from 'next/link';
import TOC from '@/components/TOC';
import * as cheerio from 'cheerio'; // Import cheerio

async function getBlog(id) {
  const res = await fetch(`http://127.0.0.1:5000/api/blogs/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return {
    title: blog ? `${blog.title} | Krishna IVF` : 'Blog Not Found',
    description: blog?.title ? `Read more about ${blog.title}.` : 'Blog post at Krishna IVF',
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) notFound();

  // --- NAYA LOGIC: Cheerio se headings aur IDs generate karna ---
  const $ = cheerio.load(blog.content || '');
  const headings = [];
  $('h2, h3').each((i, el) => {
    const text = $(el).text();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    $(el).attr('id', id);
    headings.push({ id, text, level: el.tagName });
  });
  const processedContent = $.html();
  // -----------------------------------------------------------

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "author": { "@type": "Organization", "name": "Krishna IVF Group" }
      })}} />

      <div className="blog-detail-hero">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{blog.title}</h1>
      </div>

      <div className="blog-detail-container">
        <article className="blog-detail-content">
          <h2 className="detail-main-title">{blog.title}</h2>
          <div className="title-underline"></div>
          
          {/* processedContent ka use karein taaki IDs apply ho jayein */}
          <div dangerouslySetInnerHTML={{ __html: processedContent }} />
        </article>

        <aside className="blog-detail-sidebar">
          {blog.fileUrl && (
            <img 
              src={blog.fileUrl?.startsWith('http') ? blog.fileUrl : `http://127.0.0.1:5000/uploads/${blog.fileUrl}`} 
              alt={blog.title} 
              className="sidebar-featured-img" 
            />
          )}
          
          {/* Dynamic headings pass karein */}
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