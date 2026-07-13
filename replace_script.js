const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src');
let changed = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = content
        .replace(/Krishna/g, 'Krisna')
        .replace(/krishna/g, 'krisna')
        .replace(/KRISHNA/g, 'KRISNA');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changed++;
        console.log('Updated:', file);
    }
});

console.log(`Replaced in ${changed} files.`);
