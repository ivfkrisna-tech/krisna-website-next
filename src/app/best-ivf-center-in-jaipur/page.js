import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Jaipur | Krisna IVF',
  description: 'Looking for the best IVF center in Jaipur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterJaipur() {
  return (
    <LocationPageTemplate 
      city="Jaipur"
      nearbyAreas="Mansarovar, Vaishali Nagar, Malviya Nagar, and Tonk Road"
      localKeywords="Whether you live in the heart of Jaipur or the outskirts, our clinic is easily accessible."
    />
  );
}
