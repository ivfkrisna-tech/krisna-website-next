"use client";
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function DonorContent() {
  useReveal();
  
  return (
    <main>
      <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Donor IVF Services</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Bringing hope when you need it most.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Donor IVF
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>Alternative Pathways</h3>
              <h2 style={{ marginBottom: '25px' }}>Building Families with <br /><span style={{ color: 'var(--brand-teal)' }}>Egg &amp; Embryo Donation</span></h2>
              <p>Donor IVF offers a pathway to parenthood for couples who cannot conceive using their own eggs or sperm. It is a beautiful way to build a family, supported by advanced science and ethical practices.</p>
              <p>At <strong>Krisna IVF</strong>, we provide a comprehensive, anonymous, and strictly screened donor program to ensure the highest success rates and health standards for your future baby.</p>
              <br />
              <Link href="/contact" className="btn-primary">Enquire Now</Link>
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2017/08/08/03/50/family-2610205_1280.jpg" alt="Happy family conceived through Donor IVF" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">Who Needs Donor Services?</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="card-icon"><i className="fa-regular fa-clock"></i></div>
              <h3>Advanced Maternal Age</h3>
              <p>Women over 40 often face declined egg quality. Donor eggs significantly increase the chances of a healthy pregnancy.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
              <h3>Premature Ovarian Failure</h3>
              <p>For women whose ovaries have stopped functioning early (menopause before age 40) due to genetics or medical reasons.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-dna"></i></div>
              <h3>Genetic Conditions</h3>
              <p>To avoid passing on specific hereditary genetic disorders to the child, donor gametes can be a safe alternative.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-rotate"></i></div>
              <h3>Recurrent IVF Failures</h3>
              <p>When multiple IVF cycles with self-eggs have failed due to poor embryo quality or implantation failure.</p>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">The Donor Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3>Screening &amp; Selection</h3>
                <p>We strictly screen donors for medical health, genetic history, and psychological well-being to ensure safety.</p>
                <img src="https://cdn.pixabay.com/photo/2022/02/07/19/07/doctor-7000104_1280.jpg" alt="Medical Screening for Donor" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3>Ovarian Stimulation</h3>
                <p>The donor undergoes hormone stimulation to produce healthy eggs while your uterus is prepared for implantation.</p>
                <img src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" alt="Ovarian Stimulation Process Diagram" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3>Fertilization</h3>
                <p>Retrieved eggs are fertilized with the partner's (or donor) sperm in our advanced embryology lab.</p>
                <img src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg" alt="Fertilization in IVF Lab" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3>Embryo Transfer</h3>
                <p>The best quality embryo is transferred to the uterus. A pregnancy test is conducted after 14 days.</p>
                <img src="/img/gggggg.jpg" alt="Embryo Transfer Procedure" className="process-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Explore Your Options Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Schedule a confidential consultation to discuss Egg or Embryo donation with our fertility experts.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Book Appointment</Link>
        </section>
    </main>
  );
}