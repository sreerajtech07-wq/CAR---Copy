const fs = require('fs');
const html = fs.readFileSync('scratch/nightingale.html', 'utf8');

// Find the home section
const homeIdx = html.indexOf('id="home"');
console.log('Home section snippet:');
console.log(html.substring(Math.max(0, homeIdx - 200), homeIdx + 1500));

// Find script tags
const scriptMatches = html.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('\nScripts count:', scriptMatches.length);
scriptMatches.forEach((s, idx) => {
  console.log(`--- Script ${idx + 1} ---`);
  console.log(s.substring(0, 300));
});

// Find external CSS links
const linkMatches = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
console.log('\nStylesheets:');
linkMatches.forEach(l => console.log(l));
