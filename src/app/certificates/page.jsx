"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';


export default function CertificatesPage() {
  useReveal();

  const trustSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Krishna IVF Group",
    "award": "ISO Certified Quality Assurance & Fertility Excellence",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trustSchema) }}
      />

      <main>
        {/* Header Section */}
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Accreditations</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Committed to Quality and Safety.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Certificates
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="cert-intro">
            <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '20px' }}>
              Standards of <span style={{ color: 'var(--brand-teal)' }}>Excellence</span>
            </h2>
            <p>At Krishna IVF Center, we adhere to the highest international standards of safety and quality. Our certifications reflect our unwavering commitment to ethics, transparency, and clinical excellence in reproductive healthcare.</p>
          </div>

          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-img-box">
                <img src="/img/Free_Professional_Medical_Certificate_Template_Edit_and_Download_Landscape_b3e757cfe2.jpg" alt="Medical Excellence Certificate" loading="lazy" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">Excellence in IVF</h3>
                <p className="cert-desc">Certified for maintaining high standards in Assisted Reproductive Technology.</p>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-img-box">
                <img src="/img/Free_Professional_Medical_Certificate_Template_Edit_and_Download_Landscape_b3e757cfe2.jpg" alt="ISO Certification" loading="lazy" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">Quality Assurance</h3>
                <p className="cert-desc">Accredited for operational safety and patient care protocols.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/" className="btn-primary" style={{ background: 'transparent', color: 'var(--brand-pink)', border: '2px solid var(--brand-pink)', boxShadow: 'none' }}>
              &larr; Back to Home
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Start Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Schedule a confidential consultation with our fertility specialists today.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Book Appointment</Link>
        </section>
      </main>
    </>
  );
}