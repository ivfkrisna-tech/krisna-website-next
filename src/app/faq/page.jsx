"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error(err));
  }, []);

  // Category ke hisaab se group karna
  const categories = [...new Set(faqs.map(faq => faq.category || "General & First Steps"))];

  return (
    <main className="faq-page">
      {/* Header - Aapki CSS ke .page-header ke sath match karega */}
      <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Frequently Asked Questions</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Your fertility journey clarified. Answers to common concerns.</p>
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span style={{ margin: '0 5px', opacity: '0.6' }}>/</span> FAQ
            </div>
          </div>
        </section>

      {/* Accordion Sections */}
      <section style={{ padding: 'var(--section-padding)' }}>
        <div className="faq-wrapper">
          {categories.map((cat, idx) => (
            <div key={idx} className="faq-category-group">
              <h2 className="category-title">{cat}</h2>
              
              {faqs.filter(f => (f.category || "General & First Steps") === cat).map(faq => (
                <details key={faq.slug || faq._id} className="faq-item">
                  <summary>{faq.title}</summary>
                  {/* .faq-content class CSS mein define hai, yahan wrapper use kar rahe hain */}
                  <div className="faq-content" dangerouslySetInnerHTML={{ __html: faq.content }} />
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="faq-cta-section" style={{ 
        background: 'var(--brand-teal)', 
        padding: '80px 5%', 
        textAlign: 'center', 
        color: '#fff',
        marginTop: '60px' 
      }}>
        <h2 style={{ color: '#fff', marginBottom: '15px' }}>Still have questions?</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '1.1rem' }}>
          Can't find the answer you're looking for? Please chat with our friendly team.
        </p>
        <Link href="/contact" style={{ 
          background: '#fff', 
          color: 'var(--brand-teal)', 
          padding: '15px 40px', 
          borderRadius: '50px', 
          textDecoration: 'none', 
          fontWeight: '600',
          display: 'inline-block'
        }}>
          Contact Us
        </Link>
      </section>
    </main>
  );
}