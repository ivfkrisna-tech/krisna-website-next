"use client";

import Link from 'next/link';

export default function Footer() {
  const locations = [
    'Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 
    'Bikaner', 'Alwar', 'Bharatpur', 'Sikar', 'Bhilwara', 
    'Pali', 'Sri Ganganagar', 'Hanumangarh', 'Barmer', 
    'Chittorgarh', 'Nagaur', 'Jhunjhunu', 'Tonk', 
    'Sawai Madhopur', 'Jaisalmer'
  ];

  return (
    <footer className="footer" style={{ background: '#111827', color: '#e5e7eb', padding: '60px 5% 20px 5%', fontSize: '0.95rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          {/* Brand Info */}
          <div>
            <img 
              src="/img/Krisna_Logo-removebg-preview.png" 
              style={{ background: '#fff', padding: '10px', borderRadius: '8px', height: '60px', marginBottom: '20px' }} 
              alt="Krisna IVF Logo" 
            />
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#9ca3af' }}>
              Dedicated to helping couples realize their dream of parenthood through advanced technology, ethical practices, and compassionate care.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="https://www.facebook.com/krisnaivfgroup5/" aria-label="Facebook" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/krisna_ivf_group5/" aria-label="Instagram" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.youtube.com/@Krisnaivfgroup5" aria-label="YouTube" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links & Treatments */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link></li>
                <li><Link href="/aboutus" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link></li>
                <li><Link href="/faq" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>FAQs</Link></li>
                <li><Link href="/success" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Success Stories</Link></li>
                <li><Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Treatments</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link href="/ivf" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>IVF Treatment</Link></li>
                <li><Link href="/iui" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>IUI Treatment</Link></li>
                <li><Link href="/icsi" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>ICSI</Link></li>
                <li><Link href="/donor" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Donor Services</Link></li>
                <li><Link href="/fertility_surgery" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>Fertility Surgery</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Contact Us</h3>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-pink)', fontSize: '1.2rem', marginTop: '4px' }}></i>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                Plot No. 295 & 280, Intune, 3rd Floor,<br/>
                Gom Defence Colony, Vaishali Marg,<br/>
                Vaishali Nagar, Jaipur, Rajasthan - 302021
              </p>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <i className="fa-solid fa-phone" style={{ color: 'var(--brand-pink)', fontSize: '1.2rem', marginTop: '2px' }}></i>
              <a href="tel:+919119115355" style={{ color: '#9ca3af', textDecoration: 'none' }}>+91 91191 15355</a>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <i className="fa-solid fa-envelope" style={{ color: 'var(--brand-pink)', fontSize: '1.2rem', marginTop: '2px' }}></i>
              <a href="mailto:ivfkrisna@gmail.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>ivfkrisna@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', paddingBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>Best IVF Center Near You</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
            {locations.map((loc) => (
              <li key={loc}>
                <Link 
                  href={`/best-ivf-center-in-${loc.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ color: '#6b7280', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.target.style.color = '#fff'}
                  onMouseOut={(e) => e.target.style.color = '#6b7280'}
                >
                  {loc}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.85rem', color: '#6b7280' }}>
          &copy; {new Date().getFullYear()} Krisna IVF Center. All Rights Reserved. 
          <span style={{ margin: '0 10px' }}>|</span> 
          Designed & Developed by <a href="https://amazingit.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-pink)', textDecoration: 'none' }}>Amazing IT</a>
        </div>
      </div>
    </footer>
  );
}