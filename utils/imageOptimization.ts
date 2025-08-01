// 图片优化工具函数

export interface ImageOptimizationOptions {
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  width?: number
  height?: number
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside'
}

// 生成优化的图片URL
export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizationOptions = {}
): string {
  const {
    quality = 80,
    format = 'webp',
    width,
    height,
    fit = 'cover'
  } = options

  // 如果是本地图片，使用Next.js Image优化
  if (src.startsWith('/')) {
    const params = new URLSearchParams()
    if (quality) params.set('q', quality.toString())
    if (format) params.set('f', format)
    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    if (fit) params.set('fit', fit)
    
    return `${src}?${params.toString()}`
  }

  // 如果是外部图片，返回原URL
  return src
}

// 预加载图片
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// 批量预加载图片
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage))
}

// 获取图片尺寸
export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = reject
    img.src = src
  })
}

// 生成响应式图片srcset
export function generateSrcSet(
  src: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920],
  format: 'webp' | 'avif' = 'webp'
): string {
  return widths
    .map(width => `${getOptimizedImageUrl(src, { width, format })} ${width}w`)
    .join(', ')
}

// 生成图片的sizes属性
export function generateSizes(
  breakpoints: { [key: string]: string } = {
    '(max-width: 640px)': '100vw',
    '(max-width: 768px)': '50vw',
    '(max-width: 1024px)': '33vw',
    '(max-width: 1280px)': '25vw',
    '(min-width: 1281px)': '20vw'
  }
): string {
  return Object.entries(breakpoints)
    .map(([query, size]) => `${query} ${size}`)
    .join(', ')
}

// 检查图片是否已缓存
export function isImageCached(src: string): boolean {
  const img = new Image()
  img.src = src
  return img.complete
}

// 图片懒加载Intersection Observer
export function createImageLazyLoader(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {
    rootMargin: '50px 0px',
    threshold: 0.1
  }
): IntersectionObserver {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry)
      }
    })
  }, options)
}

// 压缩图片数据URL
export function compressImageDataUrl(
  dataUrl: string,
  quality: number = 0.8,
  maxWidth: number = 1920
): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    const img = new Image()
    
    img.onload = () => {
      // 计算新尺寸
      let { width, height } = img
      if (width > maxWidth) {
        height = (height * maxWidth) / width
        width = maxWidth
      }
      
      canvas.width = width
      canvas.height = height
      
      // 绘制图片
      ctx.drawImage(img, 0, 0, width, height)
      
      // 转换为压缩的data URL
      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality)
      resolve(compressedDataUrl)
    }
    
    img.src = dataUrl
  })
} 