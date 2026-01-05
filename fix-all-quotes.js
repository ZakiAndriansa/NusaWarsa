const fs = require('fs');

let content = fs.readFileSync('src/lib/data.ts', 'utf-8');

console.log('Scanning for curly quotes...');

// Count occurrences before replacement
let count8216 = (content.match(/\u2018/g) || []).length;
let count8217 = (content.match(/\u2019/g) || []).length;
let count8220 = (content.match(/\u201C/g) || []).length;
let count8221 = (content.match(/\u201D/g) || []).length;

console.log(`Found ${count8216} left single curly quotes (U+2018)`);
console.log(`Found ${count8217} right single curly quotes (U+2019)`);
console.log(`Found ${count8220} left double curly quotes (U+201C)`);
console.log(`Found ${count8221} right double curly quotes (U+201D)`);

// Replace all curly quotes with straight quotes
// U+2018 (') and U+2019 (') -> ' (U+0027)
content = content.replace(/\u2018/g, "'"); // Left single quotation mark
content = content.replace(/\u2019/g, "'"); // Right single quotation mark
// U+201C (") and U+201D (") -> " (U+0022)
content = content.replace(/\u201C/g, '"'); // Left double quotation mark
content = content.replace(/\u201D/g, '"'); // Right double quotation mark

// Also handle any other quote variants
content = content.replace(/‚/g, "'");  // U+201A
content = content.replace(/‛/g, "'");  // U+201B
content = content.replace(/„/g, '"');  // U+201E
content = content.replace(/‟/g, '"');  // U+201F

fs.writeFileSync('src/lib/data.ts', content, 'utf-8');
console.log('\n✓ Replaced all curly quotes with straight quotes');
