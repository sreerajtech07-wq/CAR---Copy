const fs = require('fs');
const css = fs.readFileSync('scratch/nightingale_style.css', 'utf8');

// Find :root variables
const rootIdx = css.indexOf(':root');
if (rootIdx !== -1) {
  console.log('--- :root variables ---');
  console.log(css.substring(rootIdx, rootIdx + 600));
}

// Find 3D, perspective, transform, canvas, or hero-sticky
console.log('\n--- Hero & 3D CSS rules ---');
const heroMatches = css.match(/\.(hero-scroll-container|hero-sticky|hero-bg-layer|floating-cards-layer|card-float|hero-bg-media)[\s\S]*?\{[\s\S]*?\}/g) || [];
heroMatches.slice(0, 10).forEach(m => console.log(m));
