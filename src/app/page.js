import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: 'Krisna IVF & Fertility Center | Jaipur',
  description: 'Welcome to Krisna IVF, Jaipur\'s leading fertility center offering specialized IVF, IUI, and ICSI treatments.',
};

export default function HomePage() {
  // Enhanced Local & Medical Schema
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Krisna IVF Group",
    "image": "https://www.krisnaivfgroup5.com/img/Krisna_Logo-removebg-preview.png",
    "@id": "https://www.krisnaivfgroup5.com/#clinic",
    "url": "https://www.krisnaivfgroup5.com/",
    "telephone": "+91-XXXXXXXXXX", // Add actual phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Exact Street Address", // Add exact address
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302001", // Add actual PIN
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124, // Update with precise coordinates
      "longitude": 75.7873
    },
    "medicalSpecialty": ["Gynecologic", "Reproductive"],
    "availableService": [
      {
        "@type": "MedicalTest",
        "name": "In Vitro Fertilization (IVF)"
      },
      {
        "@type": "MedicalTest",
        "name": "Intracytoplasmic Sperm Injection (ICSI)"
      },
      {
        "@type": "MedicalTest",
        "name": "Intrauterine Insemination (IUI)"
      }
    ]
  };

  // AEO/GEO optimized FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the success rate of IVF at Krisna IVF Group in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Krisna IVF Group offers highly advanced clean-room certified labs, resulting in some of the highest IVF success rates in the Rajasthan region. Success depends on individual factors, which our specialists evaluate during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer IUI and ICSI treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive fertility treatments including IUI, ICSI, and full infertility assessments tailored to each patient's specific needs."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}