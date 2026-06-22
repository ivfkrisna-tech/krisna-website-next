export default function FloatButtons() {
  return (
    <div className="float-container">
      <a 
        href="https://wa.me/919119115355" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-bubble wa-bg" 
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a 
        href="tel:+919119115355" 
        className="float-bubble call-bg" 
        aria-label="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
}