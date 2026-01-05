const fs = require('fs');

const content = fs.readFileSync('src/lib/data.ts', 'utf-8');
const lines = content.split('\n');
const line23 = lines[22]; // Line 23 is index 22

console.log('Line 23:');
console.log(line23);
console.log('\nProblematic characters:');

for(let i = 0; i < line23.length; i++) {
  const char = line23[i];
  const code = char.charCodeAt(0);

  // Check for non-ASCII or quote characters
  if(code > 127 || char === "'" || char === '`' || char === '"') {
    console.log(`Position ${i}: '${char}' (code: ${code})`);
  }
}
