import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

// План переименования изображений по секциям
const renamePlan = {
  // Hero Section
  'astronaut-optimized-optimized.jpg': 'hero-astronaut.jpg',
  'astronaut-optimized.webp': 'hero-astronaut.webp',
  'cosmoFusion_dao-optimized.jpg': 'hero-cosmo-fusion.jpg',
  'cosmoFusion_dao.webp': 'hero-cosmo-fusion.webp',
  
  // Problem Section
  'alone.jpg': 'problem-alone.jpg',
  'alone.webp': 'problem-alone.webp',
  
  // Reflection Section
  'vision.jpg': 'reflection-vision.jpg',
  'vision.webp': 'reflection-vision.webp',
  
  // Solution Section
  'vision_astronaught.jpg': 'solution-vision-astronaut.jpg',
  
  // Evolution Section
  'peakpx (8).jpg': 'evolution-peakpx.jpg',
  
  // Governance Section
  'democracy.jpg': 'governance-democracy.jpg',
  
  // Job Builder Section
  'creator.jpg': 'job-creator.jpg',
  'creator.webp': 'job-creator.webp',
  'baby.jpg': 'job-observer.jpg',
  'baby.webp': 'job-observer.webp',
  'manager.jpg': 'job-manager.jpg',
  'manager.webp': 'job-manager.webp',
  'explorer.jpg': 'job-explorer.jpg',
  'explorer.webp': 'job-explorer.webp',
  'critik.jpg': 'job-critic.jpg',
  'critik.webp': 'job-critic.webp',
  'ambasodor.jpg': 'job-ambassador.jpg',
  'ambasodor.webp': 'job-ambassador.webp'
};

function renameImages() {
  console.log('🔄 Переименование изображений по секциям...\n');
  
  let renamedCount = 0;
  let errors = [];
  
  Object.entries(renamePlan).forEach(([oldName, newName]) => {
    const oldPath = path.join(imagesDir, oldName);
    const newPath = path.join(imagesDir, newName);
    
    if (fs.existsSync(oldPath)) {
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ ${oldName} → ${newName}`);
        renamedCount++;
      } catch (error) {
        console.error(`❌ Ошибка переименования ${oldName}:`, error.message);
        errors.push({ oldName, newName, error: error.message });
      }
    } else {
      console.log(`⚠️  Файл не найден: ${oldName}`);
    }
  });
  
  console.log(`\n📊 Результат:`);
  console.log(`Переименовано: ${renamedCount} файлов`);
  console.log(`Ошибок: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log('\n❌ Ошибки:');
    errors.forEach(({ oldName, newName, error }) => {
      console.log(`- ${oldName} → ${newName}: ${error}`);
    });
  }
  
  return { renamedCount, errors };
}

function generateUpdateCommands() {
  console.log('\n🔄 Команды для обновления импортов:');
  console.log('\n# Обновление импортов в файлах:');
  
  Object.entries(renamePlan).forEach(([oldName, newName]) => {
    const oldImport = oldName.replace(/\.(jpg|webp)$/, '');
    const newImport = newName.replace(/\.(jpg|webp)$/, '');
    console.log(`sed -i '' 's/${oldImport}/${newImport}/g' src/**/*.tsx`);
  });
}

// Выполняем переименование
const result = renameImages();

if (result.errors.length === 0) {
  generateUpdateCommands();
  console.log('\n✅ Переименование завершено успешно!');
} else {
  console.log('\n⚠️  Переименование завершено с ошибками.');
} 