import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = {
  title: 'Best IVF Center in Kota | Krisna IVF',
  description: 'Looking for the best IVF center in Kota? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterKota() {
  return (
    <LocationPageTemplate 
      city="Kota"
      nearbyAreas="Talwandi, Mahaveer Nagar, Dadabari, and Gumanpura"
      localKeywords="With excellent highway connectivity from Kota, reaching our premier fertility center has never been easier."
    />
  );
}
