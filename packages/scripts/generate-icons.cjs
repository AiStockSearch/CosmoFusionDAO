const sharp = require('sharp');
const fs = require('fs');
const pngToIco = require('png-to-ico');
const { optimize } = require('svgo');

const sizes = [
  { name: 'favicon.png', size: 64 },
  { name: 'logo126.png', size: 126 },
  { name: 'logo192.png', size: 192 },
  { name: 'logo512.png', size: 512 },
];

async function optimizeSvg() {
  const svgPath = 'public/favicon.svg';
  const svgData = fs.readFileSync(svgPath, 'utf8');
  const result = optimize(svgData, { path: svgPath });
  fs.writeFileSync(svgPath, result.data, 'utf8');
  console.log('Optimized public/favicon.svg');
}

async function generatePngs() {
  for (const { name, size } of sizes) {
    await sharp('public/favicon.svg')
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png({ quality: 100 })
      .toFile(`public/${name}`);
    console.log(`Generated public/${name}`);
  }
}

async function generateIco() {
  const icoBuffer = await pngToIco(['public/favicon.png']);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Generated public/favicon.ico');
}

(async () => {
  await optimizeSvg();
  await generatePngs();
  await generateIco();
})(); 