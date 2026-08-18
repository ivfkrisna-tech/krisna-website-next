import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  alternates: {
    canonical: '/best-ivf-center-in-bikaner',
  },
  title: 'Best IVF Center in Bikaner | Krisna IVF',
  description: 'Looking for the best IVF center in Bikaner? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterBikaner() {
  return (
    <LocationPageTemplate 
      city="Bikaner"
      nearbyAreas="Sadul Ganj, Jai Narayan Vyas Colony, Pawan Puri, and Karni Nagar"
      localKeywords="We offer highly coordinated care plans for patients traveling from Bikaner, minimizing your clinic visits."
    />
  );
}
