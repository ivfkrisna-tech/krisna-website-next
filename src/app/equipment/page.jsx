"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';



export default function EquipmentPage() {
  useReveal();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Krishna IVF Group",
    "description": "Fertility clinic in Jaipur equipped with advanced embryology and surgical technology.",
    "areaServed": "Jaipur"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>State-of-the-Art Equipment</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Investing in technology for your success.</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
            We utilize world-class technology to ensure precision, safety, and the highest success rates for our patients. Our labs are maintained at strict environmental standards.
          </p>

          <div className="equip-grid">
            {/* Embryology Unit */}
            <div className="equip-card">
              <div className="equip-img-wrapper">
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=60" alt="Advanced Embryology Unit in IVF Lab" loading="lazy" />
              </div>
              <div className="equip-text">
                <p className="equip-title">Advanced Embryology Unit</p>
                <p className="equip-desc">High-precision incubators mimicking the womb's environment.</p>
              </div>
            </div>

            {/* Cath Lab */}
            <div className="equip-card">
              <div className="equip-img-wrapper">
                <img src="/img/Philips-Allura-Xper-FD10-Cath-Lab..jpg" alt="Philips Allura Xper Cath Lab Machine" loading="lazy" />
              </div>
              <div className="equip-text">
                <p className="equip-title">Philips Allura Xper Cath Lab</p>
                <p className="equip-desc">State-of-the-art imaging for precise diagnostics and procedures.</p>
              </div>
            </div>

            {/* Surgical System */}
            <div className="equip-card">
              <div className="equip-img-wrapper">
                <img src="https://plus.unsplash.com/premium_photo-1661889752049-44bb9f857e67?w=600&auto=format&fit=crop&q=60" alt="High-Precision Surgical System" loading="lazy" />
              </div>
              <div className="equip-text">
                <p className="equip-title">Surgical System</p>
                <p className="equip-desc">Minimally invasive technology for safer surgeries and faster recovery.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/" className="btn-primary" style={{ background: 'transparent', color: 'var(--brand-pink)', border: '2px solid var(--brand-pink)', boxShadow: 'none', marginRight: '15px' }}>&larr; Back to Home</Link>
            <Link href="/contact" className="btn-primary">Book Consultation</Link>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Experience World-Class Care</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Visit our center to see our facilities and meet our expert team.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Visit</Link>
        </section>
      </main>
    </>
  );
}