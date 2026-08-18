import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-sikar',
  },
  title: 'Best IVF Center in Sikar | Krisna IVF',
  description: 'Looking for the best IVF center in Sikar? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterSikar() {
  return (
    <LocationPageTemplate 
      city="Sikar"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Sikar or the outskirts, our clinic is easily accessible."
    />
  );
}
