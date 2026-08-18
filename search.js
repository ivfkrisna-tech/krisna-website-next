const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (['.js', '.jsx', '.css', '.html', '.json'].includes(path.extname(file))) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.toLowerCase().includes('krishna')) {
          results.push(file);
        }
      }
    }
  });
  return results;
}

const found = walk(__dirname);
console.log(JSON.stringify(found, null, 2));
