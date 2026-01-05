const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

// Step 1: Replace ALL curly quotes with straight quotes (more comprehensive)
// Left single quotation marks
content = content.replace(/'/g, "'");
content = content.replace(/‚/g, "'");
content = content.replace(/‛/g, "'");
// Right single quotation marks
content = content.replace(/'/g, "'");
content = content.replace(/'/g, "'");
// Left double quotation marks
content = content.replace(/"/g, '"');
content = content.replace(/„/g, '"');
// Right double quotation marks
content = content.replace(/"/g, '"');
content = content.replace(/"/g, '"');

// Step 2: Fix fullDescription multi-line strings
// Replace fullDescription: ' with fullDescription: `
content = content.replace(/fullDescription: '/g, 'fullDescription: `');

// Step 3: Fix closing quotes for fullDescription
// Look for pattern: ',\n followed by whitespace and keyFigures:
// Replace with `,\n
content = content.replace(/'(,\s*\n\s*)keyFigures:/g, '`$1keyFigures:');

// Step 4: Remove any double commas that might have been added (like `,``)
content = content.replace(/,``,/g, '`,');

// Step 5: Fix any remaining `,`` patterns
content = content.replace(/,``/g, '`,');

fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
console.log('✓ Fixed all syntax errors in data.ts');
