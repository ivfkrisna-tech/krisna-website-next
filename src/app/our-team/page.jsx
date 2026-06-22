"use client";

import Link from 'next/link';
import Image from 'next/image';
import useReveal from '@/hooks/useReveal';

export default function OurTeamPage() {
  useReveal();

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "Person", "name": "Dr. Anjali Sharma", "jobTitle": "Senior IVF Specialist" },
      { "@type": "Person", "name": "Dr. Rajesh Verma", "jobTitle": "Clinical Embryologist" },
      { "@type": "Person", "name": "Dr. Priya Singh", "jobTitle": "Fertility Consultant" },
      { "@type": "Person", "name": "Dr. Amit Patel", "jobTitle": "Laparoscopic Surgeon" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Meet Our Experts</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>The dedicated professionals behind your miracle.</p>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {/* Dr. Anjali Sharma */}
            <div className="team-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
              <div className="team-img-box" style={{ position: 'relative', height: '350px' }}>
                <Image 
                  src="/img/gallery2/depositphotos_546065988-stock-photo-indian-female-doctor-portrait-south.jpg" 
                  alt="Dr. Anjali Sharma" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="team-info" style={{ padding: '20px', textAlign: 'center' }}>
                <h3 className="team-name">Dr. Anjali Sharma</h3>
                <p className="team-role" style={{ color: 'var(--brand-teal)' }}>Senior IVF Specialist</p>
              </div>
            </div>

            {/* Dr. Rajesh Verma */}
            <div className="team-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
              <div className="team-img-box" style={{ position: 'relative', height: '350px' }}>
                <Image src="/img/gallery2/doccc.jpg" alt="Dr. Rajesh Verma" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-info" style={{ padding: '20px', textAlign: 'center' }}>
                <h3 className="team-name">Dr. Rajesh Verma</h3>
                <p className="team-role" style={{ color: 'var(--brand-teal)' }}>Clinical Embryologist</p>
              </div>
            </div>

            {/* Dr. Priya Singh */}
            <div className="team-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
              <div className="team-img-box" style={{ position: 'relative', height: '350px' }}>
                <Image src="/img/doc_img.jpg" alt="Dr. Priya Singh" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-info" style={{ padding: '20px', textAlign: 'center' }}>
                <h3 className="team-name">Dr. Priya Singh</h3>
                <p className="team-role" style={{ color: 'var(--brand-teal)' }}>Fertility Consultant</p>
              </div>
            </div>

            {/* Dr. Amit Patel */}
            <div className="team-card" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
              <div className="team-img-box" style={{ position: 'relative', height: '350px' }}>
                <Image src="/img/gallery2/istockphoto-1730222050-612x612.jpg" alt="Dr. Amit Patel" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-info" style={{ padding: '20px', textAlign: 'center' }}>
                <h3 className="team-name">Dr. Amit Patel</h3>
                <p className="team-role" style={{ color: 'var(--brand-teal)' }}>Laparoscopic Surgeon</p>
              </div>
            </div>

          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2>Compassionate Care Awaits</h2>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)' }}>Contact Us</Link>
        </section>
      </main>
    </>
  );
}