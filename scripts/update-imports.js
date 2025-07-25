import fs from 'fs';
import path from 'path';

// Карта переименований для обновления импортов
const importUpdates = {
  // Hero Section
  'astronaut-optimized-optimized': 'hero-astronaut',
  'astronaut-optimized': 'hero-astronaut',
  'cosmoFusion_dao-optimized': 'hero-cosmo-fusion',
  'cosmoFusion_dao': 'hero-cosmo-fusion',
  
  // Problem Section
  'alone': 'problem-alone',
  
  // Reflection Section
  'vision': 'reflection-vision',
  
  // Solution Section
  'vision_astronaught': 'solution-vision-astronaut',
  
  // Evolution Section
  'peakpx (8)': 'evolution-peakpx',
  
  // Governance Section
  'democracy': 'governance-democracy',
  
  // Job Builder Section
  'creator': 'job-creator',
  'baby': 'job-observer',
  'manager': 'job-manager',
  'explorer': 'job-explorer',
  'critik': 'job-critic',
  'ambasodor': 'job-ambassador'
};

function updateImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    Object.entries(importUpdates).forEach(([oldName, newName]) => {
      const oldPattern = new RegExp(`from ['"]\\.\\./assets/images/${oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
      const newPattern = `from '../assets/images/${newName}`;
      
      if (content.match(oldPattern)) {
        content = content.replace(oldPattern, newPattern);
        updated = true;
        console.log(`  ✅ ${oldName} → ${newName}`);
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Ошибка обновления ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  }
  
  scanDirectory(dir);
  return files;
}

function updateAllImports() {
  console.log('🔄 Обновление импортов изображений...\n');
  
  const srcDir = 'src';
  const tsxFiles = findTsxFiles(srcDir);
  
  let updatedFiles = 0;
  let totalFiles = 0;
  
  tsxFiles.forEach(filePath => {
    totalFiles++;
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`📁 ${relativePath}:`);
    
    if (updateImportsInFile(filePath)) {
      updatedFiles++;
      console.log(`  ✅ Обновлен`);
    } else {
      console.log(`  ⏭️  Нет изменений`);
    }
  });
  
  console.log(`\n📊 Результат:`);
  console.log(`Проверено файлов: ${totalFiles}`);
  console.log(`Обновлено файлов: ${updatedFiles}`);
  
  return { totalFiles, updatedFiles };
}

// Выполняем обновление
const result = updateAllImports();

if (result.updatedFiles > 0) {
  console.log('\n✅ Импорты успешно обновлены!');
} else {
  console.log('\n⚠️  Импорты не найдены или уже обновлены.');
} 