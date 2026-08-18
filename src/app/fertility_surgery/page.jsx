import SurgeryContent from "@/components/SurgeryContent";

export const metadata = {
  alternates: {
    canonical: '/fertility_surgery',
  },
  title: 'Fertility Enhancing Surgeries in Jaipur | Krisna IVF Group',
  description: 'Expert laparoscopic and hysteroscopic fertility surgeries at Krisna IVF, Jaipur. Minimally invasive care for structural fertility issues.',
};

export default function SurgeryPage() {
  const surgerySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Fertility Enhancing Surgeries",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krisna IVF Group",
      "address": { "@type": "PostalAddress", "addressLocality": "Jaipur" }
    },
    "description": "Minimally invasive laparoscopic and hysteroscopic surgeries for fertility restoration."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surgerySchema) }}
      />
      <SurgeryContent />
    </>
  );
}