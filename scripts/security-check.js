#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔒 Running security checks...\n');

// Проверка уязвимостей в зависимостях
console.log('📦 Checking npm dependencies...');
try {
  execSync('npm audit --audit-level=high', { stdio: 'inherit' });
  console.log('✅ npm audit passed\n');
} catch (error) {
  console.log('⚠️  npm audit found issues\n');
}

// Проверка yarn зависимостей
console.log('🧶 Checking yarn dependencies...');
try {
  execSync('yarn audit --level high', { stdio: 'inherit' });
  console.log('✅ yarn audit passed\n');
} catch (error) {
  console.log('⚠️  yarn audit found issues\n');
}

// Проверка устаревших зависимостей
console.log('📋 Checking outdated dependencies...');
try {
  execSync('yarn outdated', { stdio: 'inherit' });
  console.log('✅ Dependencies check completed\n');
} catch (error) {
  console.log('⚠️  Some dependencies are outdated\n');
}

// Проверка ESLint
console.log('🔍 Running ESLint security rules...');
try {
  execSync('npx eslint src/ --ext .ts,.tsx --config .eslintrc.cjs --max-warnings 0', { stdio: 'inherit' });
  console.log('✅ ESLint security check passed\n');
} catch (error) {
  console.log('⚠️  ESLint found issues\n');
}

// Проверка на захардкоженные секреты
console.log('🔐 Checking for hardcoded secrets...');
try {
  const result = execSync('grep -r "password\\|secret\\|token\\|key" src/ --exclude-dir=node_modules --exclude="*.test.*" --exclude="*.spec.*"', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('⚠️  Potential hardcoded secrets found:');
    console.log(result);
  } else {
    console.log('✅ No obvious hardcoded secrets found\n');
  }
} catch (error) {
  console.log('✅ No obvious hardcoded secrets found\n');
}

// Проверка console.log
console.log('📝 Checking for console.log statements...');
try {
  const result = execSync('grep -r "console\\.log" src/ --exclude-dir=node_modules --exclude="*.test.*" --exclude="*.spec.*"', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('⚠️  console.log statements found:');
    console.log(result);
  } else {
    console.log('✅ No console.log statements found\n');
  }
} catch (error) {
  console.log('✅ No console.log statements found\n');
}

// Проверка eval()
console.log('⚡ Checking for eval() usage...');
try {
  const result = execSync('grep -r "eval(" src/ --exclude-dir=node_modules --exclude="*.test.*" --exclude="*.spec.*"', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('⚠️  eval() usage found:');
    console.log(result);
  } else {
    console.log('✅ No eval() usage found\n');
  }
} catch (error) {
  console.log('✅ No eval() usage found\n');
}

// Проверка innerHTML
console.log('🌐 Checking for innerHTML usage...');
try {
  const result = execSync('grep -r "innerHTML" src/ --exclude-dir=node_modules --exclude="*.test.*" --exclude="*.spec.*"', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('⚠️  innerHTML usage found:');
    console.log(result);
  } else {
    console.log('✅ No innerHTML usage found\n');
  }
} catch (error) {
  console.log('✅ No innerHTML usage found\n');
}

console.log('🎉 Security check completed!'); 