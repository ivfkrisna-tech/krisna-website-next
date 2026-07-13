const fs = require('fs');
['src/data/blogs.js', 'src/data/new_seo_blogs.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\\`/g, '`');
  fs.writeFileSync(file, content);
});
