const https = require('https');
const fs = require('fs');

https.get('https://www.nightingaleholidays.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/nightingale.html', data);
    console.log('Saved nightingale.html, length:', data.length);
    
    // Extract color codes
    const hexes = data.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g) || [];
    console.log('Unique colors:', [...new Set(hexes)]);
    
    // Check for canvas or 3D / WebGL / Three.js / Spline / Vanta
    const hasThree = data.includes('three') || data.includes('THREE');
    const hasCanvas = data.includes('<canvas');
    const hasSpline = data.includes('spline');
    const hasWebGL = data.includes('webgl') || data.includes('WebGL');
    console.log('3D indicators:', { hasThree, hasCanvas, hasSpline, hasWebGL });
    
    // Check background styles or CSS links
    const bgMatches = data.match(/background[^;}"']+/gi) || [];
    console.log('Background styles sample:', bgMatches.slice(0, 15));
  });
}).on('error', err => console.error(err));
