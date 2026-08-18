import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-jodhpur',
  },
  title: 'Best IVF Center in Jodhpur | Krisna IVF',
  description: 'Looking for the best IVF center in Jodhpur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterJodhpur() {
  return (
    <LocationPageTemplate 
      city="Jodhpur"
      nearbyAreas="Sardarpura, Ratanada, Shastri Nagar, and Chopasni Housing Board"
      localKeywords="Our dedicated care coordinators ensure your travel from Jodhpur to our facility is entirely stress-free."
    />
  );
}
