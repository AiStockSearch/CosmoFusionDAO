import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';
const srcDir = 'src';

// Изображения, которые используются в коде (из анализа импортов)
const usedImages = [
  'astronaut-optimized-optimized.jpg',
  'astronaut-optimized.webp',
  'cosmoFusion_dao-optimized.jpg',
  'cosmoFusion_dao.webp',
  'democracy.jpg',
  'vision_astronaught.jpg',
  'alone.jpg',
  'alone.webp',
  'vision.jpg',
  'vision.webp',
  'peakpx (8).jpg',
  'creator.jpg',
  'creator.webp',
  'baby.jpg',
  'baby.webp',
  'manager.jpg',
  'manager.webp',
  'explorer.jpg',
  'explorer.webp',
  'critik.jpg',
  'critik.webp',
  'ambasodor.jpg',
  'ambasodor.webp'
];

function findUnusedImages() {
  console.log('🔍 Поиск неиспользуемых изображений...\n');
  
  const allImages = fs.readdirSync(imagesDir);
  const unusedImages = [];
  const totalSize = { used: 0, unused: 0 };
  
  allImages.forEach(image => {
    const imagePath = path.join(imagesDir, image);
    const stats = fs.statSync(imagePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    if (usedImages.includes(image)) {
      console.log(`✅ Используется: ${image} (${sizeKB} KB)`);
      totalSize.used += stats.size;
    } else {
      console.log(`❌ Не используется: ${image} (${sizeKB} KB)`);
      unusedImages.push({ name: image, size: stats.size, sizeKB, sizeMB });
      totalSize.unused += stats.size;
    }
  });
  
  console.log('\n📊 Статистика:');
  console.log(`Используемые изображения: ${usedImages.length}`);
  console.log(`Неиспользуемые изображения: ${unusedImages.length}`);
  console.log(`Общий размер используемых: ${(totalSize.used / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Общий размер неиспользуемых: ${(totalSize.unused / 1024 / 1024).toFixed(2)} MB`);
  
  if (unusedImages.length > 0) {
    console.log('\n🗑️  Неиспользуемые изображения для удаления:');
    unusedImages.forEach(img => {
      console.log(`- ${img.name} (${img.sizeKB} KB)`);
    });
    
    console.log('\n💾 Потенциальная экономия места:');
    console.log(`${(totalSize.unused / 1024 / 1024).toFixed(2)} MB`);
    
    console.log('\n🚀 Команда для удаления:');
    console.log('rm ' + unusedImages.map(img => `"${imagesDir}/${img.name}"`).join(' '));
  } else {
    console.log('\n✅ Все изображения используются!');
  }
}

findUnusedImages(); 