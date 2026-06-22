"use client";

import Link from 'next/link';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';

export default function LabGalleryPage() {
  useReveal();

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Krishna IVF Lab Facilities",
    "description": "State-of-the-art sterile IVF laboratory with advanced incubation and microscopic technology.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Lab Gallery</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>A glimpse into our world-class facilities.</p>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="gallery-intro" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Advanced <span style={{ color: 'var(--brand-teal)' }}>Technology</span></h2>
            <p>Our lab is equipped with the latest incubators, microscopes, and air filtration systems to ensure the highest success rates.</p>
          </div>

          <div className="lab-gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* Example of Image Optimization */}
            <div className="lab-gallery-item">
              <div className="lab-gallery-img-box" style={{ position: 'relative', height: '300px' }}>
                <Image 
                  src="https://cdn.pixabay.com/photo/2022/03/22/13/11/oplampe-7084997_1280.jpg" 
                  alt="High-Tech IVF Microscope Setup" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="lab-gallery-caption" style={{ padding: '10px' }}>High-Tech Microscope Setup</div>
            </div>
            
            {/* Add other gallery items following the same pattern */}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/" className="btn-primary" style={{ marginRight: '15px' }}>&larr; Back to Home</Link>
            <Link href="/contact" className="btn-primary">Visit Our Center</Link>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2>Ready to Start Your Journey?</h2>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)' }}>Book Appointment</Link>
        </section>
      </main>
    </>
  );
}