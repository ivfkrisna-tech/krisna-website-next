import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Pali | Krisna IVF',
  description: 'Looking for the best IVF center in Pali? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterPali() {
  return (
    <LocationPageTemplate 
      city="Pali"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Pali or the outskirts, our clinic is easily accessible."
    />
  );
}
