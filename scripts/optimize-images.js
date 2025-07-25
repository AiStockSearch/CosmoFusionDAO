import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

// Список изображений для оптимизации
const imagesToOptimize = [
  'astronaut-optimized.jpg',
  'cosmoFusion_dao.jpg',
  'vision.jpg',
  'explorer.jpg',
  'manager.jpg',
  'creator.jpg',
  'critik.jpg',
  'democracy.jpg',
  'baby.jpg',
  'ambasodor.jpg'
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const defaultOptions = {
      quality: 80,
      width: 1200,
      format: 'jpeg'
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    await sharp(inputPath)
      .resize(finalOptions.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: finalOptions.quality })
      .toFile(outputPath);
      
    console.log(`✅ Optimized: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...');
  
  for (const imageName of imagesToOptimize) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(imagesDir, imageName.replace('.jpg', '-optimized.jpg'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath);
    } else {
      console.log(`⚠️  File not found: ${inputPath}`);
    }
  }
  
  console.log('🎉 Image optimization completed!');
}

optimizeAllImages().catch(console.error); 