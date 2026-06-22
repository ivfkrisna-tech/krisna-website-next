"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Next.js version of useLocation

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu band ho jaye jab route change ho
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="mainHeader">
        <Link href="/">
          <img src="/img/Krisna_Logo-removebg-preview.png" alt="Krisna IVF Center Logo" className="header-logo-img" />
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <div className="dropdown">
            <span style={{ cursor: 'pointer' }}>Services <i className="fa-solid fa-angle-down" style={{ fontSize: '12px', marginLeft: '4px' }}></i></span>
            <div className="dropdown-menu">
              <Link href="/ivf">IVF Treatment</Link>
              <Link href="/iui">IUI Procedure</Link>
              <Link href="/icsi">ICSI</Link>
              <Link href="/donor">Donor Programs</Link>
              <Link href="/fertility_surgery">Fertility Surgery</Link>
            </div>
          </div>
          <Link href="/faq">FAQ</Link>
          <Link href="/success">Success Stories</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://crm-ebon-two.vercel.app/login" className="btn-primary" style={{ padding: '10px 25px', borderRadius: '8px', color: '#fff' }}>Login</a>
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu} aria-label="Open Menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`offcanvas-overlay${menuOpen ? ' active' : ''}`} onClick={toggleMenu}></div>
      <div className={`offcanvas-menu${menuOpen ? ' active' : ''}`} id="mobileMenu">
        <div className="offcanvas-header">
          <img src="/img/Krisna_Logo-removebg-preview.png" alt="Krisna IVF Logo" style={{ height: '40px' }} />
          <div className="close-btn" onClick={toggleMenu}>&times;</div>
        </div>
        <div className="mobile-links">
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <div>
            <span className="mobile-sub-group-title">Treatments</span>
            <div className="mobile-sub-links">
              <Link href="/ivf">IVF Treatment</Link>
              <Link href="/iui">IUI Procedure</Link>
              <Link href="/icsi">ICSI</Link>
              <Link href="/donor">Donor Services</Link>
              <Link href="/fertility_surgery">Fertility Surgery</Link>
            </div>
          </div>
          <Link href="/faq">FAQ</Link>
          <Link href="/success">Success Stories</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
          <a href="https://crm-ebon-two.vercel.app/login" style={{ color: 'var(--brand-pink)' }}>Patient Login</a>
        </div>
      </div>
    </>
  );
}