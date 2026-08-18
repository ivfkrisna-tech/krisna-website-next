import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-sri-ganganagar',
  },
  title: 'Best IVF Center in Sri Ganganagar | Krisna IVF',
  description: 'Looking for the best IVF center in Sri Ganganagar? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterSriGanganagar() {
  return (
    <LocationPageTemplate 
      city="Sri Ganganagar"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Sri Ganganagar or the outskirts, our clinic is easily accessible."
    />
  );
}
