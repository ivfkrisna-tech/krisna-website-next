"use client";

import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function SurgeryContent() {
  useReveal();

  return (
    <main>
      <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Fertility Enhancing Surgeries</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Minimally invasive solutions for structural fertility issues.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Services <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> Fertility Surgery
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>Advanced Care</h3>
              <h2 style={{ marginBottom: '25px' }}>Restoring Fertility with <br /><span style={{ color: 'var(--brand-teal)' }}>Precision Surgery</span></h2>
              <p>Sometimes, structural issues in the reproductive organs can hinder conception. Fertility enhancing surgeries are minimally invasive procedures designed to correct these problems and restore your natural ability to conceive.</p>
              <p>At <strong>Krisna IVF</strong>, our expert surgeons utilize advanced <strong>Laparoscopy</strong> and <strong>Hysteroscopy</strong> techniques to treat conditions like fibroids, endometriosis, and blocked tubes with precision and faster recovery times.</p>
              <br />
              <Link href="/contact" className="btn-primary">Enquire Now</Link>
            </div>
            <div>
              <img src="https://media.istockphoto.com/id/1150884079/photo/a-newborn-baby-holding-the-parent-hand-while-sleeping-at-cradle.webp?a=1&b=1&s=612x612&w=0&k=20&c=MlQZ5BNk7khD0P-EmfPQv1VssFIFOUeFODZwepVt2Og=" alt="Fertility Surgeon performing Laparoscopy" className="why-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <h2 className="section-title">Conditions Treated</h2>
          <div className="grid-container">
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Uterine Fibroids</h3>
              <p>Non-cancerous growths in the uterus that can interfere with implantation or pregnancy growth.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-shuffle"></i></div>
              <h3>Endometriosis</h3>
              <p>Tissue growing outside the uterus causing pain and scarring that blocks sperm or eggs.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-ban"></i></div>
              <h3>Blocked Tubes</h3>
              <p>Blockages in the fallopian tubes preventing the egg and sperm from meeting naturally.</p>
            </div>
            <div className="service-card">
              <div className="card-icon"><i className="fa-solid fa-magnifying-glass-plus"></i></div>
              <h3>Uterine Polyps</h3>
              <p>Small tissue overgrowths in the uterine lining that can prevent an embryo from implanting.</p>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Our Surgical Procedures</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3>Laparoscopy</h3>
                <p>Often called "keyhole surgery," a thin camera is inserted through the navel to inspect and treat cysts, endometriosis, or damaged tubes.</p>
                <img src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?w=600&auto=format&fit=crop&q=60" alt="Laparoscopy Surgery Diagram" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3>Hysteroscopy</h3>
                <p>A thin telescope is passed through the cervix to view the inside of the uterus. Used to remove polyps or fibroids without cuts.</p>
                <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1170&auto=format&fit=crop" alt="Hysteroscopy Procedure View" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3>Myomectomy</h3>
                <p>Surgical removal of fibroids while keeping the uterus intact, specifically for women who plan to bear children in the future.</p>
                <img src="/img/ff3.avif" alt="Myomectomy Surgery Illustration" className="process-img" loading="lazy" />
              </div>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3>Tubal Cannulation</h3>
                <p>A procedure to clear blockages in the fallopian tubes, often performed during a hysteroscopy to restore natural fertility.</p>
                <img src="https://cdn.pixabay.com/photo/2017/10/03/20/13/laboratory-2813958_1280.jpg" alt="Tubal Cannulation Diagram" className="process-img" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Expert Care for Complex Cases</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Our experienced surgeons use the latest technology to ensure safe procedures and quick recovery.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule a Consultation</Link>
        </section>
    </main>
  );
}