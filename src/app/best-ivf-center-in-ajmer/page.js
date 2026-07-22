import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Ajmer | Krisna IVF',
  description: 'Looking for the best IVF center in Ajmer? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterAjmer() {
  return (
    <LocationPageTemplate 
      city="Ajmer"
      nearbyAreas="Vaishali Nagar, Makarwali Road, Pushkar Road, and Civil Lines"
      localKeywords="Located just a short drive from Ajmer, we offer unparalleled fertility success rates for couples in the region."
    />
  );
}
