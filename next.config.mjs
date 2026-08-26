/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },

  allowedDevOrigins: ['192.168.183.171'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'plus.unsplash.com', pathname: '/**' },
    ],
  },
  
  async redirects() {
    return [
      { source: '/blog/best-ivf-centre-in-jaipur', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-fertility-center-in-jaipur-2026', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-fertility-center-in-jaipur-rajasthan', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-hospital-in-jaipur', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-hospital-in-jaipur-2026', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-centre-in-jaipur-a-comprehensive-guide-to-your-options', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-centre-in-jaipur-success-rates', destination: '/blog/ivf-success-rates-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-centre-in-jaipur-fertility-journey', destination: '/blog/ivf-fertility-journey-jaipur', permanent: true },
      { source: '/blog/why-do-couples-choose-krisna-ivf-as-the-best-ivf-centre-in-jaipur', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/why-is-krisna-ivf-the-best-fertility-centre-in-jaipur-for-couples-planning-parenthood', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/best-ivf-center-jaipur-smart-fertility', destination: '/best-ivf-center-in-jaipur', permanent: true },
      { source: '/blog/why-is-krisna-ivf-considered-the-best-fertility-hospital-in-rajasthan', destination: '/best-ivf-center-in-jaipur', permanent: true },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ],
      },
    ];
  },
};

export default nextConfig;