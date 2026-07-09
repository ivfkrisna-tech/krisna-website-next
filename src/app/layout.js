
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
  title: "Krishna IVF Group | Advanced Fertility Care in Jaipur",
  description: "Compassionate and advanced fertility solutions including IVF, IUI, and ICSI by our expert team in Jaipur.",
  verification: {
    google: "xCb2GxwneoFunV5V_N1GAbOE06rPgqG5ommrlsAmMHc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatButtons />
      </body>
    </html>
  );
}