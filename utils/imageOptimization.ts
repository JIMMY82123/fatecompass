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

// 懒加载Hook
export function useLazyImage(src: string, placeholder?: string) {
  const [imageSrc, setImageSrc] = useState(placeholder || src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
    }
    
    img.onerror = () => {
      setError(true)
      setIsLoaded(true)
    }
    
    img.src = src

    // 清理函数
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { imageSrc, isLoaded, error }
}

// 图片组件
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  lazy = true,
  priority = false,
  ...props
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  lazy?: boolean
  priority?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const optimizer = ImageOptimizer.getInstance()
  const webpSrc = optimizer.generateWebPUrl(src)
  const placeholder = optimizer.generatePlaceholder(width || 400, height || 300)
  
  const { imageSrc, isLoaded, error } = useLazyImage(webpSrc, placeholder)

  return (
    <div 
      className={`image-container ${className || ''}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: isLoaded ? 1 : 0.7
        }}
        {...props}
      />
      {!isLoaded && !error && (
        <div 
          className="image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="loading-spinner"></div>
        </div>
      )}
      {error && (
        <div 
          className="image-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#fef2f2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#dc2626'
          }}
        >
          图片加载失败
        </div>
      )}
    </div>
  )
}

// 背景图片优化组件
export function OptimizedBackgroundImage({
  src,
  children,
  className,
  ...props
}: {
  src: string
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const optimizer = ImageOptimizer.getInstance()
  const webpSrc = optimizer.generateWebPUrl(src)
  const { imageSrc, isLoaded } = useLazyImage(webpSrc)

  return (
    <div
      className={`optimized-bg-image ${className || ''}`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 0.3s ease',
        opacity: isLoaded ? 1 : 0.7,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  )
} 