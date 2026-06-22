"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function IVFContent() {
  useReveal();

  return (
    <main>
      <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>In Vitro Fertilisation (IVF)</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Advanced reproductive technology for your family.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> IVF
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>What is IVF?</h3>
              <h2 style={{ marginBottom: '25px' }}>Advanced Fertility <br /><span style={{ color: 'var(--brand-teal)' }}>Treatment</span></h2>
              <p>In Vitro Fertilisation (IVF) is a process where eggs are retrieved from the ovaries and fertilized with sperm in a controlled laboratory environment. The resulting embryo is then transferred into the uterus to achieve pregnancy.</p>
              <p>At <strong>Krisna IVF Center</strong>, we use advanced laboratory technology and personalized protocols to ensure the best possible outcomes, closely supporting the natural conception process while significantly increasing success rates.</p>
              <br />
              <Link href="/contact" className="btn-primary">Enquire Now</Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=1176&auto=format&fit=crop" alt="IVF Treatment Procedure Illustration" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">Steps of In Vitro Fertilisation</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3>Egg Collection</h3>
                <p>Your IVF journey begins with hormone injections (for 8-12 days) to stimulate your ovaries to produce multiple eggs.</p>
                <img src="https://plus.unsplash.com/premium_photo-1702599114927-def3f9db80c4?q=80&w=1170&auto=format&fit=crop" alt="Egg Retrieval Diagram" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3>Fertilisation</h3>
                <p>Eggs and sperm are combined in our specialized lab to create embryos under strict environmental conditions.</p>
                <img src="https://cdn.pixabay.com/photo/2017/10/04/09/56/chemist-2815640_1280.jpg" alt="Fertilization in IVF Lab" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3>Embryo Development</h3>
                <p>We monitor embryo growth using advanced incubators and time-lapse technology to select the healthiest ones.</p>
                <img src="https://images.unsplash.com/photo-1578496480240-32d3e0c04525?w=600&auto=format&fit=crop&q=60" alt="Embryo Development Stage" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3>Embryo Transfer</h3>
                <p>The best quality embryo is carefully placed into the uterus. A pregnancy test is conducted after 2 weeks.</p>
                <img src="https://plus.unsplash.com/premium_photo-1661889752049-44bb9f857e67?w=600&auto=format&fit=crop&q=60" alt="Embryo Transfer Procedure" className="process-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Why Choose IVF?</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-microscope"></i></div>
              <h3>Tubal Infertility</h3>
              <p>Providing the best chance of pregnancy for women with damaged or blocked fallopian tubes.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-dna"></i></div>
              <h3>Sperm Anomalies</h3>
              <p>Overcoming minor male factor issues with advanced tools to optimize conception chances.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-video"></i></div>
              <h3>Advanced Monitoring</h3>
              <p>Using the Embryoscope incubator to monitor embryo growth without disturbance for better selection.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-vial"></i></div>
              <h3>Genetic Testing</h3>
              <p>Screening embryos via PGS and PGD to detect chromosomal errors or genetic mutations before transfer.</p>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Is IVF Right For You?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Success depends on multiple factors. We tailor each cycle intricately to optimize your chances.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Consultation</Link>
        </section>
    </main>
  );
}