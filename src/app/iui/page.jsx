import IUIContent from "@/components/IUIContent";

export const metadata = {
  alternates: {
    canonical: '/iui',
  },
  title: 'IUI Treatment in Jaipur | Krisna IVF Center',
  description: 'Learn about IUI (Intrauterine Insemination) at Krisna IVF. A simple, affordable, and effective fertility procedure.',
};

export default function IUIPage() {
  const iuiSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Intrauterine Insemination (IUI)",
    "description": "A fertility treatment involving the placement of sperm into the uterus to facilitate fertilization.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iuiSchema) }}
      />
      <IUIContent />
    </>
  );
}