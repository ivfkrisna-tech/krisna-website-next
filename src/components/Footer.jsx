import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img 
            src="/img/Krisna_Logo-removebg-preview.png" 
            style={{ background: '#fff', padding: '10px', borderRadius: '4px', height: '50px', marginBottom: '20px' }} 
            alt="Krisna IVF Logo" 
          />
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Dedicated to helping couples realize their dream of parenthood through advanced technology and compassionate care.
          </p>
          <div className="social-icons" style={{ marginTop: '20px' }}>
            <a href="https://www.facebook.com/krisnaivfgroup5/" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.instagram.com/krisna_ivf_group5/" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@Krisnaivfgroup5" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/success">Success Stories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Treatments</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link href="/ivf">IVF</Link></li>
            <li><Link href="/iui">IUI</Link></li>
            <li><Link href="/icsi">ICSI</Link></li>
            <li><Link href="/donor">Donor Services</Link></li>
            <li><Link href="/fertility_surgery">Fertility Surgery</Link></li>
          </ul>
        </div>

        <div>
          <h3>Top Locations</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link href="/best-ivf-center-in-jaipur">Best IVF Center in Jaipur</Link></li>
            <li><Link href="/best-ivf-center-in-jodhpur">Best IVF Center in Jodhpur</Link></li>
            <li><Link href="/best-ivf-center-in-udaipur">Best IVF Center in Udaipur</Link></li>
            <li><Link href="/best-ivf-center-in-kota">Best IVF Center in Kota</Link></li>
            <li><Link href="/best-ivf-center-in-ajmer">Best IVF Center in Ajmer</Link></li>
            <li><Link href="/best-ivf-center-in-bikaner">Best IVF Center in Bikaner</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p style={{ marginBottom: '10px' }}>
            <i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> 
            Plot No. 295 & 280, Intune, 3rd Floor,
            Gom Defence Colony, Vaishali Marg,
            Vaishali Nagar, Jaipur, Rajasthan - 302021
          </p>
          <p style={{ marginBottom: '10px' }}>
            <a href="tel:+919119115355" style={{ color: '#ccc' }}>
              <i className="fa-solid fa-phone" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> +91 91191 15355
            </a>
          </p>
          <p>
            <a href="mailto:teamkrisnaivf@gmail.com" style={{ color: '#ccc' }}>
              <i className="fa-solid fa-envelope" style={{ color: 'var(--brand-pink)', width: '20px' }}></i> ivfkrisna@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '50px', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', opacity: '0.7' }}>
        &copy; 2026 Krisna IVF Center. All Rights Reserved. Designed & Developed by <a href="https://amazingit.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-pink)', fontWeight: 'bold' }}>Amazing IT</a>.
      </div>
    </footer>
  );
}