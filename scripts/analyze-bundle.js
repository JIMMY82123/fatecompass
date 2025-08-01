#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔍 分析Next.js包大小...')

try {
  // 构建项目
  console.log('📦 构建项目...')
  execSync('npm run build', { stdio: 'inherit' })

  // 分析包大小
  console.log('📊 分析包大小...')
  execSync('npx @next/bundle-analyzer .next/static/chunks', { stdio: 'inherit' })

  // 生成性能报告
  console.log('📈 生成性能报告...')
  const report = {
    timestamp: new Date().toISOString(),
    buildTime: Date.now(),
    bundleSizes: {},
    recommendations: []
  }

  // 检查包大小
  const chunksDir = path.join(process.cwd(), '.next/static/chunks')
  if (fs.existsSync(chunksDir)) {
    const files = fs.readdirSync(chunksDir)
    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(chunksDir, file)
        const stats = fs.statSync(filePath)
        const sizeInKB = Math.round(stats.size / 1024)
        report.bundleSizes[file] = `${sizeInKB}KB`
        
        if (sizeInKB > 500) {
          report.recommendations.push(`考虑分割大文件: ${file} (${sizeInKB}KB)`)
        }
      }
    })
  }

  // 保存报告
  fs.writeFileSync(
    path.join(process.cwd(), 'bundle-analysis.json'),
    JSON.stringify(report, null, 2)
  )

  console.log('✅ 分析完成！查看 bundle-analysis.json 获取详细报告')

} catch (error) {
  console.error('❌ 分析失败:', error.message)
  process.exit(1)
} 