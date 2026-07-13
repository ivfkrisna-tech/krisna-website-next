const fs = require('fs');

const mapping = {
  // new_seo_blogs.js
  'ivf-success-rates-by-age': '/img/blogs/ivf_success_age.png',
  'iui-vs-ivf-difference': '/img/blogs/iui_vs_ivf.png',
  'preparing-body-for-ivf-cycle': '/img/blogs/ivf_preparation.png',
  'unexplained-infertility-causes-diagnosis': '/img/blogs/unexplained_infertility.png',
  'ivf-cost-in-india-breakdown': '/img/blogs/ivf_cost.png',
  'male-infertility-causes-treatments': '/img/blogs/male_infertility.png',
  'freezing-your-eggs-best-age': '/img/blogs/egg_freezing.png',
  'two-week-wait-survival-guide': '/img/blogs/two_week_wait.png',
  'endometriosis-and-ivf-success': '/img/blogs/endometriosis.png',
  'low-amh-levels-what-it-means': '/img/blogs/low_amh.png',

  // blogs.js
  'best-ivf-center-jaipur-smart-fertility': '/img/blogs/smart_fertility.png',
  'microfluidic-sperm-sorting-lab-on-chip': '/img/blogs/microfluidic_sperm.png',
  'wearable-hormone-tracking-embryo-transfer': '/img/blogs/wearable_hormone.png',
  'probiotics-for-ivf-success-microbiome': '/img/blogs/probiotics_microbiome.png',
  'egg-rejuvenation-shugoshin-1-science': '/img/blogs/egg_rejuvenation.png',
  'gluten-and-fertility-gut-health': '/img/blogs/gut_health.png',
  'male-fertility-superfoods-zinc-selenium': '/img/blogs/male_superfoods.png',
  'managing-pcos-low-gi-foods-insulin': '/img/blogs/pcos_diet.png',
  '90-day-egg-cycle-fertility-impact': '/img/ivf-1.png',
  'caffeine-and-conception-safe-zone': '/img/aboutus_2img.jpg'
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const blocks = content.split(/(?=\s*\{\s*slug:)/);
  
  const newBlocks = blocks.map(block => {
    const slugMatch = block.match(/slug:\s*'([^']+)'/);
    if (slugMatch) {
      const slug = slugMatch[1];
      const newImage = mapping[slug];
      if (newImage) {
        return block.replace(/image:\s*'[^']+'/, "image: '" + newImage + "'");
      }
    }
    return block;
  });

  fs.writeFileSync(filePath, newBlocks.join(''));
}

updateFile('src/data/blogs.js');
updateFile('src/data/new_seo_blogs.js');
