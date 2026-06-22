import SurgeryContent from "@/components/SurgeryContent";

export const metadata = {
  title: 'Fertility Enhancing Surgeries in Jaipur | Krishna IVF Group',
  description: 'Expert laparoscopic and hysteroscopic fertility surgeries at Krishna IVF, Jaipur. Minimally invasive care for structural fertility issues.',
};

export default function SurgeryPage() {
  const surgerySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Fertility Enhancing Surgeries",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group",
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