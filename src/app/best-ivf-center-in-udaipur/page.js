import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Udaipur | Krisna IVF',
  description: 'Looking for the best IVF center in Udaipur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterUdaipur() {
  return (
    <LocationPageTemplate 
      city="Udaipur"
      nearbyAreas="Fatehpura, Hiran Magri, Sector 4, and Bapu Bazaar"
      localKeywords="We provide virtual consultations so patients in Udaipur can start their fertility journey without immediate travel."
    />
  );
}
