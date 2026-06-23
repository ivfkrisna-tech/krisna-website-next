"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';

export default function SuccessStoriesContent({ initialStories }) {
  useReveal();
  const [stories, setStories] = useState(initialStories || []);

  return (
    <main>
      <section className="page-header">
        <div className="page-header-content reveal active">
          <h1 style={{ color: '#ffffff' }}>Real Stories of Hope</h1>
          <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Every baby born is a miracle we cherish.</p>
        </div>
      </section>

      <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
        
        <div className="stories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
          
          {stories.length > 0 ? (
            stories.map((story) => (
              <div key={story._id} className="story-card" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                {story.fileUrl && (
                  <img 
                    src={`/uploads/${story.fileUrl}`} 
                    alt={story.title} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
                  />
                )}
                <h3>{story.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: story.content }} />
                {story.author && <div className="story-author">- {story.author}</div>}
              </div>
            ))
          ) : (
            <p>No success stories found yet.</p>
          )}

        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Start Your Own Success Story</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.1rem' }}>Your journey to parenthood begins with a single step. Book a consultation with our experts today.</p>
          <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none' }}>Schedule Appointment</Link>
        </section>
    </main>
  );
}