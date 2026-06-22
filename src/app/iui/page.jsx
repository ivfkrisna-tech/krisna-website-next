import IUIContent from "@/components/IUIContent";

export const metadata = {
  title: 'IUI Treatment in Jaipur | Krishna IVF Center',
  description: 'Learn about IUI (Intrauterine Insemination) at Krishna IVF. A simple, affordable, and effective fertility procedure.',
};

export default function IUIPage() {
  const iuiSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Intrauterine Insemination (IUI)",
    "description": "A fertility treatment involving the placement of sperm into the uterus to facilitate fertilization.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Center",
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