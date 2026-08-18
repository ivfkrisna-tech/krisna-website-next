import IVFContent from "@/components/IVFContent";

export const metadata = {
  alternates: {
    canonical: '/ivf',
  },
  title: 'IVF Treatment in Jaipur | Krisna IVF Center',
  description: 'Experience high-success IVF treatment in Jaipur. From advanced lab technology to personalized fertility protocols, we guide you to parenthood.',
};

export default function IVFPage() {
  const ivfSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "In Vitro Fertilisation (IVF)",
    "description": "A fertility treatment where eggs are retrieved and fertilized with sperm in a lab, then transferred as embryos to the uterus.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krisna IVF Center",
      "address": { "@type": "PostalAddress", "addressLocality": "Jaipur" }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivfSchema) }}
      />
      <IVFContent />
    </>
  );
}