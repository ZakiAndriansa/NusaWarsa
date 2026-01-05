const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

// Replace curly quotes with straight quotes
content = content.replace(/'/g, "'");
content = content.replace(/'/g, "'");
content = content.replace(/"/g, '"');
content = content.replace(/"/g, '"');

fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
console.log('✓ Replaced all curly quotes with straight quotes');
