'use client'

interface StructuredDataProps {
  type: 'website' | 'organization' | 'service' | 'article' | 'person' | 'localBusiness'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : 
               type === 'organization' ? 'Organization' :
               type === 'service' ? 'Service' : 
               type === 'article' ? 'Article' :
               type === 'person' ? 'Person' :
               type === 'localBusiness' ? 'LocalBusiness' : 'WebSite'
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          "name": "Fate Compass | 玄印命理",
          "url": "https://fatecompass.net",
          "description": "Professional Eastern astrology services by Master 玄印. BaZi analysis, relationship compatibility, and life purpose readings.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fatecompass.net/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": ["en-US", "zh-CN"],
          "isAccessibleForFree": true
        }
      
      case 'organization':
        return {
          ...baseData,
          "name": "玄印命理 · Fate Compass",
          "alternateName": ["Master 玄印", "Xuan Yin", "Fate Compass"],
          "url": "https://fatecompass.net",
          "logo": {
            "@type": "ImageObject",
            "url": "https://fatecompass.net/logo.png",
            "width": 512,
            "height": 512
          },
          "description": "Professional Eastern astrology services providing BaZi analysis, relationship compatibility, and life purpose readings.",
          "foundingDate": "2020",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+86-15914228258",
            "contactType": "customer service",
            "availableLanguage": ["English", "Chinese"],
            "areaServed": "Worldwide"
          },
          "sameAs": [
            "https://instagram.com/fatecompass",
            "https://tiktok.com/@fatecompass"
          ],
          "knowsAbout": [
            "Eastern Astrology",
            "BaZi Analysis", 
            "Feng Shui",
            "Life Purpose Reading",
            "Relationship Compatibility"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.9042,
              "longitude": 116.4074
            },
            "geoRadius": "10000"
          }
        }
      
      case 'person':
        return {
          ...baseData,
          "name": "Master 玄印",
          "alternateName": ["Xuan Yin", "玄印"],
          "jobTitle": "Eastern Astrology Master",
          "description": "Professional Eastern astrology practitioner with over 10 years of experience in BaZi analysis and life guidance.",
          "knowsAbout": [
            "Eastern Astrology",
            "BaZi Analysis",
            "Feng Shui",
            "Life Purpose Reading",
            "Relationship Compatibility"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Fate Compass"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+86-15914228258",
            "contactType": "customer service"
          }
        }
      
      case 'service':
        return {
          ...baseData,
          "name": data.title || "Eastern Astrology Reading",
          "description": data.description || "Professional Eastern astrology services including BaZi analysis, relationship compatibility, and life purpose readings.",
          "provider": {
            "@type": "Person",
            "name": "Master 玄印",
            "jobTitle": "Eastern Astrology Master"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString()
          },
          "areaServed": "Worldwide",
          "serviceType": "Astrology Reading",
          "category": "Spiritual Services",
          "audience": {
            "@type": "Audience",
            "audienceType": "People seeking life guidance and spiritual direction"
          }
        }
      
      case 'article':
        return {
          ...baseData,
          "headline": data.title,
          "description": data.excerpt,
          "author": {
            "@type": "Person",
            "name": "Master 玄印",
            "jobTitle": "Eastern Astrology Master"
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
          },
          "keywords": data.keywords || ["Eastern Astrology", "BaZi", "Life Purpose", "Spiritual Guidance"],
          "articleSection": "Spiritual Wisdom",
          "inLanguage": "en-US"
        }
      
      case 'localBusiness':
        return {
          ...baseData,
          "name": "Fate Compass - Eastern Astrology Services",
          "description": "Professional Eastern astrology services providing BaZi analysis, relationship compatibility, and life purpose readings.",
          "url": "https://fatecompass.net",
          "telephone": "+86-15914228258",
          "email": "chenxiao0801@hotmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CN",
            "addressLocality": "Beijing"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.9042,
            "longitude": 116.4074
          },
          "openingHours": "Mo-Su 09:00-21:00",
          "priceRange": "$$",
          "currenciesAccepted": "USD, CNY",
          "paymentAccepted": "Cash, Credit Card, Digital Payment",
          "areaServed": "Worldwide",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.9042,
              "longitude": 116.4074
            },
            "geoRadius": "10000"
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