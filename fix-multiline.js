const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

// Replace fullDescription: ' with fullDescription: `
content = content.replace(/fullDescription: '/g, 'fullDescription: `');

// Find and replace closing quotes for multi-line fullDescription
// This regex looks for patterns like:  ',\n    keyFigures
content = content.replace(/('\s*,\s*\n\s*keyFigures:)/g, '`,$1'.substring(1));

// Simpler: replace   ', followed by newline and keyFigures with   `,
content = content.replace(/'\s*,(\s*\n\s*)keyFigures:/g, '`,$1keyFigures:');

fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
console.log('✓ Fixed multi-line fullDescription quotes');
