const fs = require('fs');
const path = require('path');

// Carefully curated mapping using the best, high-res images from public/img
const mappings = {
  'certificates.css': '/img/Free_Professional_Medical_Certificate_Template_Edit_and_Download_Landscape_b3e757cfe2.jpg',
  'clean_room_crtfd_lab.css': '/img/laboratory-2815641_1280.jpg',
  'contact.css': '/img/homepage_CTA.webp',
  'donor.css': '/img/donor_page.jpg',
  'equipment.css': '/img/Philips-Allura-Xper-FD10-Cath-Lab..jpg',
  'faq.css': '/img/doc_img.jpg',
  'fertility_surgery.css': '/img/cath-lab-machine.jpg',
  'icsi.css': '/img/ivf-2.png',
  'infertility_assessment.css': '/img/dr.giriraj123.jpeg',
  'iui.css': '/img/blood-test-5601437_1280.jpg',
  'ivf.css': '/img/ivf-1.png',
  'our_team.css': '/img/dr.ssunita.png',
  'success.css': '/img/gggggg.jpg',
  'blog.css': '/img/aboutus_2img.png'
};

const stylesDir = path.join(__dirname, 'src', 'app', 'styles');

for (const [filename, imgPath] of Object.entries(mappings)) {
  const filePath = path.join(stylesDir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Use regex to replace the background url in the .page-header / .blog-page-header / .blog-detail-hero
    let newContent = content.replace(/url\('\/img\/[^']+'\)/g, `url('${imgPath}')`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filename} to use ${imgPath}`);
    } else {
      console.log(`No change made to ${filename}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}
