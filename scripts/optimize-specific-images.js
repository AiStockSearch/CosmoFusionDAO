import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

// Список изображений для оптимизации
const imagesToOptimize = [
  'governance-democracy.jpg',
  'job-critic.jpg'
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const defaultOptions = {
      quality: 85,
      width: 800,
      format: 'jpeg'
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    await sharp(inputPath)
      .resize(finalOptions.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: finalOptions.quality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
      
    console.log(`✅ Optimized: ${inputPath} -> ${outputPath}`);
    
    // Показываем размеры файлов
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`📊 Size: ${(originalSize / 1024).toFixed(1)}KB -> ${(optimizedSize / 1024).toFixed(1)}KB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting specific image optimization...');
  
  for (const imageName of imagesToOptimize) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(imagesDir, imageName.replace('.jpg', '-optimized.jpg'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath);
      
      // Заменяем оригинальный файл оптимизированным
      fs.unlinkSync(inputPath);
      fs.renameSync(outputPath, inputPath);
      console.log(`🔄 Replaced original with optimized version: ${imageName}`);
    } else {
      console.log(`⚠️  File not found: ${inputPath}`);
    }
  }
  
  console.log('🎉 Specific image optimization completed!');
}

optimizeAllImages().catch(console.error); 