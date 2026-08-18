import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-nagaur',
  },
  title: 'Best IVF Center in Nagaur | Krisna IVF',
  description: 'Looking for the best IVF center in Nagaur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterNagaur() {
  return (
    <LocationPageTemplate 
      city="Nagaur"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Nagaur or the outskirts, our clinic is easily accessible."
    />
  );
}
