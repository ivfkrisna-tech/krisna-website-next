"use client";

import useReveal from '@/hooks/useReveal';
import { useState } from "react";


const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Krishna IVF Group",
  "description": "Get in touch with Krishna IVF for fertility consultation in Jaipur.",
  "mainEntity": {
    "@type": "MedicalBusiness",
    "name": "Krishna IVF Group",
    "telephone": "+919119115355",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, House of Doctors, Plot No.4, Lal Niwas, Hira Bagh, Tonk Road",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302021",
      "addressCountry": "IN"
    }
  }
};

export default function ContactPage() {
  useReveal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      enquiryType: e.target.enquiryType.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main>
        <section className="page-header">
          <div className="page-header-content reveal active">
            <h1 style={{ color: '#ffffff' }}>Get in Touch</h1>
            <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>We are here to support you with expertise and compassion.</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)', background: '#fff' }}>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
              <h3>Call Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>+91 911911 5355</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Mon-Sat: 9am - 7pm</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
              <h3>Email Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>teamkrisnaivf@gmail.com</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>24/7 Online Support</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
              <h3>Visit Us</h3>
              <p style={{ marginBottom: '5px', fontWeight: '500' }}>House of Doctors, Jaipur</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Near SMS Hospital</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section reveal" style={{ padding: 'var(--section-padding)' }}>
          <div className="contact-split">
            <div className="contact-form-box">
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Send us a Message</h2>
              <p style={{ marginBottom: '30px', fontSize: '0.95rem', color: '#666' }}>Fill out the form below and we will get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" name="firstName" placeholder="First Name" required />
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select name="enquiryType">
                    <option>General Enquiry</option>
                    <option>IVF Treatment</option>
                    <option>IUI Treatment</option>
                    <option>ICSI Treatment</option>
                    <option>Donor Program</option>
                    <option>Fertility Surgery</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="How can we help you today?"></textarea>
                </div>
                <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%' }}>
                  {loading ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>

            <div className="address-box">
              <h3>Visit Our Center</h3>
              <div className="address-item">
                <i className="fa-solid fa-map-location-dot"></i>
                <div>
                  <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '5px' }}>Headquarters</strong>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                    3rd Floor, House of Doctors, Plot No.4,<br />
                    Lal Niwas, Hira Bagh, Tonk Road,<br />
                    Near SMS Hospital, Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>
              <iframe
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.866597255167!2d75.8078652!3d26.8453472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70000000001%3A0x0!2sKrishna%20IVF%20Group!5e0!3m2!1sen!2sin!4v1680000000000"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location of Krisna IVF Center"
              ></iframe>
            </div>
          </div>
        </section>
        
        <section className="section light-bg reveal" style={{ padding: 'var(--section-padding)', backgroundColor: '#fcf8fa' }}>
          <h2 className="section-title">Common Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <details>
              <summary>How do I book a first appointment? </summary>
              <p>You can book directly through the form above, call our helpline at +91 911911 5355, or click the "Book Appointment" button in the navigation bar.</p>
            </details>
            <details>
              <summary>Do you offer online video consultations? </summary>
              <p>Yes, we offer remote consultations via WhatsApp Video or Zoom for patients outside Jaipur. Please mention this in your enquiry message.</p>
            </details>
            <details>
              <summary>What are the consultation timings? </summary>
              <p>Our OPD is open Monday through Saturday from 9:00 AM to 7:00 PM. Sunday consultations are available by prior appointment only.</p>
            </details>
            <details>
              <summary>Is the initial consultation free? </summary>
              <p>We frequently run complimentary consultation camps. Please check our social media channels or call us to inquire about current offers.</p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}