const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

console.log('Fixing traditionsData fullDescription quotes...');

// First, replace any remaining curly quotes
content = content.replace(/\u2018/g, "'"); // Left single quotation mark
content = content.replace(/\u2019/g, "'"); // Right single quotation mark
content = content.replace(/\u201C/g, '"'); // Left double quotation mark
content = content.replace(/\u201D/g, '"'); // Right double quotation mark

// Find the traditionsData section
const traditionsStart = content.indexOf('export const traditionsData');
const traditionsContent = content.substring(traditionsStart);

// Count how many fullDescription with single quotes in traditionsData
const matches = traditionsContent.match(/fullDescription: '[^`]/g);
console.log(`Found ${matches ? matches.length : 0} fullDescription fields with single quotes in traditionsData`);

// Replace fullDescription: ' with fullDescription: ` (after traditionsData starts)
const beforeTraditions = content.substring(0, traditionsStart);
let afterTraditions = content.substring(traditionsStart);

// Replace in traditionsData section
afterTraditions = afterTraditions.replace(/fullDescription: '/g, 'fullDescription: `');

// Fix closing quotes - look for ',\n followed by whitespace and common field names
afterTraditions = afterTraditions.replace(/'(,\s*\n\s*)(history|meaning|imageId):/g, '`$1$2:');

// Combine back
content = beforeTraditions + afterTraditions;

fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
console.log('✓ Fixed all traditionsData fullDescription quotes');
