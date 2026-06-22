"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function ICSIPage() {
  useReveal();

  // AEO Schema: Medical Procedure
  const icsiSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Intracytoplasmic Sperm Injection (ICSI)",
    "description": "A specialized IVF technique for male factor infertility involving direct injection of sperm into an egg.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group",
      "address": { "@type": "PostalAddress", "addressLocality": "Jaipur" }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(icsiSchema) }}
      />

      
        <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>ICSI Treatment</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Advanced solutions for male factor infertility.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> ICSI
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>What is ICSI?</h3>
              <h2 style={{ marginBottom: '25px' }}>Intra-Cytoplasmic <br /><span style={{ color: 'var(--brand-teal)' }}>Sperm Injection</span></h2>
              <p>ICSI is a specialized form of IVF used primarily to overcome male fertility issues. Unlike standard IVF, where many sperm are placed with an egg in a dish, ICSI involves the precise injection of a single, healthy sperm directly into the center of a mature egg.</p>
              <p>This technique maximizes the chance of fertilization, even when sperm count, motility, or morphology is severely compromised. At <strong>Krisna IVF</strong>, our expert embryologists use state-of-the-art micromanipulation technology to perform this delicate procedure.</p>
              <br />
              <Link href="/contact" className="btn-primary">Enquire Now</Link>
            </div>
            <div>
              <img src="/img/icse_1.avif" alt="ICSI Micromanipulator in Lab" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">The ICSI Procedure Steps</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3>Ovarian Stimulation</h3>
                <p>Similar to standard IVF, you will take hormone medications to stimulate your ovaries to produce multiple eggs. Once mature, the eggs are retrieved.</p>
                <img src="https://images.unsplash.com/photo-1522335579687-9c718c5184d7?w=600&auto=format&fit=crop&q=60" alt="Egg Retrieval Illustration" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3>Sperm Selection</h3>
                <p>A semen sample is collected. Our embryologists select the single healthiest and most motile sperm using high-powered microscopes.</p>
                <img src="https://cdn.pixabay.com/photo/2018/06/26/05/08/lab-3498584_1280.jpg" alt="Sperm Selection in Lab" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3>ICSI Injection</h3>
                <p>Using fine tools, a single sperm is carefully injected directly into each mature egg to facilitate fertilization.</p>
                <img src="https://images.unsplash.com/photo-1582560475052-682d1beb5f42?w=600&auto=format&fit=crop&q=60" alt="ICSI Injection Process" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3>Embryo Transfer</h3>
                <p>The injected eggs develop into embryos in our lab. The best quality embryo is transferred to the uterus to establish pregnancy.</p>
                <img src="https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_1280.jpg" alt="Embryo Transfer Procedure" className="process-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Why is ICSI Recommended?</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-mars"></i></div>
              <h3>Male Factor Infertility</h3>
              <p>When sperm count is very low, motility is poor, or there are high numbers of abnormally shaped sperm.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-circle-xmark"></i></div>
              <h3>Poor Fertilization</h3>
              <p>If a couple has had a previous IVF cycle where none or very few of the eggs were successfully fertilized.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-snowflake"></i></div>
              <h3>Using Frozen Sperm</h3>
              <p>Often used when sperm has been surgically retrieved or previously frozen, as these sperm may be less active.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-dna"></i></div>
              <h3>Genetic Testing (PGT)</h3>
              <p>ICSI is often required if you plan to have Preimplantation Genetic Testing (PGT) to avoid genetic contamination.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Begin Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Contact us today to schedule your initial fertility assessment and see if ICSI is the right path for you.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Consultation</Link>
        </section>
      </main>
    </>
  );
}