const sharp = require('sharp');
const fs = require('fs');

const sizes = [
  { name: 'favicon.png', size: 64 },
  { name: 'logo192.png', size: 192 },
  { name: 'logo512.png', size: 512 },
];

async function generatePngs() {
  for (const { name, size } of sizes) {
    await sharp('public/favicon.svg')
      .resize(size, size)
      .png({ quality: 100 })
      .toFile(`public/${name}`);
    console.log(`Generated public/${name}`);
  }
}

async function generateIco() {
  // sharp-ico нужен для генерации .ico из PNG
  const ico = require('sharp-ico');
  const pngBuffer = await sharp('public/favicon.svg')
    .resize(64, 64)
    .png({ quality: 100 })
    .toBuffer();
  const icoBuffer = await ico([pngBuffer]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('Generated public/favicon.ico');
}

(async () => {
  await generatePngs();
  await generateIco();
})();
