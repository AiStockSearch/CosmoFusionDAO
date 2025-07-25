import fs from 'fs';
import path from 'path';

const buildDir = 'build/static/js';
const cssDir = 'build/static/css';

function analyzeBundle() {
  console.log('📊 Analyzing bundle size...\n');

  // Analyze JS files
  if (fs.existsSync(buildDir)) {
    const jsFiles = fs.readdirSync(buildDir);
    jsFiles.forEach(file => {
      const filePath = path.join(buildDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`📦 ${file}: ${sizeKB} KB (${sizeMB} MB)`);
      
      if (stats.size > 200 * 1024) { // > 200KB
        console.log(`⚠️  Large file detected: ${file} (${sizeMB} MB)`);
      }
    });
  }

  // Analyze CSS files
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir);
    cssFiles.forEach(file => {
      const filePath = path.join(cssDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      
      console.log(`🎨 ${file}: ${sizeKB} KB`);
    });
  }

  // Check for unused dependencies
  console.log('\n🔍 Checking for potential optimizations:');
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies);
  
  console.log(`📦 Total dependencies: ${dependencies.length}`);
  
  // Check for large dependencies
  const largeDeps = [
    'framer-motion',
    'react-helmet-async',
    '@sentry/react'
  ];
  
  largeDeps.forEach(dep => {
    if (dependencies.includes(dep)) {
      console.log(`⚠️  Large dependency detected: ${dep}`);
    }
  });

  console.log('\n💡 Optimization suggestions:');
  console.log('1. Consider code splitting for large components');
  console.log('2. Use React.lazy() for route-based splitting');
  console.log('3. Optimize images further with WebP format');
  console.log('4. Consider removing unused dependencies');
  console.log('5. Enable gzip compression on server');
}

analyzeBundle(); 