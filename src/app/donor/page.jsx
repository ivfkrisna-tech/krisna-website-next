import DonorContent from "@/components/DonorContent";

export const metadata = {
  title: 'Donor IVF Services in Jaipur | Krishna IVF Group',
  description: 'Explore donor egg and embryo IVF services.',
};



export default function DonorPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Donor IVF Services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Krishna IVF Group",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan"
      }
    },
    "description": "Fertility treatment using donor eggs or embryos for couples struggling with infertility."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DonorContent />
    </>
  );
}