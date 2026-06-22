import HomeContent from "@/components/HomeContent";

export const metadata = {
  title: 'Krishna IVF & Fertility Center | Jaipur',
  description: 'Welcome to Krishna IVF, Jaipur\'s leading fertility center.',
};

export default function HomePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Krishna IVF Group",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "url": "https://www.krisnaivfgroup5.com/"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomeContent />
    </>
  );
}