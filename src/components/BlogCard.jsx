'use client'; 
import Link from 'next/link';

export default function BlogCard({ blog }) {
  // 1. HTML tags ko hatane ka function
  const cleanContent = blog.content ? blog.content.replace(/<[^>]*>?/gm, '') : "";

  const imageUrl = blog.fileUrl?.startsWith('http') 
  ? blog.fileUrl 
  : blog.fileUrl?.includes('uploads') 
    ? `/${blog.fileUrl.replace(/^\/+/, '')}` 
    : `/uploads/${blog.fileUrl}`;

  return (
    <div className="blog-card">
      <img 
        src={imageUrl} 
        alt={blog.title} 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = '/img/fallback-image.jpg'; 
        }}
      />
      <h3>{blog.title}</h3>
      
     <p>
  {cleanContent
    .replace(/&nbsp;/g, ' ') 
    .replace(/<[^>]*>/g, '') 
    .substring(0, 100)       
  }...
</p>
      
      <Link href={`/blog/${blog.slug || blog._id}`} className="read-more-link">
  READ MORE <i className="fa-solid fa-angles-right"></i>
</Link>
    </div>
  );
}