import "./styles/global.css";
import "./styles/index.css";

import Script from "next/script";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";

export const metadata = {
  alternates: {
    canonical: '/',
  },
  metadataBase: new URL('https://www.krisnaivfgroup5.com'),
  title: {
    default: "Krisna IVF Group | Advanced Fertility Care in Jaipur",
    template: "%s | Krisna IVF Group"
  },
  description: "Compassionate and advanced fertility solutions including IVF, IUI, and ICSI by our expert team of specialists in Jaipur, Rajasthan.",
  verification: {
    google: "xCb2GxwneoFunV5V_N1GAbOE06rPgqG5ommrlsAmMHc",
  },
  openGraph: {
    title: 'Krisna IVF Group | Best IVF Center in Jaipur',
    description: 'Advanced fertility solutions including IVF, IUI, and ICSI. Book your consultation today.',
    url: 'https://www.krisnaivfgroup5.com',
    siteName: 'Krisna IVF Group',
    images: [
      {
        url: '/img/Krisna_Logo-removebg-preview.png', 
        width: 1200,
        height: 630,
        alt: 'Krisna IVF Group Jaipur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krisna IVF Group | Advanced Fertility Care',
    description: 'Compassionate fertility solutions including IVF, IUI, and ICSI in Jaipur.',
    images: ['/img/Krisna_Logo-removebg-preview.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect & DNS-Prefetch for Fast Rendering */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.pixabay.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google Tag Manager - Lazy load on mobile to prevent blocking FCP/LCP */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8MZ8GJ9');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-TEN880Y6XN" />
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-TEN880Y6XN');
            `,
          }}
        />

        {/* Non-blocking FontAwesome for instant First Contentful Paint */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8MZ8GJ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatButtons />
      </body>
    </html>
  );
}