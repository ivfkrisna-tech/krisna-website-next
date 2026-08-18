import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-hanumangarh',
  },
  title: 'Best IVF Center in Hanumangarh | Krisna IVF',
  description: 'Looking for the best IVF center in Hanumangarh? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterHanumangarh() {
  return (
    <LocationPageTemplate 
      city="Hanumangarh"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Hanumangarh or the outskirts, our clinic is easily accessible."
    />
  );
}
