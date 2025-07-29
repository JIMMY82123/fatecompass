'use client'

interface StructuredDataProps {
  type: 'website' | 'organization' | 'service' | 'article'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : 
               type === 'organization' ? 'Organization' :
               type === 'service' ? 'Service' : 'Article'
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          "name": "Fate Compass",
          "url": "https://fatecompass.net",
          "description": "Professional Eastern astrology services by Master 玄印. BaZi analysis, relationship compatibility, and life purpose readings.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fatecompass.net/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'organization':
        return {
          ...baseData,
          "name": "玄印命理 · Fate Compass",
          "alternateName": "Master 玄印",
          "url": "https://fatecompass.net",
          "logo": "https://fatecompass.net/logo.png",
          "description": "Professional Eastern astrology services providing BaZi analysis, relationship compatibility, and life purpose readings.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+86-15914228258",
            "contactType": "customer service",
            "availableLanguage": ["English", "Chinese"]
          },
          "sameAs": [
            "https://instagram.com/fatecompass",
            "https://tiktok.com/@fatecompass"
          ]
        }
      
      case 'service':
        return {
          ...baseData,
          "name": data.title,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "玄印命理 · Fate Compass"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": "Worldwide",
          "serviceType": "Astrology Reading"
        }
      
      case 'article':
        return {
          ...baseData,
          "headline": data.title,
          "description": data.excerpt,
          "author": {
            "@type": "Person",
            "name": "Master 玄印"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Fate Compass",
            "logo": {
              "@type": "ImageObject",
              "url": "https://fatecompass.net/logo.png"
            }
          },
          "datePublished": data.date,
          "dateModified": data.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://fatecompass.net/blog/${data.slug}`
          }
        }
      
      default:
        return baseData
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  )
} 