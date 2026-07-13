'use client'; 
import Link from 'next/link';

export default function BlogCard({ blog }) {
  const cleanContent = blog.content ? blog.content.replace(/<[^>]*>?/gm, '') : (blog.metaDescription || "Click to read this article about " + blog.title);

  // Image URL safe check (handling both database fileUrl and local data image)
  const sourceImage = blog.fileUrl || blog.image;
  const imageUrl = sourceImage?.startsWith('http') 
    ? sourceImage 
    : sourceImage?.includes('uploads') 
      ? `/${sourceImage.replace(/^\/+/, '')}` 
      : sourceImage?.startsWith('/') 
        ? sourceImage
        : sourceImage ? `/uploads/${sourceImage}` : '/img/fallback-image.jpg';

  const linkHref = `/blog/${blog.slug || blog._id}`;

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-card {
          display: flex !important;
          flex-direction: column !important;
          background: #ffffff !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
          height: 100% !important;
          transition: transform 0.2s ease !important;
          border: 1px solid #e2e8f0 !important;
          text-decoration: none !important;
          color: inherit !important;
        }
        .blog-card:hover {
          transform: translateY(-5px) !important;
        }
        .blog-card-image-wrapper {
          width: 100% !important;
          height: 210px !important;
          overflow: hidden !important;
          background: #f1f5f9 !important;
        }
        .blog-card-image-wrapper img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important; /* Image ko stretch hone se rokega */
        }
        .blog-card-body {
          padding: 20px !important;
          display: flex !important;
          flex-direction: column !important;
          flex-grow: 1 !important;
        }
        .blog-card-body h3 {
          font-size: 1.25rem !important;
          font-weight: 700 !important;
          color: #1e293b !important;
          margin-bottom: 12px !important;
          line-height: 1.4 !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 2 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
        }
        .blog-card-body p {
          font-size: 0.95rem !important;
          color: #64748b !important;
          line-height: 1.6 !important;
          margin-bottom: 20px !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 3 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
        }
        .read-more-link {
          margin-top: auto !important; /* Button ko bottom mein lock karega */
          color: #008b8b !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          font-size: 0.9rem !important;
        }
      `}} />

      {/* 2. COMPONENT HTML */}
      <Link href={linkHref} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="blog-card-image-wrapper">
          <img 
            src={imageUrl} 
            alt={blog.title} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/img/fallback-image.jpg'; 
            }}
          />
        </div>
        
        <div className="blog-card-body">
          <h3>{blog.title}</h3>
          
          <p>
            {cleanContent
              .replace(/&nbsp;/g, ' ') 
              .replace(/<[^>]*>/g, '') 
              .substring(0, 110)       
            }...
          </p>
          
          <div className="read-more-link">
            READ MORE <i className="fa-solid fa-angles-right" style={{ marginLeft: '5px' }}></i>
          </div>
        </div>
      </Link>
    </>
  );
}