const fs = require('fs');
const path = require('path');

const seoData = {
  'ivf': {
    title: 'IVF Treatment in Jaipur | Best IVF Center | Krisna IVF Group',
    description: 'Experience high-success IVF treatment in Jaipur at Krisna IVF Group. Advanced clean-room lab, personalized fertility protocols, and expert specialists.'
  },
  'iui': {
    title: 'IUI Treatment in Jaipur | Best IUI Clinic | Krisna IVF Group',
    description: 'Affordable and effective Intrauterine Insemination (IUI) treatments in Jaipur at Krisna IVF Group. Expert fertility care to help you conceive naturally.'
  },
  'icsi': {
    title: 'ICSI Treatment in Jaipur | Male Infertility Solutions | Krisna IVF Group',
    description: 'Advanced ICSI (Intracytoplasmic Sperm Injection) treatment in Jaipur at Krisna IVF Group. Overcome severe male infertility with our cutting-edge embryology lab.'
  },
  'fertility_surgery': {
    title: 'Fertility Enhancing Surgery | Laparoscopy & Hysteroscopy | Krisna IVF Group',
    description: 'Expert fertility-enhancing surgeries in Jaipur including laparoscopy and hysteroscopy. Correct anatomical issues like fibroids and endometriosis.'
  },
  'donor': {
    title: 'Donor Programs (Egg, Sperm, Embryo) | Krisna IVF Group Jaipur',
    description: 'Ethical and transparent donor programs at Krisna IVF Group. We offer rigorously screened egg, sperm, and embryo donation services.'
  },
  'aboutus': {
    title: 'About Krisna IVF Group | Leading Fertility Specialists in Jaipur',
    description: 'Learn about Krisna IVF Group, our mission, state-of-the-art facilities, and our dedicated team of fertility specialists.'
  },
  'contact': {
    title: 'Contact Krisna IVF Group | Book Your Consultation in Jaipur',
    description: 'Get in touch with Krisna IVF Group in Jaipur. Book an appointment, find our clinic directions, and speak to our fertility experts today.'
  },
  'equipment': {
    title: 'State-of-the-Art IVF Equipment | Krisna IVF Group',
    description: 'Explore the advanced medical equipment and technology used at Krisna IVF Group, ensuring the highest success rates and safety for our patients.'
  },
  'lab-gallery': {
    title: 'Clean Room Certified Lab Gallery | Krisna IVF Group',
    description: 'Take a virtual tour of our state-of-the-art, clean-room certified embryology lab at Krisna IVF Group. See where the magic of life begins.'
  },
  'certificates': {
    title: 'Accreditations & Certificates | Krisna IVF Group',
    description: 'View the national and international accreditations, certifications, and awards earned by Krisna IVF Group for excellence in fertility care.'
  }
};

for (const [folder, meta] of Object.entries(seoData)) {
  const dirPath = path.join(__dirname, 'src', 'app', folder);
  if (fs.existsSync(dirPath)) {
    const layoutPath = path.join(dirPath, 'layout.jsx');
    const content = `export const metadata = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.description)},
};

export default function Layout({ children }) {
  return <>{children}</>;
}
`;
    fs.writeFileSync(layoutPath, content);
    console.log('Created layout for:', folder);
  } else {
    console.log('Directory not found:', folder);
  }
}
