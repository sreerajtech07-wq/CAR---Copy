const fs = require('fs');
const js = fs.readFileSync('scratch/nightingale_script.js', 'utf8');

console.log('Script length:', js.length);
console.log('Script sample:\n', js.substring(0, 1500));
