import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-tonk',
  },
  title: 'Best IVF Center in Tonk | Krisna IVF',
  description: 'Looking for the best IVF center in Tonk? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterTonk() {
  return (
    <LocationPageTemplate 
      city="Tonk"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Tonk or the outskirts, our clinic is easily accessible."
    />
  );
}
