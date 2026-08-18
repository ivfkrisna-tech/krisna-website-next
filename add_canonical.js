const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFiles() {
  const appDir = path.join(__dirname, 'src', 'app');
  walkDir(appDir, function(filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // If metadata is already exported
      if (content.includes('export const metadata = {') || content.includes('export const metadata =  {')) {
        // Skip if already has alternates
        if (content.includes('alternates:')) return;

        // Calculate the canonical path based on the file location relative to src/app
        let relativePath = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, '/');
        // Root is empty string
        let canonicalUrl = relativePath === '' ? '/' : `/${relativePath}`;

        let replacement = `export const metadata = {
  alternates: {
    canonical: '${canonicalUrl}',
  },`;

        // Replace the first occurrence
        content = content.replace(/export const metadata = \s*\{/, replacement);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added canonical to ${filePath}`);
      }
    }
  });
}

processFiles();
