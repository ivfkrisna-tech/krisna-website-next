const fs = require('fs');
const path = require('path');

const mappings = {
  'certificates.css': '/img/Free_Professional_Medical_Certificate_Template_Edit_and_Download_Landscape_b3e757cfe2.jpg',
  'clean_room_crtfd_lab.css': '/img/laboratory-2815641_1280.jpg',
  'contact.css': '/img/homepage_CTA.webp',
  'donor.css': '/img/donor_page.jpg',
  'equipment.css': '/img/cath-lab-machine.jpg',
  'faq.css': '/img/aboutpage_img.png',
  'fertility_surgery.css': '/img/vuv.jpg',
  'icsi.css': '/img/icse_1.avif',
  'infertility_assessment.css': '/img/blood-test-5601437_1280.jpg',
  'iui.css': '/img/heyy.avif',
  'ivf.css': '/img/ivf-1.png',
  'our_team.css': '/img/doc_img.jpg',
  'success.css': '/img/gggggg.jpg'
};

const stylesDir = path.join(__dirname, 'src', 'app', 'styles');

for (const [filename, imgPath] of Object.entries(mappings)) {
  const filePath = path.join(stylesDir, filename);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace the exact background url
    const newContent = content.replace(/url\('\/img\/homebanner\.png'\)/g, `url('${imgPath}')`);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filename} to use ${imgPath}`);
    } else {
      console.log(`No change made to ${filename} (pattern not found)`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}
