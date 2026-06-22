"use client";

import useReveal from '@/hooks/useReveal';
import Link from 'next/link';

export default function AboutContent() {
  useReveal();

  return (
    <main>
       <section className="about-page-header">
          <div className="about-page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Our Story &amp; Vision</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Compassion. Science. Success.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> 
              <span style={{ margin: '0 10px', opacity: '0.6' }}>/</span> 
              <span style={{ color: '#fff' }}>About Us</span>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="why-wrapper">
            <div>
              <img src="/img/aboutus_2img.jpg" alt="Inside Krisna IVF Center Facility" className="why-img" loading="lazy" />
            </div>
            <div className="why-content">
              <h3 style={{ color: 'var(--brand-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem', fontWeight: '700' }}>Who We Are</h3>
              <h2 style={{ marginBottom: '25px' }}>Creating Miracles with <br /><span style={{ color: 'var(--brand-teal)' }}>Happiness &amp; Science</span></h2>
              <p>At Krisna IVF &amp; Fertility Center, we understand that the journey to parenthood is one of the most emotional phases of life. Founded on the pillars of ethics, transparency, and advanced medical science, we are dedicated to turning your dream of a family into reality.</p>
              <p>We combine state-of-the-art reproductive technology with a compassionate, personalized approach. Every patient is unique, and so is our treatment plan for them.</p>
              <ul className="check-list" style={{ marginTop: '30px' }}>
                <li>Ethical &amp; Transparent Practices</li>
                <li>World-Class Embryology Lab</li>
                <li>High Success Rates in IVF &amp; ICSI</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#fdfdfd' }}>
          <div className="grid-container">
            <div className="value-card">
              <div className="card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To provide the highest standard of fertility care with compassion, science, and a deep commitment to family building, ensuring accessibility and affordability for all.</p>
            </div>
            <div className="value-card">
              <div className="card-icon"><i className="fa-regular fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To be the most trusted fertility center globally, recognized for our ethical standards, high success rates, and the happy families we help create.</p>
            </div>
            <div className="value-card">
              <div className="card-icon"><i className="fa-regular fa-heart"></i></div>
              <h3>Our Values</h3>
              <p>Empathy, Integrity, and Innovation define us. We treat every patient like family, offering support beyond just medical treatment.</p>
            </div>
          </div>
        </section>

        <section className="expert-section reveal">
          <div className="expert-card">
            <div className="expert-img-box">
              <img src="https://cdn.pixabay.com/photo/2017/09/13/21/27/birth-2747060_1280.jpg" alt="Dr. Ssuniti - Chief IVF Specialist" loading="lazy" />
            </div>
            <div className="expert-info">
              <h4 className="expert-role">Chief Specialist</h4>
              <h2 style={{ marginBottom: '15px', color: 'var(--text-heading)' }}>Dr. Ssuniti</h2>
              <p className="expert-quote">
                "We believe that science works best when paired with a human touch. My team and I are dedicated to navigating you through the complexities of infertility with clarity and hope. Your dream is our mission."
              </p>
              <div>
                <Link href="/contact" className="btn-primary" style={{ padding: '14px 35px', fontSize: '0.95rem' }}>
                  Book Consultation <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Start Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Schedule a confidential consultation with our fertility specialists today.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Book Appointment</Link>
        </section>
      </main>
    
  );
}