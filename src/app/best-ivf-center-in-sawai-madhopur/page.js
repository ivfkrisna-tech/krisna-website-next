import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-sawai-madhopur',
  },
  title: 'Best IVF Center in Sawai Madhopur | Krisna IVF',
  description: 'Looking for the best IVF center in Sawai Madhopur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterSawaiMadhopur() {
  return (
    <LocationPageTemplate 
      city="Sawai Madhopur"
      nearbyAreas="the city and surrounding regions"
      localKeywords="Whether you live in the heart of Sawai Madhopur or the outskirts, our clinic is easily accessible."
    />
  );
}
