import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-bharatpur',
  },
  title: 'Best IVF Center in Bharatpur | Krisna IVF',
  description: 'Looking for the best IVF center in Bharatpur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterBharatpur() {
  return (
    <LocationPageTemplate 
      city="Bharatpur"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Bharatpur or the outskirts, our clinic is easily accessible."
    />
  );
}
