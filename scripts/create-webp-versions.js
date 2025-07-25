import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

// Список изображений для конвертации в WebP
const imagesToConvert = [
  'governance-democracy.jpg',
  'job-critic.jpg',
  'job-explorer.jpg',
  'job-creator.jpg',
  'job-observer.jpg',
  'job-manager.jpg',
  'job-ambassador.jpg'
];

async function convertToWebP(inputPath, outputPath, options = {}) {
  try {
    const defaultOptions = {
      quality: 85,
      width: 800
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    await sharp(inputPath)
      .resize(finalOptions.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: finalOptions.quality,
        effort: 6
      })
      .toFile(outputPath);
      
    console.log(`✅ Converted to WebP: ${inputPath} -> ${outputPath}`);
    
    // Показываем размеры файлов
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`📊 Size: ${(originalSize / 1024).toFixed(1)}KB -> ${(webpSize / 1024).toFixed(1)}KB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error);
  }
}

async function convertAllImages() {
  console.log('🚀 Starting WebP conversion...');
  
  for (const imageName of imagesToConvert) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(imagesDir, imageName.replace('.jpg', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath);
    } else {
      console.log(`⚠️  File not found: ${inputPath}`);
    }
  }
  
  console.log('🎉 WebP conversion completed!');
}

convertAllImages().catch(console.error); 