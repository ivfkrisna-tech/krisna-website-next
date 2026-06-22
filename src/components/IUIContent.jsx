"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function IUIContent() {
  useReveal();

  return (
    <main>
      <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>IUI Treatment</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>A less invasive first step towards parenthood.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> IUI
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>Intrauterine Insemination</h3>
              <h2 style={{ marginBottom: '25px' }}>Simple &amp; Effective <br /><span style={{ color: 'var(--brand-teal)' }}>Fertility Treatment</span></h2>
              <p>Intrauterine Insemination (IUI) is a minimally invasive fertility treatment where washed and processed sperm are placed directly into the uterine cavity at the time of ovulation. This procedure significantly increases the chances of pregnancy by placing high-quality sperm closer to the egg.</p>
              <p>IUI is often the first line of treatment at <strong>Krisna IVF Center</strong> because it is less invasive and more affordable than IVF. Our specialized preparation ensures only the most robust sperm are used.</p>
              <br />
              <Link href="/contact" className="btn-primary">Enquire Now</Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1622399149320-8723b1e16e4d?q=80&w=1170&auto=format&fit=crop" alt="IUI Procedure Illustration" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">The IUI Treatment Roadmap</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3>Evaluation</h3>
                <p>Initial assessment including semen analysis, ultrasound of uterus &amp; ovaries, and tests to confirm tubal patency.</p>
                <img src="https://images.unsplash.com/photo-1758691463110-697a814b2033?w=600&auto=format&fit=crop&q=60" alt="Fertility Evaluation Diagram" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3>Ovarian Stimulation</h3>
                <p>Medications are given to stimulate egg production, monitored by regular ultrasounds to track follicle growth.</p>
                <img src="https://cdn.pixabay.com/photo/2014/10/02/18/50/patient-470514_1280.jpg" alt="Follicle Monitoring Ultrasound" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3>Semen Preparation</h3>
                <p>A semen sample is collected and processed in the lab to wash away debris and concentrate the motile sperm.</p>
                <img src="/img/blood-test-5601437_1280.jpg" alt="Sperm Washing Process" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3>Insemination</h3>
                <p>The prepared sperm is inserted directly into the uterus using a fine, painless catheter at the optimal ovulation time.</p>
                <img src="https://plus.unsplash.com/premium_photo-1729286323505-b8f8702ab37d?q=80&w=1170&auto=format&fit=crop" alt="Insemination Procedure" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card" style={{ gridColumn: '1 / -1', maxWidth: '700px', margin: '0 auto' }}>
              <div className="process-num">05</div>
              <div className="process-content">
                <h3>Post-Procedure Care</h3>
                <p>You rest for a short period and follow prescribed medications to support implantation. A pregnancy test is done after 2 weeks.</p>
                <img src="https://plus.unsplash.com/premium_photo-1661764146760-cc945ab351e5?w=600&auto=format&fit=crop&q=60" alt="Post IUI Care" className="process-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Overview &amp; Eligibility</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-user-check"></i></div>
              <h3>Who is it for?</h3>
              <p>IUI is often recommended in the following situations:</p>
              <ul className="check-list-sm">
                <li>Mild to moderate low sperm count.</li>
                <li>Unexplained infertility.</li>
                <li>Cervical mucus issues.</li>
                <li>Donor sperm cycles.</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-clipboard-list"></i></div>
              <h3>Prerequisites</h3>
              <p>Before starting IUI, we ensure the following:</p>
              <ul className="check-list-sm">
                <li>At least one open fallopian tube.</li>
                <li>Healthy ovulation (natural or induced).</li>
                <li>Adequate post-wash sperm count.</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Begin Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Contact us today to schedule your initial fertility assessment and see if IUI is the right path for you.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Consultation</Link>
        </section>
    </main>
  );
}