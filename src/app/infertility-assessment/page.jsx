"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';


export default function InfertilityAssessmentPage() {
  useReveal();

  // AEO Schema for Medical Diagnosis
  const assessmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Infertility",
    "recognizingAuthority": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group"
    },
    "possibleTreatment": [
      { "@type": "MedicalProcedure", "name": "Semen Analysis" },
      { "@type": "MedicalProcedure", "name": "Hormone Analysis" },
      { "@type": "MedicalProcedure", "name": "Transvaginal Ultrasound" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentSchema) }}
      />

      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Infertility Assessment</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Comprehensive diagnosis for both partners.</p>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase' }}>Find the Root Cause</h3>
              <h2>Comprehensive <br /><span style={{ color: 'var(--brand-teal)' }}>Fertility Evaluation</span></h2>
              <p>At <strong>Krishna IVF</strong>, we use advanced diagnostic technology to assess both male and female fertility factors accurately.</p>
              <Link href="/contact" className="btn-primary">Book an Assessment</Link>
            </div>
            <div>
              
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">What Does an Assessment Include?</h2>
          <div className="assess-grid">
            <div className="assess-card">
              <h3>Female Assessment</h3>
              <p>We investigate ovulation, uterine health, and tubal patency.</p>
              
              <ul>
                <li><strong>Hormone Analysis:</strong> Blood tests (AMH, FSH, LH).</li>
                <li><strong>HSG (Tube Test):</strong> X-ray to check fallopian tubes.</li>
              </ul>
            </div>

            <div className="assess-card">
              <h3>Male Assessment</h3>
              <p>Male factors contribute to 40-50% of infertility cases.</p>
              
              <ul>
                <li><strong>Semen Analysis:</strong> Checks count, motility, and shape.</li>
                <li><strong>DNA Fragmentation:</strong> Assesses genetic integrity.</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2>Start Your Journey Today</h2>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)' }}>Schedule Consultation</Link>
        </section>
      </main>
    </>
  );
}