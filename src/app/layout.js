
import "./styles/global.css";
import "./styles/icsi.css";
import "./styles/ivf.css";
import "./styles/iui.css";
import "./styles/infertility_assessment.css";
import "./styles/our_team.css";
import "./styles/clean_room_crtfd_lab.css";
import "./styles/aboutus.css";
import "./styles/blog.css";
import "./styles/certificates.css";
import "./styles/contact.css";
import "./styles/donor.css";
import "./styles/equipment.css";
import "./styles/faq.css";
import "./styles/fertility_surgery.css";
import "./styles/index.css";
import "./styles/success.css";
// Imports ko organize karein
import Script from "next/script";


// Components (Path sahi check kar lein - agar components folder src ke bahar hai toh ../)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";

export const metadata = {
  metadataBase: new URL('https://www.krisnaivfgroup5.com'),
  title: {
    default: "Krishna IVF Group | Advanced Fertility Care in Jaipur",
    template: "%s | Krishna IVF Group"
  },
  description: "Compassionate and advanced fertility solutions including IVF, IUI, and ICSI by our expert team of specialists in Jaipur, Rajasthan.",
  verification: {
    google: "xCb2GxwneoFunV5V_N1GAbOE06rPgqG5ommrlsAmMHc",
  },
  openGraph: {
    title: 'Krishna IVF Group | Best IVF Center in Jaipur',
    description: 'Advanced fertility solutions including IVF, IUI, and ICSI. Book your consultation today.',
    url: 'https://www.krisnaivfgroup5.com',
    siteName: 'Krishna IVF Group',
    images: [
      {
        url: '/img/Krisna_Logo-removebg-preview.png', 
        width: 1200,
        height: 630,
        alt: 'Krishna IVF Group Jaipur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna IVF Group | Advanced Fertility Care',
    description: 'Compassionate fertility solutions including IVF, IUI, and ICSI in Jaipur.',
    images: ['/img/Krisna_Logo-removebg-preview.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TEN880Y6XN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-TEN880Y6XN');
            `,
          }}
        />
        {/* FontAwesome yahan add karein taaki icons wapas aa jayein */}
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