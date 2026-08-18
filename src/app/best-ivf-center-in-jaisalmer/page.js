import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Jaisalmer | Krisna IVF',
  description: 'Looking for the best IVF center in Jaisalmer? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterJaisalmer() {
  return (
    <LocationPageTemplate 
      city="Jaisalmer"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Jaisalmer or the outskirts, our clinic is easily accessible."
    />
  );
}
