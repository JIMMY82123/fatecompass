'use client'

import Head from 'next/head'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  structuredData?: any
}

export default function SEOOptimizer({
  title = "玄印命理 · FateCompass - 东方智慧，人生转折点",
  description = "通过5个问题探索你的命运认知倾向，获得个性化的人生指导。Master 玄印为您提供专业的命理咨询服务，帮助您找到人生方向。",
  keywords = "命理,八字,东方智慧,人生指导,命运,玄印,算命,占卜,人生转折点",
  image = "/images/master-xuan-yin.jpg",
  url = "https://fatecompass.net",
  type = "website",
  structuredData
}: SEOOptimizerProps) {
  
  // 默认结构化数据
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "玄印命理 · FateCompass",
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // 合并结构化数据
  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      {/* 基础Meta标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Master 玄印" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="zh-CN" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="玄印命理 · FateCompass" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter Card Meta标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@fatecompass" />
      
      {/* 移动端优化Meta标签 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="FateCompass" />
      
      {/* PWA相关Meta标签 */}
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="msapplication-TileColor" content="#1a1a2e" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* 安全相关Meta标签 */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
      
      {/* 性能优化Meta标签 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* 额外的结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Master 玄印",
            "jobTitle": "Traditional Eastern Wisdom Practitioner",
            "description": "专业的东方智慧实践者，拥有15年以上命理咨询经验",
            "url": url,
            "image": image,
            "sameAs": [
              "https://wa.me/8615914228258"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "FateCompass"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "玄印命理 · FateCompass",
            "description": "专业的命理咨询服务，提供八字分析、人生指导等服务",
            "url": url,
            "telephone": "+86 15914228258",
            "email": "contact@fatecompass.net",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.9042",
              "longitude": "116.4074"
            },
            "openingHours": "Mo-Su 09:00-21:00",
            "priceRange": "$$",
            "serviceType": "命理咨询",
            "areaServed": "全球",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "命理服务",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "人生目标解读",
                    "description": "通过八字分析帮助您找到人生目标和方向"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "关系兼容性分析",
                    "description": "分析人际关系和感情兼容性"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "财务时机指导",
                    "description": "指导投资和财务决策的最佳时机"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  )
}

// 页面特定的SEO组件
export function PageSEO({ 
  pageTitle, 
  pageDescription, 
  pageKeywords,
  pageImage,
  pageUrl 
}: {
  pageTitle: string
  pageDescription: string
  pageKeywords?: string
  pageImage?: string
  pageUrl?: string
}) {
  return (
    <SEOOptimizer
      title={`${pageTitle} - 玄印命理 · FateCompass`}
      description={pageDescription}
      keywords={pageKeywords}
      image={pageImage}
      url={pageUrl}
      type="article"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": pageDescription,
        "image": pageImage,
        "url": pageUrl,
        "author": {
          "@type": "Person",
          "name": "Master 玄印"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FateCompass",
          "logo": {
            "@type": "ImageObject",
            "url": "/favicon.svg"
          }
        },
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString()
      }}
    />
  )
}

// FAQ结构化数据组件
export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// 面包屑导航结构化数据
export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
} 