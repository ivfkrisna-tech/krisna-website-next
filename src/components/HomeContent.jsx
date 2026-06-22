"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import useReveal from '@/hooks/useReveal';

export default function HomeContent() {
  useReveal();
useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
              const count = +counter.innerText.replace('%', '');
              const inc = target / 100;
              if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '%';
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target + '%';
              }
            };
            updateCount();
          });
        }
      });
    }, { threshold: 0.1 });

    const heroEl = document.querySelector('.hero-enhanced');
    if (heroEl) observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      <main>
        {/* Hero Section */}
        <section className="hero-enhanced">
          <div className="container-hero">
            <div className="hero-txt-col">
              <div className="hero-tag"><i className="fa-solid fa-star"></i> Top Rated Fertility Center</div>
              <h1 className="hero-heading">
                Bring Home the <br /> Joy of <span>Parenthood.</span>
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#666', maxWidth: '90%', marginBottom: '30px' }}>
                We combine advanced science with heartfelt compassion to turn your dreams into reality. Experience world-class IVF treatment personalized just for you.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary pulse-btn">Book Consultation</Link>
                <Link href="/success" className="btn-hero-outline">
                  <div className="play-circle"><i className="fa-solid fa-play"></i></div>
                  <span>Watch Success Stories</span>
                </Link>
              </div>
              <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex' }}>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Happy Patient" style={{ width: '40px', borderRadius: '50%', border: '3px solid #fff' }} />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Happy Patient" style={{ width: '40px', borderRadius: '50%', border: '3px solid #fff', marginLeft: '-15px' }} />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Happy Patient" style={{ width: '40px', borderRadius: '50%', border: '3px solid #fff', marginLeft: '-15px' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <b style={{ color: '#222', display: 'block', lineHeight: '1.2' }}>1,500+ Happy Families</b>
                  <div style={{ color: '#f1c40f', fontSize: '12px' }}>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-img-col">
              <div className="hero-blob"></div>
              <div className="main-hero-img-box">
                <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop" alt="Mother and Baby sharing a happy moment" width="600" height="400" />
              </div>
              <div className="glass-badge">
                <div className="badge-icon"><i className="fa-solid fa-baby-carriage"></i></div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0, fontSize: '1.6rem', color: 'var(--brand-teal-dark)' }} className="counter" data-target="92">0%</h4>
                  <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Your Path to Parenthood</h2>
          <div className="journey-wrapper">
            <div className="journey-step">
              <div className="step-circle"><i className="fa-regular fa-comments"></i></div>
              <h3>1. Consultation</h3>
              <p>Meet our experts to discuss your history and goals.</p>
            </div>
            <div className="journey-step">
              <div className="step-circle"><i className="fa-solid fa-vial-virus"></i></div>
              <h3>2. Evaluation</h3>
              <p>Comprehensive testing to find the root cause.</p>
            </div>
            <div className="journey-step">
              <div className="step-circle"><i className="fa-solid fa-user-doctor"></i></div>
              <h3>3. Treatment</h3>
              <p>Personalized protocols (IVF/IUI) utilizing advanced tech.</p>
            </div>
            <div className="journey-step">
              <div className="step-circle"><i className="fa-solid fa-hands-holding-child"></i></div>
              <h3>4. Success</h3>
              <p>Pregnancy support and care till you hold your baby.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#f4fcfc' }}>
          <h2 className="section-title">Clinical Excellence</h2>
          <div className="grid-services">
            <div className="service-card">
              <i className="fa-solid fa-dna service-icon"></i>
              <h3>IVF Treatment</h3>
              <p>Advanced In-Vitro Fertilization using state-of-the-art lab technology.</p>
              <Link href="/ivf" className="service-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-syringe service-icon"></i>
              <h3>IUI Procedure</h3>
              <p>A less invasive first step for many couples, optimizing timing.</p>
              <Link href="/iui" className="service-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-hand-holding-heart service-icon"></i>
              <h3>Donor Program</h3>
              <p>Ethical and strictly screened donor egg/sperm programs.</p>
              <Link href="/donor" className="service-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-user-md service-icon"></i>
              <h3>Fertility Surgery</h3>
              <p>Minimally invasive laparoscopy to correct issues.</p>
              <Link href="/fertility_surgery" className="service-link">Read More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <h2 className="section-title">Inside Our Center</h2>
          <div className="gallery-grid">
            <Link href="/lab-gallery" className="gallery-item">
              <img src="/img/homepage3_img.png" alt="Advanced Clean Room IVF Laboratory" loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-txt"><h4>Advanced Lab</h4><span>Explore Tech</span></div></div>
            </Link>
            <Link href="/our-team" className="gallery-item">
              <img src="/img/homepage4_img.png" alt="Expert Fertility Doctors Team" loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-txt"><h4>Expert Team</h4><span>Meet Doctors</span></div></div>
            </Link>
            <Link href="/equipment" className="gallery-item">
              <img src="/img/homepage5_img.png" alt="Modern Medical Equipment" loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-txt"><h4>Modern Equip</h4><span>View Facilities</span></div></div>
            </Link>
            <Link href="/certificates" className="gallery-item">
              <img src="/img/homepage5.img.png" alt="Medical Accreditations" loading="lazy" />
              <div className="gallery-overlay"><div className="gallery-txt"><h4>Accreditations</h4><span>View Awards</span></div></div>
            </Link>
          </div>
        </section>

        {/* Why Us */}
        <section className="section reveal">
          <div className="why-section">
            <div className="why-grid">
              <div>
                <img src="https://cdn.pixabay.com/photo/2016/07/24/13/03/baby-1538338_1280.jpg" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} alt="Doctor counseling patient" loading="lazy" />
              </div>
              <div>
                <h2 style={{ marginBottom: '25px' }}>Why Choose <span style={{ color: 'var(--brand-pink)' }}>Krisna IVF?</span></h2>
                <p>We understand that fertility is an emotional journey. We blend medical precision with human empathy to give you the best chance of success.</p>
                <ul className="feature-list" style={{ marginTop: '30px' }}>
                  <li>
                    <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                    <div><strong>Personalized Care:</strong> No cookie-cutter approach. Your protocol is unique.</div>
                  </li>
                  <li>
                    <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                    <div><strong>Transparent Pricing:</strong> Ethical costs with no hidden surprises.</div>
                  </li>
                  <li>
                    <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                    <div><strong>High Success Rates:</strong> Consistent results above industry standards.</div>
                  </li>
                </ul>
                <Link href="/aboutus" className="btn-primary" style={{ marginTop: '20px' }}>More About Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#f9f7f2' }}>
          <h2 className="section-title">Stories of Hope</h2>
          <div className="testimonials-row">
            <div className="review-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="review-text">"After 5 years of trying, Krisna IVF gave us our miracle. The staff was incredibly supportive."</p>
              <div className="reviewer">- Anjali & Rahul</div>
            </div>
            <div className="review-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="review-text">"Best fertility center in Jaipur. The doctors explained everything clearly and gave us hope."</p>
              <div className="reviewer">- Priya S.</div>
            </div>
            <div className="review-card">
              <i className="fa-solid fa-quote-right quote-icon"></i>
              <p className="review-text">"Thank you for completing our family. The facilities are world-class."</p>
              <div className="reviewer">- Meena K.</div>
            </div>
          </div>
        </section>

        {/* CTA */}
       <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Start Your Journey Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>Schedule a confidential consultation with our specialists.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Book Appointment</Link>
        </section>
      </main>
      
    </>
  );
}