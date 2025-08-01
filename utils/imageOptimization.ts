// 图片优化工具
export interface ImageOptimizationConfig {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg'
  lazy?: boolean
  placeholder?: string
}

export class ImageOptimizer {
  private static instance: ImageOptimizer
  private imageCache: Map<string, string> = new Map()

  static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer()
    }
    return ImageOptimizer.instance
  }

  // 生成WebP格式的图片URL
  generateWebPUrl(src: string, quality: number = 80): string {
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src)!
    }

    // 如果是外部图片，直接返回
    if (src.startsWith('http')) {
      return src
    }

    // 为本地图片添加WebP支持
    const webpUrl = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    this.imageCache.set(src, webpUrl)
    return webpUrl
  }

  // 生成响应式图片srcset
  generateSrcSet(src: string, sizes: number[] = [320, 640, 960, 1280]): string {
    return sizes
      .map(size => `${this.generateWebPUrl(src)} ${size}w`)
      .join(', ')
  }

  // 生成图片占位符
  generatePlaceholder(width: number, height: number, color: string = '#f3f4f6'): string {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color}'/%3E%3C/svg%3E`
  }

  // 预加载关键图片
  preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = reject
      img.src = src
    })
  }

  // 批量预加载图片
  async preloadImages(sources: string[]): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src))
    await Promise.allSettled(promises)
  }
} 