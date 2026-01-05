const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

// Remove patterns like ,`, or ,``
const before = content;
content = content.replace(/,`,/g, '`,');
content = content.replace(/,``/g, '`,');

if (before !== content) {
  fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
  console.log('✓ Fixed extra comma patterns');
} else {
  console.log('No extra comma patterns found');
}
