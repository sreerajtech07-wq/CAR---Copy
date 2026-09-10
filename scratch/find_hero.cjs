const fs = require('fs');
const js = fs.readFileSync('scratch/nightingale_script.js', 'utf8');

const heroIdx = js.indexOf('hero-scroll-container');
console.log('Hero GSAP code snippet:\n', js.substring(Math.max(0, heroIdx - 200), heroIdx + 2000));
